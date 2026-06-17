export class User {
  // Aplicada a dica do SonarLint: adicionado 'readonly' já que a senha não muda
  constructor(
    public nome: string,
    private readonly senha: string
  ) {}

  /**
   * Verifica se a senha digitada corresponde à armazenada
   */
  public verificarSenha(digitada: string): boolean {
    return digitada === this.senha;
  }
}