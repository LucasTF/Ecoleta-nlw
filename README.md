<div align='center'>
<img src='./frontend/src/assets/svg/logo.svg' alt='Ecoleta' />

---

<img src='https://img.shields.io/badge/Made%20by-Lucas%20Ferreira-blue?style=flat-square' alt='Made by: Lucas Ferreira' />
<img src='https://img.shields.io/github/repo-size/LucasTF/Ecoleta-nlw?style=flat-square' alt='Made by: Lucas Ferreira' />

</div>

# ❓ Sobre

<div align='center'>
<img src='./app.png' alt='Ecoleta Frontend' />
</div>

O Ecoleta é uma ferramenta para o cadastro e localização de pontos de coleta para materiais recicláveis, essa aplicação tem como objetivo facilitar a comunicação entre coletores de resíduos recicláveis e usuários através da criação de uma base de dados centralizada e de uma interface amigável e de fácil uso. Esse projeto foi desenvolvido durante a _Next Level Week_ ministrada pela Rocketseat.

# 🔧 Tecnologias Utilizadas

### **Backend**

-   NodeJS
-   Express
-   Celebrate (Validação)
-   PostgreSQL (Banco de Dados)
-   Knex (Query Builder)
-   Multer

### **Frontend**

-   React
-   Styled Components
-   Axios
-   Leaflet

### **Mobile**

-   React Native
-   Expo
-   Axios

# ✅ Como Usar

Baixe os arquivos do repositório para a sua maquina utilizando o seguinte comando no terminal:

> git clone https://github.com/LucasTF/Ecoleta-nlw.git

### **Backend**

1. Abra uma instância do terminal na pasta onde o projeto foi salvo e digite o seguinte comando:

    > cd backend

2. Execute o seguinte comando para baixar as dependências do projeto:

    > npm install

3. Na pasta do backend, navegue até a pasta src.
4. Dentro da pasta src crie uma pasta de nome 'environment' e dentro dela um arquivo 'index.ts'.
5. Dentro do arquivo 'index.ts' será necessário criarmos duas variáveis, uma para a string de conexão com o banco de dados e outra para o endereço do host, de tal maneira:

    `export const CONN_STRING = 'postgres://SEU_USUARIO:SUA_SENHA@localhost/DATABASE';`

    `export const IP_ADDRESS = 'SEU_IP_LOCAL';`

6. Feita essa alteração execute, no terminal, o seguinte comando para executar o servidor:

    > npm run dev

    ou

    > yarn dev

### **Frontend**

1. Abra uma instância do terminal na pasta onde o projeto foi salvo e digite o seguinte comando:

    > cd frontend

2. Execute o seguinte comando para baixar as dependências do projeto:

    > npm install

3. Execute um dos comandos abaixo para iniciar a aplicação React:

    > npm start

    ou

    > yarn start

### **Mobile**

1. Abra uma instância do terminal na pasta onde o projeto foi salvo e digite o seguinte comando:

    > cd mobile

2. Instale o CLI do Expo utilizando o seguinte comando:

    > npm install expo-cli --global

3. Execute o seguinte comando para baixar as dependências do projeto:

    > npm install

4. Dentro da pasta src edite o arquivo 'environment/index.ts' com o seu IP local (O mesmo do backend).

5. Execute um dos comandos abaixo para iniciar a aplicação Mobile:

    > npm start

    ou

    > yarn start

6. Instale o App do Expo disponível na Google Play Store ou App Store e use-o para ler o QR Code disponível no terminal.
