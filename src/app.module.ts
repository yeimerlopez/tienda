import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';



@Module({
  imports: [UsuariosModule, ProductosModule],
  controllers: [AppController ],
  providers: [AppService],
  exports:[]//como un modulo se conecta con otro,

})
export class AppModule {}
