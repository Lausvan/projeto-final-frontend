import { fornecedorDTO } from './fornecedorDTO';

export interface produtoDTO {
  id?: number;
  codigoBarras: string;
  nome: string;
  preco: number;
  fornecedor: fornecedorDTO;
  qtd: number;
}
