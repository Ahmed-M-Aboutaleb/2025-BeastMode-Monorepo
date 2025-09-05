import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AuthModule } from './auth/auth.module';
import { plainToInstance } from 'class-transformer';
import { EnvVars } from './types/env-vars';
import { validateSync } from 'class-validator';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate(config: Record<string, unknown>) {
        return AppModule.validateEnv(config);
      },
    }),
    AppModule.createMongooseModule(),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static createMongooseModule() {
    return MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    });
  }
  static validateEnv(config: Record<string, unknown>) {
    const validated = plainToInstance(EnvVars, config, {
      enableImplicitConversion: false,
    });
    const errors = validateSync(validated, {
      skipMissingProperties: false,
    });
    if (errors.length) {
      throw new Error(
        errors.map((e) => JSON.stringify(e.constraints)).join(', '),
      );
    }
    return validated;
  }
}
