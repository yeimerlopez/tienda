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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UsuariosService } from 'src/usuarios/services/usuarios/usuarios.service';
import { CreateUsuarioDto, UpdateUsuarioDto } from 'src/usuarios/dtos/usuarios.dto';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) { }

    @Get()
    @ApiOperation({summary: 'Retorna todos los usuarios'})
    findAll() {
        return this.usuariosService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.findOne(id);
    }

/////

    @Get(':id/ordenes')
    getOrdenes(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.getOrderByUser(id);
    }



////

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