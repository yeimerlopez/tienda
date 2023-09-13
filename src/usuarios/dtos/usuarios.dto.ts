import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUsuarioDto {
@IsString()
@IsEmail()
readonly email: string;

@IsString()
@IsNotEmpty()
@Length(6)
readonly password: string;

@IsNotEmpty()
readonly role: string;
}

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}