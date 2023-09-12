import {IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;
    
    @IsPositive()
    @IsNotEmpty()
    @IsNumber()
    readonly precio: number;
    
    @IsPositive()
    @IsNotEmpty()
    @IsNumber()
    readonly stock: number;
    
    @IsNotEmpty()
    @IsUrl()
    readonly imagen: string;

    
}

export class UpdateProductDto extends PartialType(CreateProductDto) { }