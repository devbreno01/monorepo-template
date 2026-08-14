import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './auth.constants';

console.log('CWD:', process.cwd());
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('JWT_SECRET:', process.env.JWT_SECRET);

@Module({
  imports:[
      UsersModule,
      JwtModule.register({
        global:true, 
        secret: JwtConstants.secret, 
        signOptions: {expiresIn: '60d'}
      })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
