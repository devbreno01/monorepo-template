import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}
  create(createUserDto: CreateUserDto) {
  
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findByEmail(email: string) {
    const user = await  this.prisma.user.findFirst({
        where: {
          email: email 
        }, 
        select:{
          id:true, 
          name: true, 
          email: true, 
          password: true, 
          tenant_id: true 
        }
    })
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findOne(id: number) {
    return 'teste'
  }
}
