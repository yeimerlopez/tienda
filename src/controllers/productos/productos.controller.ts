import {
    Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, Query, Res,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductosService } from './../../services/productos/productos.service';

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
    getOne(@Param('productoId') productoId: string) {
        return this.productosService.findOne(+productoId);
    }



    @Post()
    create(@Body() payload: any) {
        return this.productosService.create(payload);
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return this.productosService.update(+id, payload);
    }


    @Delete(':id')
    borrar(@Param('id') id: number) {
        return {
            mensaje: "borrado"
        }
    }






}

