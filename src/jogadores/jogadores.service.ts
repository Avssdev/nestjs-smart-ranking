import { Injectable, Logger } from '@nestjs/common';
import { v4 } from 'uuid'

import { CriarJogadorDto } from './dtos/criar-jogador.DTO';
import { Jogador } from './interfaces/jogador.interface';

@Injectable()
export class JogadoresService {

  private jogadores: Jogador[] = [];

  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
    await this.criar(criarJogadorDto);
  }

  async listarJogadores(): Promise<Jogador[]> {
    return this.jogadores;
  }

  private criar(criaJogadorDto: CriarJogadorDto): void {
    const { nome, email, telefoneCelular } = criaJogadorDto; 

    const jogador: Jogador = {
      _id: v4(),
      nome,
      email,
      telefoneCelular,
      ranking: 'A',
      posicaoRanking: 1,
      urlFotoJogador: ''
    };
    this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
    this.jogadores.push(jogador);
  }

}
