import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


    //Esto es un endpoint y es un metodo
    @Get('nuevo') //nuevo es la ruta que aparece en la url si se quiere se puede usar los //
    nuevoEndPoint(){
      return 'yo soy nuevo'
    }
  
    ///////////////////#####Ejemplo recibiendo parametros#####////////////////
    // productos ---> seria la ruta 
    // id --> seria el parametro y se define asi :parametro en este caso :productoid
    @Get('productos/:productoid')
  //para recibir el parametro se pone dentro del losparentesis delmetodo @params() y dentro de los parentesis
  // del params debe ir el nombre del atribto que queremos recibir y luego pero fuera de los ´parentesis
  //debe ir  el nombre se ese mismo parametro dos puntos : y el tipo de por ejem string
    getProduto(@Param('productoId') productoId: string){
    // return `producto ${productoId}`; // esto hace string interplacion
      return "producto"+productoId;
    }
  
  // Ejemplo sin comentarios 
    @Get('ventas/:ventaId')
    getVentas(@Param('ventaId') ventaId: string){
      return `product ${ventaId}`;
    }
  
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////// Endpoint Categorias prueba recibiendo mas de un parametro/////////
  // con dos párametros   1. categorias/:categoriasId   
                      //  2. productos/:productosId
  
  // los parametros se ingresan asi 1.  @Param('cantidadId') cantidadId: string
                                   // 2.  @Param()
  
    @Get('categorias/:categoriasId/productos/:productosId')
    obtenercategoria(@Param('categoriasId') categoriasId: string,@Param('productosId') productosId: string)
    {
      return `esta funcion retorna : ${categoriasId} y tambien ${productosId}`;
    }
  
  
    ////////////////////////////////Parametros tipo query//////////////////////////////////
  
    //nota: hay un decorador para query
    
    
    @Get('productos')
    obtenerProductos(@Query() params: any)
    {   
      const {limit, offset } = params;   //--> deconstruccion curso ECMASScript 6
      return `productos: limit=> ${limit} offset=> ${offset}`; // limit=> ${limit} "tu eres el limit"
    }
  
    //otra forma de hacerlo mejor 
  
    @Get('products')
    getProducts(@Query('limit') limit: number,@Query('offset') offset: number)
    {   
      return `products: limit=> ${limit} offset=> ${offset}`; 
    }
    
    
    //Ejemplo con 3 parametros
    
    @Get('producticos')
    getproducticos(
      @Query('limit') limit: number = 100,       // con parametros establecidos no deberia se necesario 
      @Query('offset') offset: number = 0,       // poner el tipado por que ya lo infiere aca lo deje pero se puede borrar
      @Query('marca') marca: string,
      )
      {
        return `products: limit=> ${limit} offset=> ${offset} marca=> ${marca}`;
      }
  
  
      //Recuerda definir rutas que no son dinamicas primero para que no choquen --> clase 8 final..
}
