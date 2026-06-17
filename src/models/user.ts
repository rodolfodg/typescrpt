export class User {
  // Propriedade estática para gerar IDs sequenciais automaticamente
  private static contadorId = 1;
  
  public id: number;

  // Constructor Shorthand conforme o quadro do professor
  constructor(
    public nome: string,
    public email: string,
    private senha?: string // Opcional com o sinal de '?'
  ) {
    // Cada vez que um 'new User' é criado, ele ganha um ID único e o contador soma +1
    this.id = User.contadorId++;
  }

  /**
   * Verifica se a senha digitada corresponde à armazenada
   */
  public verificarSenha(senhaDigitada: string): boolean {
    return this.senha === senhaDigitada;
  }

  /**
   * Retorna apenas os dados seguros que podem ser mostrados na API
   */
  public getDadosPublicos() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email
    };
  }
}