import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma.module';
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [PrismaModule, 
            PostsModule ,   
            ConfigModule.forRoot({
              isGlobal: true,
            }),
          ],
  controllers: [],
  providers: [],
})
export class AppModule {}
