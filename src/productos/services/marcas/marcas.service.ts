import { Injectable, NotFoundException } from '@nestjs/common';

import { Marca } from 'src/productos/entities/marca.entity';
import { CreateMarcaDto, UpdateMarcaDto } from 'src/productos/dtos/marcas.dto';

////////////////////



@Injectable()
export class MarcasService {
private counterId = 1;
private marcas: Marca[] = [
{
    id: 1,
    nombre: 'Marca 1',
    imagen: 'https://i.imgur.com/U4iGx1j.jpeg',
},
];

findAll() {
return this.marcas;
}

findOne(id: number) {
const product = this.marcas.find((item) => item.id === id);
if (!product) {
    throw new NotFoundException(`Marca #${id} not found`);
}
return product;
}

create(data: CreateMarcaDto) {
this.counterId = this.counterId + 1;
const newMarca = {
    id: this.counterId,
    ...data,
};
this.marcas.push(newMarca);
return newMarca;
}

update(id: number, changes: UpdateMarcaDto) {
const marca = this.findOne(id);
const index = this.marcas.findIndex((item) => item.id === id);
this.marcas[index] = {
    ...marca,
    ...changes,
};
return this.marcas[index];
}

remove(id: number) {
const index = this.marcas.findIndex((item) => item.id === id);
if (index === -1) {
    throw new NotFoundException(`Marca #${id} not found`);
}
this.marcas.splice(index, 1);
return true;
}
}

