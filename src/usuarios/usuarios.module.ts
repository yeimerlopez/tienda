import { Module } from '@nestjs/common';
import { ClientesService } from './services/clientes/clientes.service';
import { ClientesController } from './controllers/clientes/clientes.controller';
import { UsuariosService } from './services/usuarios/usuarios.service';
import { UsuariosController } from './controllers/usuarios/usuarios.controller';
import { ProductosModule } from 'src/productos/productos.module';



@Module({
    imports: [ProductosModule],
    controllers: [ClientesController,UsuariosController],
    providers: [ClientesService, UsuariosService]
})
export class UsuariosModule {}
