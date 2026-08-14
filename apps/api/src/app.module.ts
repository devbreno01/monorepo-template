import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma.module';
import { ConfigModule } from "@nestjs/config"
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
        ConfigModule.forRoot({
          isGlobal: true,
              envFilePath: '.env',
          }),
          PrismaModule,
          PostsModule ,
          AuthModule,
          UsersModule,
        ],
  controllers: [],
  providers: [],
})
export class AppModule {}
