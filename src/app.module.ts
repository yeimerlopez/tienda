import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';

const API_KEY='12345634';
const API_KEY_PROD ='produc1234555';

@Module({
  imports: [UsuariosModule, ProductosModule],
  controllers: [AppController ],
  exports:[],
  providers: [
    AppService,
    {
      provide:'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, 

    },
  ],

})
export class AppModule {}
