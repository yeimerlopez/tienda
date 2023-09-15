import {IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive} from 'class-validator';
// import { PartialType } from '@nestjs/mapped-types';
import { PartialType, ApiProperty} from '@nestjs/swagger';

export class CreateClienteDto{
    @IsNotEmpty()
    @IsString()
    readonly nombre: string;
    
    @IsNotEmpty()
    @IsString()
    readonly apellido: string;
    
    @IsPositive()
    @IsNotEmpty()
    @IsNumber()
    readonly telefono: number;
    
        
}

export class UpdateClienteDto extends PartialType(CreateClienteDto) { }