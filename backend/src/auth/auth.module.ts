import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      useFactory: (configService: ConfigService) => {
        const jwtSecret = configService.getOrThrow<string>('JWT_SECRET');
        return {
          secret: jwtSecret,
          global: true,
          signOptions: { expiresIn: '1h' },
        };
      },
      inject: [ConfigService],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
