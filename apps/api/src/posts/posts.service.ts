import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {

  constructor(private prisma: PrismaService){}

  async create(createPostDto: CreatePostDto) {
      const post = this.prisma.post.create({
        data:{
          title: createPostDto.title, 
          content: createPostDto.content, 
          published: createPostDto.published, 
          author_id: createPostDto.author_id, 
          tenant_id: createPostDto.tenant_id
        },
        select:{
          title: true, 
          content: true
        }
      }); 

      return post; 
  }

  async findAll() {
    return [
      {message: 'Olá'},
      {data: 'Mundo'}
    ];
  }

  async findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
