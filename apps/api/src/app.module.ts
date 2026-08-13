import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma.module';
import { ConfigModule } from "@nestjs/config"
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, 
            PostsModule ,   
            ConfigModule.forRoot({
              isGlobal: true,
            }), AuthModule,
          ],
  controllers: [],
  providers: [],
})
export class AppModule {}
