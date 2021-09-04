import { CreateDishDto } from "./create-dish-dto";

export class Dish {
    constructor(createDishDto: CreateDishDto) {
        this.Nome = createDishDto.Nome;
        this.Imagem = createDishDto.Imagem;
        this.Descricao = createDishDto.Descricao;
        this.Categoria = createDishDto.Categoria;
        this.Preco = createDishDto.Preco;
    }

    Id: number;
    Nome: string;
    Imagem: string;
    Descricao: string;
    Categoria: string;
    Preco: number;
    CriadoEm: Date;
    AtualizadoEm: Date;
}