import { Document } from 'mongoose';

export interface Jogador extends Document {
  nome: string;
  email: string;
  urlFotoJogador: string;
  telefoneCelular: string;
  ranking: string;
  posicaoRanking: number;
}