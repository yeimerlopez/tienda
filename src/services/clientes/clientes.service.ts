import { Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './../../entities/cliente.entity';
import {CreateClienteDto, UpdateClienteDto} from './../../dtos/clientes.dto'

@Injectable()
export class ClientesService {
    private contadorId = 1;
    private clientes : Cliente[] = [{

        id: 1,
        nombre: 'pedro',
        apellido: 'perez',
        telefono: 4350317
        
    },
    ];

    //Retornar todos los clientes
    findAll() {
        return this.clientes;
    }

    // Metodo buscar un cliente
    findOne(id: number) {
        const cliente = this.clientes.find((item) => item.id === id);
        if (!cliente) {
            throw new NotFoundException(`Cliente #${id} no Existe!`); 
        }
        return cliente;
    }


    create(payload: CreateClienteDto) {
        console.log(payload)
        this.contadorId = this.contadorId + 1;
        const nuevoCliente = {
            id: this.contadorId,
            ...payload,

        };
        this.clientes.push(nuevoCliente);
        return nuevoCliente;
    }



    update(id: number, payload: UpdateClienteDto) {
        const cliente = this.findOne(id);
        if (cliente){
            const index = this.clientes.findIndex((item) => item.id === id);
            this.clientes[index] = {
                ...cliente,
                ...payload,

            };
            return this.clientes[index];
        }
        return null;
    }


//////////// Metodo Borrar  ////////////////////

    Remove(id: number){
        const index = this.clientes.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Cliente #${id} no Existe!`);
            
        }
        this.clientes.splice(index, 1);
    }



}

