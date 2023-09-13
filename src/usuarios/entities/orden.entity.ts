import { Usuario } from './usuario.entity';
import { Producto } from 'src/productos/entities/producto.entity';

export class Orden {
    fecha: Date;
    usuario: Usuario;
    productos: Producto[];

}