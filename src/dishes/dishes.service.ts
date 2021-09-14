import { Injectable } from '@nestjs/common';

import { Dish } from '../dish';
import { CreateDishDto } from '../create-dish-dto';

let dishes: Dish[] = [];

@Injectable()
export class DishesService {
    criar(createDishDto: CreateDishDto): void {
        const newDish = new Dish(createDishDto);

        newDish.Id = Date.now();
        newDish.CriadoEm = new Date();
        newDish.AtualizadoEm = new Date();

        dishes.push(newDish);
    }

    atualizar(id: number, dishDto: CreateDishDto) {
        const currentDish = dishes.find(dish => dish.Id === id);
        const updatedDishIndex = dishes.findIndex(dish => dish.Id === id);

        dishes[updatedDishIndex] = { 
            ...dishDto,
            Id: id,
            CriadoEm: currentDish.CriadoEm,
            AtualizadoEm: new Date()
        };
    }

    excluir(id: number) {
       dishes = dishes.filter(dish => dish.Id !== id);
    }

    obterTodos(): Dish[] {
        return dishes;
    }
}
