import { Module } from '@nestjs/common';
import { ProductosController } from './controllers/productos/productos.controller';
import { ProductosService } from './services/productos/productos.service';
import { MarcasController } from './controllers/marcas/marcas.controller';
import { MarcasService } from './services/marcas/marcas.service';

@Module({
    controllers:[ProductosController, MarcasController],
    providers:[ProductosService, MarcasService],
    exports: [ProductosService],
})
export class ProductosModule {}
