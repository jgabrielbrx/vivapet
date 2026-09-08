import { AlertaEstoqueRepository } from "@/repositories/AlertaEstoqueRepository/AlertaEstoqueRepository";
import { RegistroUsoRepository } from "@/repositories/RegistroUsoRepository/RegistroUsoRepository";
import { SuprimentoRepository } from "@/repositories/SuprimentoRepository";

export class RegistroUsoService {
    private _registroUsoRepository: RegistroUsoRepository;
    private _suprimentoRepository: SuprimentoRepository;
    private _alertaEstoqueRepository: AlertaEstoqueRepository;
    
    constructor(){
        this._registroUsoRepository = new RegistroUsoRepository;
        this._suprimentoRepository = new SuprimentoRepository;
        this._alertaEstoqueRepository = new AlertaEstoqueRepository;
    }

    public async listarHistoricoPorAnimal(id_animal: number){
        return this._registroUsoRepository.buscarPorAnimal(id_animal);
    }

    public async listarHistoricoPorSuprimento(id_suprimento: number){
        return this._registroUsoRepository.buscarPorSuprimento(id_suprimento);
    }
}