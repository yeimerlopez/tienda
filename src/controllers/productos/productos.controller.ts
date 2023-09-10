import { Controller,Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus,
        Res} from '@nestjs/common';

@Controller('productos')
export class ProductosController {

    @Get()
    nuevoEndPoint(){
        return 'soy el endpoint desde mi propia carpeta'
    }

//////////////////////////////////////////////////////////////
//////////////Ejemplo de endPoints con POST crear////////////
   /* @Post()
    create(){
        return {
            mensaje: 'este es mi mensaje en el json',
            mensaje2: 'Este es mi mensaje 2'
        };
    }
    */

    @Post()
    create(@Body() payload: any){
        return {
            mensaje: 'Cristo te Ama.',
            payload, // para imprimir lo que me enviaron en el Body
        };
    }

/////////////////////////////////////////////////////////////////
     /////////////Ejemplo Put-->actualizar/////////////////////

    @Put(':id')
    update(@Param('id') id:number, @Body() payload: any){
        return{
            id,
            payload,

        };
    }

////////////////////////////////////////////////////////////////
   //////////////Ejm DELETE --> Eliminar//////////////////////


    @Delete(':id')
    borrar(@Param('id') id:number){
        return {
            mensaje: "borrado"
        }
    }
    

//////////////////////////////////////////////////////////////////
/////////////// Ejm Uso codigo estado personalizado///////////////

@Get(':productoId')
// no puse getProduct por que se sobre entiende
@HttpCode(HttpStatus.ACCEPTED)
getOne(@Param('productoId') productoId: string){       
    return {
        mensaje:`producto ${productoId}`
    };

}



}

