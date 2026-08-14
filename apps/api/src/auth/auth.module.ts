import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './auth.constants';

import { ConfigModule , ConfigService} from "@nestjs/config";



@Module({
  imports:[
      UsersModule,
      JwtModule.registerAsync({
        global:true,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configservice: ConfigService) => ({
          secret: JwtConstants.secret,
          signOptions: {expiresIn: "60d"}
        }),
      }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
