import { Injectable } from '@nestjs/common';
import { Producto } from './../../entities/producto.entity';

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
        image: '',
    },
    ];

    //Retornar todos los productos
    findAll() {
        return this.productos;
    }

    // Metodo buscar un producto
    findOne(id: number) {
        return this.productos.find((item) => item.id === id);
    }


    create(payload: any) {
        this.contadorId = this.contadorId + 1;
        const nuevoProducto = {
            id: this.contadorId,
            ...payload,

        };
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }

////////// Metodo actualizar ok  ///////////////

    update(id: number, payload: any) {
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
    delete(id: number) {
        const product = this.findOne(id)
        const productIndex = this.productos.indexOf(product)
        this.productos.splice(productIndex, 1)

        return product
    }
////////////////////////////////////////
////////////// fin los pla/////////////


}

