import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma.service';

import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService : JwtService){}
  
  async create(dto: CreateAuthDto) {
      //bycrpt of password 
      const saltOrRounds = 10;
      const password = dto.password;
      const hash = await bcrypt.hash(password, saltOrRounds);

      const user = this.prisma.$transaction(async (tr) => {
          //cria tenant 
          const tenant = await tr.tenant.create({
              data:{
                name: `Tenant ${dto.email}` 
              }
          })
          //cria user

          const user = await tr.user.create({
            data:{
              email: dto.email, 
              password: password, 
              tenant_id: tenant.id
            }
          })

      })
      //generate jwt token 



      //open transaction to register tenant before
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
