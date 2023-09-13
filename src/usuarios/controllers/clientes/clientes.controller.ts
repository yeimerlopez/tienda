import {
    Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, Query, Res,
    /*ParseIntPipe*/} from '@nestjs/common';

import { Response } from 'express';

import { ClientesService } from '../../services/clientes/clientes.service';
import {ParseIntPipe} from '../../../common/parse-int/parse-int.pipe';
import {CreateClienteDto, UpdateClienteDto} from '../../dtos/clientes.dto'

@Controller('clientes')
export class ClientesController {
    constructor(private clientesService: ClientesService) { }

    @Get()
    getClientes(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('marca') marca: string,
    ){
        return this.clientesService.findAll();
    }

    @Get(':clienteId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('clienteId', ParseIntPipe) clienteId: number) {
        return this.clientesService.findOne(clienteId);
    }


    @Post()
    create(@Body() payload: CreateClienteDto) {
        return this.clientesService.create(payload);
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() payload: UpdateClienteDto) {
        return this.clientesService.update(+id, payload);
    }


    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.clientesService.Remove(+id);
    }

}
