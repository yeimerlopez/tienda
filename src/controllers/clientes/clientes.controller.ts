import { Controller, Get, Param } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {


////////////////////////////////////////////////////////////////////////////////
////////////// Endpoint Categorias prueba recibiendo mas de un parametro////////
// con dos párametros   1. EjmParametro1/:EjmParametro1Id   
                    //  2. EjmParametro2/:EjmParametro2Id


////@Get('EjmParametro1/:EjmParametro1Id/EjmParametro2/:EjmParametro2Id')
    @Get(':EjmParametro1Id/EjmParametro2/:EjmParametro2Id')
    nombreAca(@Param('EjmParametro1Id') EjmParametro1Id: string,@Param('EjmParametro2Id') EjmParametro2Id: string)
    {
        return `esta funcion retorna : ${EjmParametro1Id} y tambien ${EjmParametro2Id}`;
    }




    }
