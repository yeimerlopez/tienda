import { Controller, Get } from '@nestjs/common';

@Controller('categorias')
export class CategoriasController {


    // la del reto.
    @Get()
    listar(){
        return 'te hablo desde categorias!!'
    }
}
