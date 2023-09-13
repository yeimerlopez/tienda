import { Module } from '@nestjs/common';
import { ClientesService } from './services/clientes/clientes.service';
import { ClientesController } from './controllers/clientes/clientes.controller';



@Module({
    imports: [],
    controllers: [ClientesController],
    providers: [ClientesService]
})
export class UsuariosModule {}
