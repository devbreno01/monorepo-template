


-- 1. Inserir o Tenant
INSERT INTO tenants (name, key) 
VALUES ('Empresa ACME', 'acme-corp');

-- 2. Inserir o Usuário vinculado ao Tenant criado (assumindo id = 1)
INSERT INTO users (tenant_id, email, password, name) 
VALUES (1, 'joao@gmail.com', 'asd23asdfsdf', 'João');