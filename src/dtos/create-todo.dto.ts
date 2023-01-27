import { IsBoolean, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @MaxLength(255)
  title: string;
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
