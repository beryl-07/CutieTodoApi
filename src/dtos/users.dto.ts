import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;

  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export class UpdateUserDto {
  @IsEmail()
  public email?: string;

  @IsString()
  public name?: string;

  @IsString()
  @MinLength(9)
  @MaxLength(32)
  public password?: string;

  public updatedAt?: Date = new Date();
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(32)
  public password: string;
}
