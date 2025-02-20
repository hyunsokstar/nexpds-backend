import { IsString, IsOptional, IsUUID, IsPhoneNumber } from 'class-validator';

export class CreateCounselorDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsPhoneNumber('KR')
  phone?: string;

  @IsUUID()
  teamId: string;

  @IsUUID()
  userId: string;
}
