import { IsNotEmpty, IsString, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsOptional()
    content?: string;

    @IsBoolean()
    @IsOptional()
    published?: boolean;

    @IsNumber()
    @IsNotEmpty()
    author_id!: number;

    @IsNumber()
    @IsNotEmpty()
    tenant_id!: number;
}