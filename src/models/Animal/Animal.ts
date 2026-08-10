import { SexoAnimal, StatusAnimal, TipoAnimal } from "../Enums/Enums";
import { Necessidade } from "../Necessidade/Necessidade";

export class Animal {
    private readonly _id: string;
    private _nomeDoAnimal: string;
    private _tipo: TipoAnimal;
    private _raca: string;
    private _sexoDoAnimal: SexoAnimal;
    private _dataNascimento: Date;
    private _dataEntradaAbrigo: Date;
    private _observacao: string;
    private _statusAnimal: StatusAnimal;

    private _necessidades: Necessidade[];

    constructor(id: string, nomeDoAnimal: string, tipo: TipoAnimal, raca: string, sexoDoAnimal: SexoAnimal, dataNascimento: Date, dataEntradaAbrigo: Date, observacao: string, statusAnimal: StatusAnimal, necessidades: Necessidade[] = []){
        this._id = id;
        this._nomeDoAnimal = nomeDoAnimal;
        this._tipo = tipo;
        this._raca = raca;
        this._sexoDoAnimal = sexoDoAnimal;
        this._dataNascimento = dataNascimento;
        this._dataEntradaAbrigo = dataEntradaAbrigo;
        this._observacao = observacao;
        this._statusAnimal = statusAnimal;
        this._necessidades = necessidades;
    }

    public get id(){
        return this._id;
    }

    public get nomeDoAnimal(){
        return this._nomeDoAnimal;
    }

    public get tipo(){
        return this._tipo;
    }

    public get raca(){
        return this._raca;
    }
    
    public get sexoDoAnimal(){
        return this._sexoDoAnimal;
    }

    public get dataNascimento(){
        return this._dataNascimento;
    }

    public get dataEntradaAbrigo(){
        return this._dataEntradaAbrigo;
    }

    public get observacao(){
        return this._observacao;
    }

    public get statusAnimal(){
        return this._statusAnimal;
    }

    public set nomeDoAnimal(nomeDoAnimal: string){
        this._nomeDoAnimal = nomeDoAnimal;
    }

    public set tipo(tipo: TipoAnimal){
        this._tipo = tipo;
    }

    public set raca(raca: string){
        this._raca = raca;
    }

    public set sexoDoAnimal(sexoDoAnimal: SexoAnimal){
        this._sexoDoAnimal = sexoDoAnimal;
    }

    public set dataNascimento(dataNascimento: Date){
        this._dataNascimento = dataNascimento;
    }

    public set dataEntradaAbrigo(dataEntradaAbrigo: Date){
        this._dataEntradaAbrigo = dataEntradaAbrigo;
    }

    public set observacao(observacao: string){
        this._observacao = observacao;
    }

    public set statusAnimal(statusAnimal: StatusAnimal){
        this._statusAnimal = statusAnimal;
    }

    public calcularIdade(){
        //RETORNA DATA COMPLETA DE HOJE
        const hoje = new Date();

        //PEGA O ANO DA DATA DE HOJE E SUBTRAI PELO ANO DA DATA DE ANIVERSÁRIO DO ANIMAL, RETORNANDO APENAS O ANO:
        let idade = hoje.getFullYear() - this._dataNascimento.getFullYear();

        /*
        CHECANDO O MÊS E O DIA DO ANIVERSÁRIO DO ANIMAL:
        SE O MÊS, NA DATA DE HOJE, FOR MENOR DO QUE O MÊS DE NASCIMENTO DO ANIMAL, JÁ RETORNA VERDADEIRO;
        MAS SE O MÊS NA DATA DE HOJE, FOR IGUAL AO MÊS DE NASCIMENTO DO ANIMAL CHECA-SE O DIA.
        */
        const aniversarioNaoOcorrido = hoje.getMonth() < this._dataNascimento.getMonth() || (
            hoje.getMonth() === this._dataNascimento.getMonth() && hoje.getDate() < this._dataNascimento.getDate()
        );

        if(aniversarioNaoOcorrido){
            idade--;
        }

        return idade;
    }

    //ADICIONAR NECESSIDADES DO ANIMAL
    public adicionarNecessidade(necessidade: Necessidade){
        this._necessidades.push(necessidade);
    }
}