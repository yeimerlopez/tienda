import { Controller, Get, Query } from '@nestjs/common';

@Controller('marcas')
export class MarcasController {


/////////////////////////////////////////////////////////////////////////
////////////////////////Ejemplo con 3 parametros/////////////////////////
  
    @Get()
    getMarcas(
        @Query('limit') limit: number = 100,   // con parametros establecidos no deberia ser necesario 
        @Query('offset') offset: number = 0,   // poner el tipado por que ya lo infiere aca lo deje pero se puede borrar
        @Query('marca') marca: string,
        )
        {
        return `products: limit=> ${limit} offset=> ${offset} marca=> ${marca}`;
        }



}
