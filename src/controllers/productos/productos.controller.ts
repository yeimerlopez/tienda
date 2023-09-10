import { Controller,Get } from '@nestjs/common';

@Controller('productos')
export class ProductosController {

    @Get()
    nuevoEndPoint(){
        return 'soy el endpoint desde mi propia carpeta'
    }
}
