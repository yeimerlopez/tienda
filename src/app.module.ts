import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './controllers/productos/productos.controller';
import { CategoriasController } from './controllers/categorias/categorias.controller';  
import { ClientesController } from './controllers/clientes/clientes.controller';
import { MarcasController } from './controllers/marcas/marcas.controller';
import { OrdenesController } from './controllers/ordenes/ordenes.controller';
import { UsuariosController } from './controllers/usuarios/usuarios.controller';
import { ProductosService } from './services/productos/productos.service';
import { ClientesService } from './services/clientes/clientes.service';



@Module({
  imports: [],
  controllers: [AppController, ProductosController, CategoriasController, ClientesController,
      MarcasController, OrdenesController,UsuariosController],
  providers: [AppService, ProductosService, ClientesService],
})
export class AppModule {}
