import { IsString, IsEmail, MinLength, IsEnum, IsUUID } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsUUID()
  tenantId: string; // 필수 값으로 변경
}
