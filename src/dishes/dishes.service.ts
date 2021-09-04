import { Injectable } from '@nestjs/common';

import { Dish } from '../dish';
import { CreateDishDto } from '../create-dish-dto';

const dishes: Dish[] = [];

@Injectable()
export class DishesService {
    criar(createDishDto: CreateDishDto): void {
        const newDish = new Dish(createDishDto);

        newDish.Id = dishes.length;
        newDish.CriadoEm = new Date();
        newDish.AtualizadoEm = new Date();

        dishes.push(newDish);
    }
}
