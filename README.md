<h1 align="center"><i>PASS-IN </i></h1>

<h4 align="center">  
	
![Alt text](https://github.com/JuCouto/PassIn-nlwUniteReact/assets/100319483/e8351a7c-d197-47ad-8563-9a4838abec4e)

</h4>

<h4 align="center">  
	Aplicação Web para gerenciamento de Eventos e Participantes.
</h4>

### Tecnologias utilizadas.

|Backend |  Frontend   | Mobile |
| :----: | :---------: | :----: |
|   Java |    React    |        |
|        |    Vite     |        |
|        | TypeScript  |        |
|        | TailwindCss |        |
|        |             |        |

### Como Executar o código

- Para executar o código localmente, clone o repositório.

  #### Frontend
- Abra a pasta do projeto PassIn-nlw-unite-react, no terminal execute os comandos:
  - npm install
  - npm run dev ( para rodar a aplicação)

  #### Backend
- No editor escolha o projeto nlw-unite-java.
- Ao rodar a aplicação alguns dados são adicionados ao BD.

  #### Modelo para inserir dados pelo Insomnia
##### Criar evento
- http://localhost:8080/events
```
{
  "title": "Palestra Dia Feliz",
  "details": "Palestra realizada em Petrópolis.",
  "slug":"teste",
  "maximumAttendees": 2000
}
 ```
- pegar o id q foi gerado ao obter sucesso na criação do evento, ele será utilizado como Id_do_evento.

##### Adicionar participante ao evento
- http://localhost:8080/events/{id_do_evento}/attendees

```
{
  "name": "Carla Castro",
  "email": "carla@rocketseat.com.br"
}
```

##### Get todos os participantes vinculados ao evento
- http://localhost:8080/events/attendees/{id_do_evento}
  
### Pacotes Frontend:

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



#### Documentação da API (Swagger)
 - A documentação é a fornecida pela RocketSeat, ela aparentemente é baseada no código em node, os endpoints em react estão diferentes.

Para documentação da API, acesse o link: https://nlw-unite-nodejs.onrender.com/docs


#### Vite

 - O Vite é uma ferramenta que permite utilizar o javascript mais moderno possível dentro do navegador,sem se preocupar com compatibilidade hmr.
 - Um dos benefícios é poder atualizar algo no código e ser refletido imediatamente no navegador.
 - Pode ser utilizado com outras linguagens como vue e angular.

#### Paginação no Front

No trecho do código em AttendeeList.tsx:
{Attendees.slice((page - 1) _ 10, page _ 10).map((attendee) => {

se inicia a lógica de páginação. o slice vai fatiar os arquivos seguindo a regra recebida como parâmetro, ele pega page -1 e depois multiplica o page por 10.
por ex: page = 1. slice(1 - 1 (igual a 0), 1 \* 10 (igual a 10), então os arquivos apresentados serão de 1 a 10.

#### Observações:

- Foram realizadas melhorias na API para suprir o componente search.

  
- Ajustar paginação no backend.
- Adicionar swagger no backend.
- pesquisar como trocar a cor de fundo do checkbox usando o tailwind/forms
