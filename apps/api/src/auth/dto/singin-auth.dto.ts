import {IsNotEmpty, IsNumber, IsString, IsEmail } from "class-validator";

export class SingnInDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string; 

    @IsString()
    password!: string; 

}
