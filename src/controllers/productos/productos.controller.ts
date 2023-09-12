import {
    Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, Query, Res,
    /*arseIntPipe*/} from '@nestjs/common';

import { Response } from 'express';

import { ProductosService } from './../../services/productos/productos.service';
import {ParseIntPipe} from '../../common/parse-int/parse-int.pipe';
import {CreateProductDto, UpdateProductDto} from './../../dtos/productos.dto'

@Controller('productos')
export class ProductosController {
    constructor(private productosService: ProductosService) { }

    @Get()
    getProductos(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('marca') marca: string,
    ){
        return this.productosService.findAll();
    }

    @Get(':productoId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('productoId', ParseIntPipe) productoId: number) {
        return this.productosService.findOne(productoId);
    }


    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productosService.create(payload);
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return this.productosService.update(+id, payload);
    }


    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productosService.Remove(+id);
    }

}

