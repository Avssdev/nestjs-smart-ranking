import { Controller, Post, Body, Get } from '@nestjs/common';

import { CriarJogadorDto } from './dtos/criar-jogador.DTO';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {

  constructor(private readonly jogadoresService: JogadoresService) {}
  
  @Post()
  async criarAtualizarJogador(
    @Body() criarJogadorDto: CriarJogadorDto
  ): Promise<void> {
    await this.jogadoresService.criarAtualizarJogador(criarJogadorDto);
  }

  @Get()
  async listarJogadores(): Promise<Jogador[]> {
    return this.jogadoresService.listarJogadores();
  }

}
