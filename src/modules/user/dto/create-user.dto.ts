import { IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @Length(6, 15)
  readonly userId: string;

  @IsString()
  @Length(8, 20)
  readonly password: string;
}
