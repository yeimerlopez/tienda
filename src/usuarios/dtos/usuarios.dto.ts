import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
// import { PartialType } from '@nestjs/mapped-types';
import { PartialType, ApiProperty} from '@nestjs/swagger';

export class CreateUsuarioDto {
@IsString()
@IsEmail()
@ApiProperty({description: 'Es el email del usuario'})
readonly email: string;

@IsString()
@IsNotEmpty()
@Length(6)
readonly password: string;

@IsNotEmpty()
readonly role: string;
}

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}