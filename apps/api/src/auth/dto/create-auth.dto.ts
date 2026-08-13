import {IsNotEmpty, IsNumber, IsString, IsEmail, IsOptional } from "class-validator";

export class CreateAuthDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string; 

    @IsString()
    password!: string; 

    @IsOptional()
    @IsString()
    name?: string

    @IsNumber()
    tenant_id!: number
}
