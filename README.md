<h1 align="center">PASS-IN </h1>

<h4 align="center">  
	
	Aplicação de um Sistema Web para gerenciamento de Eventos e Participantes.

</h4>

### Tecnologias utilizadas.

|  Frontend   | Mobile |
| :---------: | :----: |
|    React    |        |
|    Vite     |        |
| TypeScript  |        |
| TailwindCss |        |
|             |        |
|             |        |
|             |        |

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

<h4 align="center">  Vite </h4>

    - O Vite é uma ferramenta que permite utilizar o javascript mais moderno possível dentro do navegador,sem se preocupar com compatibilidade hmr.
    - Um dos benefícios é poder atualizar algo no código e ser refletido imediatamente no navegador.
    - Pode ser utilizado com outras linguagens como vue e angular.

<h4 align="center">  Paginação </h4>

No trecho do código em AttendeeList.tsx:
{Attendees.slice((page - 1) _ 10, page _ 10).map((attendee) => {

se inicia a lógica de páginação. o slice vai fatiar os arquivos seguindo a regra recebida como parâmetro, ele pega page -1 e depois multiplica o page por 10.
por ex: page = 1. slice(1 - 1 (igual a 0), 1 \* 10 (igual a 10), então os arquivos apresentados serão de 1 a 10.

\*\* pesquisar como trocar a cor de fundo do checkbox usando o tailwind/forms
