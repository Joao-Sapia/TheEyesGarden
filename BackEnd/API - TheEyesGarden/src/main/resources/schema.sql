CREATE TABLE IF NOT EXISTS produto (
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    valor DOUBLE NOT NULL,
    quantidade INT NOT NULL
    );