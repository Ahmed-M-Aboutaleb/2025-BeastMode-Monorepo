import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import IUser from 'src/users/interfaces/IUser';
import { SignUpDto } from './dto/sign-up.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { TokenPayload } from './interfaces/token-payload.interface';
import * as argon from 'argon2';
import { User } from 'src/users/entities/user.entity';
import { IAuthResponse } from './interfaces/auth-response.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(signInDto: SignInDto): Promise<IAuthResponse> {
    const user: IUser = await this.usersService.findOne(
      {
        email: signInDto.email,
      },
      '+passwordHash',
    );
    if (!user) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      throw new BadRequestException('Invalid credentials');
    }
    const isPasswordValid = await this.verifyPassword(
      signInDto.password,
      user.passwordHash,
    );
    if (!isPasswordValid) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      throw new BadRequestException('Invalid credentials');
    }
    const token = await this.createToken(user);
    return {
      access_token: token,
      profile: user.profile,
    };
  }

  async signUp(signUpDto: SignUpDto): Promise<IAuthResponse> {
    const user: User = await this.createUser(signUpDto);
    const token = await this.createToken(user);
    return {
      access_token: token,
      profile: user.profile,
    };
  }

  private async createUser(signUpDto: SignUpDto) {
    const createUserDto: CreateUserDto = signUpDto;
    const user: User = await this.usersService.create(createUserDto);
    return user;
  }

  private async createToken(user: User) {
    const payload: TokenPayload = {
      email: user.email,
      userId: user._id,
      roles: user.roles,
    };
    return await this.jwtService.signAsync(payload);
  }

  private async verifyPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await argon.verify(hash, password);
  }
}
