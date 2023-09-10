import { Controller, Get, Param } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {



/////Endpoint  para el reto este con parametro.
    @Get(':usuarioId')
    obtenerConId(@Param('usuarioId') usuarioId: string){
        return `aca estamos desde controlador usuarios con id ${usuarioId}`

    }
}
////////Fin ejemplo