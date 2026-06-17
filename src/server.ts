import express, { type Request, type Response } from 'express';
import { User } from './models/user.js'; 

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Criação do Array de Usuários (Banco de dados temporário em memória)
const users: User[] = [];

// Populando o array com os usuários do exemplo do quadro
const user = new User('vinnicius', 'vinni@gmail.com', '123');
const user1 = new User('João Silva', 'joao@email.com', '123456');
const user2 = new User('Maria Santos', 'maria@email.com', 'senha123');

users.push(user, user1, user2);

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

// Rota de Usuários (Corrigida seguindo o objetivo do quadro)
app.get('/users', (req: Request, res: Response) => {
  
  // Mapeia o array original transformando cada usuário apenas em seus dados públicos (sem senha)
  const dadosPublicos = users.map(u => u.getDadosPublicos());

  res.json({
    message: `Lista de usuários (${dadosPublicos.length})`, 
    timestamp: new Date().toISOString(),
    users: dadosPublicos, // Retorna a lista limpa contendo id, nome e email
    status: 'API funcionando!'
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Health: http://localhost:${port}/health`);
});