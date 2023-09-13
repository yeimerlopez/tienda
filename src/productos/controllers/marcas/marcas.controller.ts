import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';

import { MarcasService } from 'src/productos/services/marcas/marcas.service';
import { CreateMarcaDto, UpdateMarcaDto } from 'src/productos/dtos/marcas.dto';

@Controller('marcas')
export class MarcasController { 
    constructor(private marcasService: MarcasService) { }

    @Get()
    findAll() {
        return this.marcasService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.marcasService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateMarcaDto) {
        return this.marcasService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateMarcaDto,
    ) {
        return this.marcasService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.marcasService.remove(+id);
    }
}