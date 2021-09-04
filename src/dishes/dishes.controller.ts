import { Body, Controller, Post } from '@nestjs/common';

import { CreateDishDto } from '../create-dish-dto';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
    constructor(private dishesService: DishesService) {}

    @Post()
    create(@Body() createDishDto: CreateDishDto) {
        this.dishesService.criar(createDishDto);
    }
}
