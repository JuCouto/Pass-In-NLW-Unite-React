<h1 align="center"><i>PASS-IN </i></h1>

<h4 align="center">  
	
![Alt text](https://github.com/JuCouto/PassIn-nlwUniteReact/assets/100319483/e8351a7c-d197-47ad-8563-9a4838abec4e)

</h4>

<h4 align="center">  
	Aplicação Web para gerenciamento de Eventos e Participantes.
</h4>

### Tecnologias utilizadas.

|  Frontend   | Mobile |
| :---------: | :----: |
|    React    |        |
|    Vite     |        |
| TypeScript  |        |
| TailwindCss |        |
|             |        |

### Como Executar o código

- Para executar o código localmente, clone o repositório.
- Acesse a pasta do projeto no vscodee execute os comandos:
  - npm install
  - npm run dev ( para rodar a aplicação)

### Pacotes:

- Lucide (pacote de ícones):

  - npm i lucide-react

- TailwindForms (plugging para pernonalização de formulário e componentes como o checkbox)

  - npm install -D @tailwindcss/forms

- Tailwind merge (pacote para poder unir "className")

  - npm i tailwind-merge

- FakerJs (lib para gerar dados falsos)

  - npm install @faker-js/faker --save-dev

- Date FNS (para formatar datas, lib removida)

  - npm install date-fns

- DayJs (para formatar datas, a date fns não funcionou da forma que ele esperava)
  - npm install dayjs

### Como executar a API localmente

##### Repositório da API em NodeJS :
  
- Clonar o repositório para a sua máquina:
  - https://github.com/rocketseat-education/nlw-unite-nodejs
- Abrir no editor de código.
- Criar um arquivo .env na raiz do projeto e passar dentro dele:
   ```DATABASE_URL="file:./dev.db" ```
- Rodar:
  - npm install ( vai instalar as dependências necessárias)
  - npx prisma db seed (vai alimentar o banco de dados com alguns dados ficticios)

* Caso dê o erro ( bad option:--env-file) ao rodar o npm run dev, passar essa configuração para o script dentro do package.json:
  ```
  "scripts": {
    "start": "node dist/server.mjs",
    "build": "tsup src --format esm",
    "dev": "set TS_NODE_PROJECT=tsconfig.json && tsx watch src/server.ts",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio"
  },
- A mensagem de sucesso é **HTTP server running!**

#### Documentação da API (Swagger)
Para documentação da API, acesse o link: https://nlw-unite-nodejs.onrender.com/docs


<h4 align="center">  Vite </h4>

    - O Vite é uma ferramenta que permite utilizar o javascript mais moderno possível dentro do navegador,sem se preocupar com compatibilidade hmr.
    - Um dos benefícios é poder atualizar algo no código e ser refletido imediatamente no navegador.
    - Pode ser utilizado com outras linguagens como vue e angular.

<h4 align="center">  Paginação no Front</h4>

No trecho do código em AttendeeList.tsx:
{Attendees.slice((page - 1) _ 10, page _ 10).map((attendee) => {

se inicia a lógica de páginação. o slice vai fatiar os arquivos seguindo a regra recebida como parâmetro, ele pega page -1 e depois multiplica o page por 10.
por ex: page = 1. slice(1 - 1 (igual a 0), 1 \* 10 (igual a 10), então os arquivos apresentados serão de 1 a 10.

#### Observações:

- A paginação está vindo da API.
- 
\*\* pesquisar como trocar a cor de fundo do checkbox usando o tailwind/forms
