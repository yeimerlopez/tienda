import { Module } from '@nestjs/common';
import {HttpModule, HttpService} from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';

const API_KEY='12345634';
const API_KEY_PROD ='produc1234555';

@Module({
  imports: [HttpModule, UsuariosModule, ProductosModule],
  controllers: [AppController ],
  providers: [
    AppService,
    {
      provide:'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, 
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request =  http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = await lastValueFrom(request); 
        return tasks.data; 
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
