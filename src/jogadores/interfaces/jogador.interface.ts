export interface Jogador {
  readonly _id: string;
  nome: string;
  email: string;
  urlFotoJogador: string;
  telefoneCelular: string;
  ranking: string;
  posicaoRanking: number;
}