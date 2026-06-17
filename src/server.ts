import express, { type Request, type Response } from 'express';
import { User } from './models/user.js'; 

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota Inicial
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Bem-vindo à API de Usuários!',
    timestamp: new Date().toISOString(),
    status: 'API funcionando!'
  });
});

// Rota de Health
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Rota de Usuários
app.get('/users', (req: Request, res: Response) => {
  // Instanciando o usuário com nome e senha conforme o desafio
  const user = new User('vinnicius', 'senha_secreta_123');
  
  // Teste opcional impresso no terminal ao acessar a rota
  console.log('Senha correta?', user.verificarSenha('senha_secreta_123'));

  res.json({
    message: `Dados Usuário: ${user.nome}`, 
    user: user, 
    status: 'API funcionando!'
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Health: http://localhost:${port}`);
});