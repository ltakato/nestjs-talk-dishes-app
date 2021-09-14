import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Dish } from 'src/dish';

import { CreateDishDto } from '../create-dish-dto';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
    constructor(private dishesService: DishesService) {}

    @Post()
    create(@Body() createDishDto: CreateDishDto) {
        this.dishesService.criar(createDishDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createDishDto: CreateDishDto) {
        const idNumber: number = +id;
        
        this.dishesService.atualizar(idNumber, createDishDto)
    }

    @Get()
    getAll(): Dish[] {
        return this.dishesService.obterTodos();
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        const idNumber: number = +id;
        
        this.dishesService.excluir(idNumber);
    }
}
