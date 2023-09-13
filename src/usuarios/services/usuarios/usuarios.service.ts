import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateClienteDto, UpdateClienteDto } from 'src/usuarios/dtos/clientes.dto';
import { CreateUsuarioDto, UpdateUsuarioDto } from 'src/usuarios/dtos/usuarios.dto';


@Injectable()
export class UsuariosService { 
    private counterId = 1;
    private usuarios: Usuario[] = [
        {
            id: 1,
            email: 'correo@mail.com',
            password: '12345',
            role: 'admin',
        },
    ];

    findAll() {
        return this.usuarios;
    }

    findOne(id: number) {
        const usuario = this.usuarios.find((item) => item.id === id);
        if (!usuario) {
            throw new NotFoundException(`Usuario #${id} not found`);
        }
        return usuario;
    }

    create(data: CreateUsuarioDto){
        this.counterId = this.counterId + 1;
        const newUsuario = {
            id: this.counterId,
            ...data,
        };
        this.usuarios.push(newUsuario);
        return newUsuario;
    }

    update(id: number, changes: UpdateUsuarioDto) {
        const usuario = this.findOne(id);
        const index = this.usuarios.findIndex((item) => item.id === id);
        this.usuarios[index] = {
            ...usuario,
            ...changes,
        };
        return this.usuarios[index];
    }

    remove(id: number) {
        const index = this.usuarios.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Usuario #${id} not found`);
        }
        this.usuarios.splice(index, 1);
        return true;
    }
}