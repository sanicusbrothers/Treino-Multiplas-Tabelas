Sistema de Cadastro e Entregas
Este projeto contém funções para gerenciar veículos, motoristas e entregas, utilizando tabelas relacionais em SQL.

Funções disponíveis:

novoVeiculo()  
Cadastra um veículo utilizando placa e modelo.
Exemplo: novoVeiculo('67nBg6', 'Uno')

novoMotorista()  
Cadastra um motorista utilizando nome e CNH.
Exemplo: novoMotorista('Patricio', '27592389903')

novaEntrega()  
Cadastra uma entrega utilizando o ID do motorista (FK), o ID do veículo (FK), status e destino.
Exemplo: novaEntrega(2, 3, 'pendente', 'Parana')

atualizarEntrega()  
Atualiza os dados de uma entrega utilizando o ID como referência.
Exemplo: atualizarEntrega(1, 1, 3, 'em rota', 'Paraiba')

porId()  
Retorna os dados de qualquer tabela utilizando o nome da tabela e o ID como referência.
Exemplo: porId('motoristas', 2)

deletarEntrega()  
Apaga uma entrega utilizando o ID como referência.
Exemplo: deletarEntrega(1)

Estrutura das Tabelas (SQL)
sql
CREATE TABLE veiculos (
  id SERIAL PRIMARY KEY,
  placa VARCHAR(6) UNIQUE,
  modelo VARCHAR(15) NOT NULL
);

CREATE TABLE motoristas (
  id   SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cnh  VARCHAR(20)  NOT NULL UNIQUE
);

CREATE TABLE entregas (
  id SERIAL PRIMARY KEY,
  motorista_id INT NOT NULL REFERENCES motoristas(id),
  veiculo_id INT NOT NULL REFERENCES veiculos(id),
  status VARCHAR(20) NOT NULL DEFAULT 'pendente',
  destino TEXT NOT NULL
);
