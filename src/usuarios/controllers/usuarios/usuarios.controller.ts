import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';

import { UsuariosService } from 'src/usuarios/services/usuarios/usuarios.service';
import { CreateUsuarioDto, UpdateUsuarioDto } from 'src/usuarios/dtos/usuarios.dto';


@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) { }

    @Get()
    findAll() {
        return this.usuariosService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateUsuarioDto) {
        return this.usuariosService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateUsuarioDto,
    ) {
        return this.usuariosService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.remove(+id);
    }
}