import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma.service';

import { JwtService } from "@nestjs/jwt"
import { User } from 'generated/prisma/client';
import { SingnInDto } from './dto/singin-auth.dto';
import { compare } from "bcrypt"
import { UsersService } from 'src/users/users.service';
import { JwtConstants } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService,
              private jwtService : JwtService,
              private userService: UsersService){}

  async create(dto: CreateAuthDto){
      //bycrpt of password
      const saltOrRounds = 10;
      const password = dto.password;
      const hash = await bcrypt.hash(password, saltOrRounds);

      const user = this.prisma.$transaction(async (tr) => {

          const tenant = await tr.tenant.create({
              data:{
                name: `Tenant ${dto.email}`
              }
          })

          const user = await tr.user.create({
            data:{
              email: dto.email,
              password: hash,
              tenant_id: tenant.id
            }
          })

      })


  }
 
 async singIn(dto: SingnInDto){
    const user = await this.userService.findByEmail(dto.email);

    if(!user){
      return [
        {message: "User doens't exist"}
      ]
    }

    const passowrdMatch = await compare(dto.password, user.password);

    if(!passowrdMatch){
        throw new Error("E-mail/password obrigatório");
    }

    const payload = {
        sub: user.id,
        email: user.email
    };


    return {
      access_token: await this.jwtService.signAsync(payload)
    }


 }
}
