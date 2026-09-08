import { Doacao } from "@/models/Doacao/Doacao";
import { ItemDoacao } from "@/models/ItemDoacao/ItemDoacao";
import { DoacaoRepository } from "@/repositories/DoacaoRepository/DoacaoRepository";
import { DoadorRepository } from "@/repositories/DoadorRepository/DoadorRepository";
import { ItemDoacaoRepository } from "@/repositories/ItemDoacaoRepository/ItemDoacaoRepository";
import { SuprimentoRepository } from "@/repositories/SuprimentoRepository";

export class DoacaoService {
    private _doacaoRepository: DoacaoRepository;
    private _itemDoacaoRepository: ItemDoacaoRepository;
    private _doadorRepository: DoadorRepository;
    private _suprimentoRepository: SuprimentoRepository;

    constructor() {
        this._doacaoRepository = new DoacaoRepository();
        this._itemDoacaoRepository = new ItemDoacaoRepository();
        this._doadorRepository = new DoadorRepository();
        this._suprimentoRepository = new SuprimentoRepository();
    }

    //REGRA DE NEGÓCIO - REGISTRAR A DOAÇÃO, ITENS E INCREMENTAR O ESTOQUE:
    public async registrarDoacao(

        //PARÂMETROS DO MÉTODO RECEBIDOS DA TELA:
        dados: {
            id_doador: number;
            observacoes?: string;

            itens: {
                id_suprimento: number;
                quantidade: number;
                data_validade: Date;
                observacoes?: string;
            }[];

        })

    //INÍCIO DO MÉTODO
    {
        //Passo 1 - Verificar se o doador existe
        const doador = await this._doadorRepository.buscarPorId(dados.id_doador);

        if (!doador) {
            throw new Error('Doador não encontrado!')
        }

        //Checar se veio itens na tela
        if (!dados.itens || dados.itens.length === 0) {
            throw new Error('A doação precisa conter pelo menos um item!')
        }

        //Passo 2 - A instância de doação principal
        const novaDoacao = new Doacao(
            0,
            new Date(),
            dados.id_doador,
            [], //Inicialmente começa com os itens com um array vazio, para depois preenchê-lo
            dados.observacoes
        );

        //Passo 3 - Preencher o array de itens:
        for (const itemDoado of dados.itens) {
            const suprimento = await this._suprimentoRepository.buscarPorId(itemDoado.id_suprimento);

            if (!suprimento) {
                throw new Error('Suprimento não encontrado no sistema!')
            }

            //Criar a instância do item
            const novoItem = new ItemDoacao(
                0,
                itemDoado.quantidade,
                itemDoado.data_validade,
                itemDoado.id_suprimento,
                itemDoado.observacoes
            );

            novaDoacao.itens.push(novoItem);

            //Regra de negócio - incrementar o estoque do suprimento
            suprimento.quantidade_estoque = suprimento.quantidade_estoque + novoItem.quantidade;

            await this._suprimentoRepository.atualizar(suprimento);

            //Passo 4 - persistir a doação e seus itens:
            await this._doacaoRepository.salvar(novaDoacao);

            for (const item of novaDoacao.itens) {
                await this._itemDoacaoRepository.salvar(item, novaDoacao.id_doacao);
            }
            return novaDoacao;
        }
    }

    //Regra de negócio - traz a doação completa (relacionamento de composição):
    public async buscarDoacaoCompleta(id_doacao: number) {
        const doacao = await this._doacaoRepository.buscarPorId(id_doacao);

        if (!doacao) {
            return null;
        }

        const itens = await this._itemDoacaoRepository.listarPorDoacao(id_doacao);

        doacao.itens = itens;
        
        return doacao;
    }
}