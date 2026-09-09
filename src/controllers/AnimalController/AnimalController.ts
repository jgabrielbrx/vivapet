import { AnimalService } from "@/services/AnimalService/AnimalService";
import { NextRequest, NextResponse } from "next/server";

export class AnimalController {
    private _animalService: AnimalService;

    constructor() {
        this._animalService = new AnimalService();
    }

    public async listarTodos(req: NextRequest) {
        try {
            const animals = await this._animalService.listarTodos();

            return NextResponse.json(animals, { status: 200 });
        } catch (error: unknown) {
            const mensagem = error instanceof Error ? error.message : "Error interno ao buscar a lista de animais no servidor.";

            return NextResponse.json({ error: mensagem }, { status: 500 });
        }
    }

    public async cadastrar(req: NextRequest) {
        try {
            const body = await req.json();

            const { nome, tipo, raca, sexo, data_nascimento, data_entrada_abrigo, observacoes, id_cuidador } = body;

            const animalSalvo = await this._animalService.cadastrarAnimal({
                nome, tipo, raca, sexo, data_nascimento: new Date(data_nascimento), data_entrada_abrigo: new Date(data_entrada_abrigo), observacoes
            }, Number(id_cuidador));

            return NextResponse.json(animalSalvo, { status: 201 });

        } catch (error: unknown) {

            const mensagem = error instanceof Error ? error.message : "Não foi possível concluir o cadastro do animal devido a um erro inesperado.";

            return NextResponse.json({ error: mensagem }, { status: 400 });
        }
    }

    public async buscarCompleto(req: NextRequest, params: { id_animal: string }) {
        try {

            const id_animal = Number(params.id_animal);

            const animal = await this._animalService.buscarAnimalCompleto(id_animal);

            if (!animal) {
                return NextResponse.json({ error: "Nenhum animal foi encontrado com o ID especificado." }, { status: 400 })
            }

            return NextResponse.json(animal, { status: 200 })

        } catch (error: unknown) {

            const mensagem = error instanceof Error ? error.message : "ID do animal fornecido é inválido!";

            return NextResponse.json({ error: mensagem }, { status: 500 });
        }
    }
    /*
    public async atualizarStatus(req: NextRequest, params: {id_animal: string}){
        try{
            const 
        }
    }
    */
    public async listarPorCuidador(req: NextRequest, params: { id_cuidador: string }) {
        try {
            const id_cuidador = Number(params.id_cuidador);

            if(isNaN(id_cuidador)){
                return NextResponse.json({ error: "O ID do cuidador fornecido é inválido!" }, { status: 400 })
            }

            const animais = await this._animalService.listarPorCuidador(id_cuidador);

        } catch (error: unknown) {
            const mensagem = error instanceof Error ? error.message : "Erro interno ao listar os animais vinculados a este cuidador.";

            return NextResponse.json({ error: mensagem }, { status: 500 });
        }
    }
}