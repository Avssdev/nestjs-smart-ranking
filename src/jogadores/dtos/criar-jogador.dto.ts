import { IsNotEmpty, IsEmail } from 'class-validator';

export class CriarJogadorDto {
  
  @IsNotEmpty()
  nome: string;
  
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  telefoneCelular: string;
}