import { Module } from '@nestjs/common';
import { ProductosController } from './controllers/productos/productos.controller';
import { ProductosService } from './services/productos/productos.service';

@Module({
    controllers:[ProductosController],
    providers:[ProductosService],
})
export class ProductosModule {}
