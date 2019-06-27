export interface clienteDTO {
  id?: number;
  nome: string;
  documento: string;
  telefone?: string;
  email?: string;
  endereco?: string;
  cidade?: string;
  estado?: string;
  limiteCompra: number;
}
