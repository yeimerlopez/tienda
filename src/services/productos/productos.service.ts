import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './../../entities/producto.entity';
import {CreateProductDto, UpdateProductDto} from './../../dtos/productos.dto'

@Injectable()
export class ProductosService {
    private contadorId = 1;
    //1. se crea el array vacio
    
    private productos : Producto[] = [{

        id: 1,
        nombre: 'producto 1',
        descripcion: 'aca va una descripcion..',
        precio: 123,
        stock: 100,
        imagen: '',
    },
    ];

    //Retornar todos los productos
    findAll() {
        return this.productos;
    }

    // Metodo buscar un producto
    findOne(id: number) {
        const producto = this.productos.find((item) => item.id === id);
        if (!producto) {
            throw new NotFoundException(`Producto #${id} no Existe!`); 
        }
        return producto;
    }


    create(payload: CreateProductDto) {
        console.log(payload)
        this.contadorId = this.contadorId + 1;
        const nuevoProducto = {
            id: this.contadorId,
            ...payload,

        };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }



    update(id: number, payload: UpdateProductDto) {
        const producto = this.findOne(id);
        if (producto){
            const index = this.productos.findIndex((item) => item.id === id);
            this.productos[index] = {
                ...producto,
                ...payload,

            };
            return this.productos[index];
        }
        return null;
    }


//////////// Metodo Borrar  ////////////////////

    Remove(id: number){
        const index = this.productos.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Producto #${id} no Existe!`);
            
        }
        this.productos.splice(index, 1);
    }



}

