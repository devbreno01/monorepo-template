import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SingnInDto } from './dto/singin-auth.dto';
import { AuthGuard } from './auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  create(@Body() createAuthDto: CreateAuthDto) {
     try{
          this.authService.create(createAuthDto);
          return [
            {message: "Usuário cadastrado com sucesso"}
          ]
     }catch(e)
     {
          if (e instanceof Error) {
            console.error("Success:", e.message);
          } else {
            console.error("An unexpected error occurred:", e);
          }
     }
  }
  @Post()
  singIn(@Body() dto:SingnInDto ){
      return this.authService.singIn(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
      return [
        {message: "Authenticated"}
      ]
  }

}
