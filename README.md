# Faltei - Organização pessoal para graduação

* Hugo Nakamura
* Isaac Soares
* Jade Bortot
* Ketlen Souza

## Motivação

O "Faltei" é um aplicativo para organização pessoal direcionado à graduação. Ele reúne informações sobre matérias do semestre, suas faltas registradas e as estatísticas de seu desempenho.

A primeira versão foi feita através do Android Studio e com potabilidade apenas para Android, utilizando Java como linguagem principal. A inteção, agora, é produzir um software multiplataforma, funcionando em dispositivos Android, IOS e Web. Para isso, a plataforma de criação será o ReactNative.

## Atualizações e avanços
### 03 de junho de 2024

O reposítório foi criado.

### 08 de junho de 2024

Um projeto foi criado.

### 10 de junho 2024

Tentamos de tudo, mas vários erros foram encontrados. A instalação do nodejs do tutorial não funciona e em cada computador dava um erro diferente. Como deve-se entregar a atividade, essa foi a tentativa do dia (que falhou miseravelmente) :(

### 15 de junho de 2024
*Por: Hugo Nakamura*
Reinstalei o nodejs e recriei o projeto com o nome *ReactNativeForFaltei*. Após a execução de

```
npm install
```

continuava não ser possível emular aplicativo para Android, embora funcionasse para a WEB. O problema era que não era possível encontrar o diretório de instalação do Android SDK (que precisa estar instalado na máquina). Dessa forma, como eu estava utilizando a distribuição linux Ubuntu 22.04, foi preciso adicionar e configurar:

```
export ANDROID_HOME=$HOME/../../mnt/c/Users/<your_profile>/AppData/Local/Android/Sdk
export PATH=$ANDROID_HOME/emulator:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
```

Além disso, é preciso criar as pastas *android* e *ios*, executando:

```
npx expo prebuild --clean
```
### 24 de junho de 2024
*Por: Isaac Soares*
Hoje descobri como executar o nosso aplicativo no expoGo sem depêndencia da rede local. Para isso basta executar o app com:

```
npx expo start --tunnel
```

### 25 de junho de 2024
*Por: Isaac Soares*

Comecei a barra de navegações criando os arquivos das páginas na pasta `(tabs)`. Além de configurar os icones no aqruivo `_layout.tsx`.

### 26 de junho de 2024
*Por: Isaac Soares*

Fiz o componete ´ThemedStatusBar´ que troca a cor do background e troca a cor dos icones da *status bar*.

Também fiz um componente ´DefaultTopBar´ que muda a cor de fundo da *status bar* e dos icones dependendo do tema do sistema (Dark ou Light), além de adicionar uma barra horizontal com 30px a abaixo da *status bar*.

Utilizei o componente ´DefaultTopBar´ para iniciar os layouts das páginas Home, Disciplinas, Faltas, Configurações. Adicionei um container abaixo da ´DefaultTopBar´ e arrumei o estilo para podermos começar a trabalhar nas páginas em específico.

### 28 de junho de 2024
*Por: Isaac Soares*

Hoje tive um erro diferente com o Expo:

```bash
ConfigError: Cannot determine which native SDK version your project uses because the module `expo` is not installed.
```

Para solucionalo bastou seguir instalar o gerenciador de pacotes yarn e executar `yarn add expo` na pasta `./Faltei`.

Usando o yarn foi solicitado pelo gerenciador de pacotes que não misturassem os gerenciadores pois isso causa inconcistências nas depêndencias do projeto. Então foi padronizado o uso do yarn excluindo o `package-lock.json` deixando somente o `yarn.lock`.

Usei a SafeAreaView para ajustar a área de renderização no IOS. (Fiz o teste no iPhone 11)

---

*Por: Hugo Nakamura*

Adicionou a imagem do gráfico na Home Screen.

### 29 de junho de 2024
*Por: Isaac Soares*

Percebi que meu ´DefaultTopBar´ estava muito específico e tentei tornalo mais genérico para poder mudar o tamnho da barra abaixo da StatusBar, mas isso começou a gerar problemas. Por isso decidi tirar e usar só a ´ThemedStatusBar´.

Fiz o componente `BannerDisciplinasFaltas` para utilizalo na página de faltas. Lá eu utilizei um `ScrollView` para colocar vários banners para indicar disciplinas diferentes e utilizar cores diferentes.

---

*Por: Hugo Nakamura*

Adicionou a parte de roteamento das páginas fora dos Tabs. Além de fazer um botão na página disciplina para levar para página de adicionar disciplina.

---

*Por: Jade Bortot*

Iniciei o layout da tela de notas, percebi que vou ter que criar tabelas dentro de tabelas, porém não sei exatamente como vou fazer para que o tamanho delas se enquadre de forma proporcional a quantidade de colunas referente a notas de trabalhos e provas, que são configuraveis pelo usuário. Acho que deveria ter começado de dentro para fora e não de fora para dentro... Outra coisa é sobre onde essa tela vai ficar localizada, coloquei ela na barra inferior para ficar mais fácil para mim achar, mas esse não é o lugar dela. tenho que deixá-la relacionada para cada disciplina e linkar os campos e cores devidamente para que faça sentido.

### 30 de junho de 2024
*Por: Isaac Soares*

Exclui alguns arquivos desnecessários criados durante os testes. E arrumei alguns layouts de páginas para seguir o padrão. Além disso centralizei o icone de "+" usado no botão na página disciplinas. 

Comecei a página addFaltas, fazendo uma navegação para que ao clicar no `BannerDisciplinasFaltas` passe o nome da disciplina e a cor da barra lateral por parâmetro, pois eles serão usados no título da página e na cor do gráfico de faltas respectivamente.

Na página de adicionar faltas, temos o nome da disciplinas e um gráfico indicando quantas faltas o usuário tem naquela disciplina. Ainda não foi adicionado a lista de faltas.

Como eu estava tendo muitos probelmas com as rotas dediquei um tempo para entender como tinha sido feito pelo Hugo e percebi que ele estava misturando o expo-router com o react-navigator. E isso estava gerando conflitos na hora da navegação entre as páginas. Depos de muito pesquisar e tentar consegui arrumar as rotas, e fazer elas funcionarem apenas usando o Tabs do expo router. Então adicionei o addDisciplinas e o addFaltas nas rotas e fiz o header e a tab bar deles sumirem.
 
**OBS.:** *Por enquanto para voltar tem que pressionar o botão de voltar do sistema operacional.*

---

*Por: Jade Bortot*

* Tabelas da tela de notas 90% configuradas, falta arrumar a tabela de análises; inserir os elementos personalizaveis; os elementos que o usuário vai inserir (as notas e objetivos) e fazer o linkamento com a disciplina.

* Tabela de análises configurada com a ideia de como ela seria (porém feita uma certa ganbiarra para isso)

Vou iniciar a construção da tela de configurações. Essa tela vai conter os seguintes campos:
* Quantidade de provas
* Quantidade de trabalhos
* Peso de cada prova
* Peso de cada trabalho
* Peso da média das provas
* Peso da média dos trabalhos
* Quantidade de créditos da disciplina

Tem que ser feita a interligação da tela de configurações com a tela de disciplinas, porque o nome e outras informações de cada disciplina que for adicionada vai ter que ser exibida na tela de configurações.
Também terá que ser feita a integração da tela de configurações com a tela de notas, pois temos muitas dependências entre ambas, como a quantidade de provas e trabalhos, o pese de cada para se calcular os objetivos e as médias. 

---

*Por: Ketlen Souza*

Realizei diversas tentativas de instalar o yarn para visualização e desenvolvimento do projeto, mas devido à erros na instalação não consegui.

### 1 de julho de 2024

*Por: Isaac Soares*

Mais uma vez com problemas no expo-router, modifiquei novamente e agora espero que não surja com outro problema. A documentação do expo-router é péssima.

Fiz o componente `BannerDisciplinasFaltas` e criei uma lista desses componentes na página de disciplinas. Além de tornar o botão, de adicionar disciplinas, flutuante.

Comcei a fazer o componente `BannerDisciplinasFaltas` e ajeitar a Home. Mas inda falta bastante coisa.

---

*Por: Ketlen Souza*

Consegui instalar o yarn e iniciei a modelagem da database. Foram criadas algumas das tabelas usando o expo-SQLite para integrar a base ao app.

---
*Por: Hugo Nakamura*

Eu basicamente fiz toda a tela de adicionar disciplinas. Antes, ela apenas continha templates de banners que o Isaac fez. Eu primeiro fiz o botão de adicionar disciplinas, que levava para outra tela, para poder salvar as disciplinas. Eu comecei salvando tudo com AsyncStorage, que funciona com palavras-chave. No caso, a palavra chave para cada disciplina é a sigla dela, que supõe-se ser única. 

Depois, eu criei rotinas de carregamento de disciplinas na memória, o que permitiu pôr todas as disciplinas salvas nas telas. Nesse caso, foi só na de Disciplinas.

---
*Por: Jade Bortot*

Alterei totalmente o conteúdo da tela de configurações, conversamos no grupo e vimos que o que tinhamos planejado seria ideial estar na tela de adição de disciplinas. Portante a tela de configurações será voltada a configurações do usuário; de aparência das disciplinas e do aplicativo e para adição de quanto valem os créditos do curso.

### 2 de julho de 2024

*Por: Isaac Soares*

Terminei de estilizar o `BannerDisciplinasFaltas` e ajeitei a Home para ficar com as áreas dos componentes com tamnho certo. Falta colocar o gráfico de faltas, pois ainda é uma imagem...

Consegui colocar um gráfico na main.

---

*Por: Hugo Nakamura*

Eu também apliquei a mesma lógica das disciplinas nas faltas. O problema é que o Date Picker, para adicionar datas de faltas, não funcionou muito bem. Pelo menos, todas as disciplinas salvas aparecem na tela Faltas. Também, teoricamente, as faltas estão sendo salvas, somente não apresentadas na tela de Adicionar Faltas.

---

*Por: Jade Bortot*

Tive muitos problemas em questão de fazer com que o modo escuro funcionasse, acabei deixando isso de lado. O layout para alterar a cor da disciplina está pronto, só precisa fazer a integração com o banco de dados.
Confugirações de usuário estão comentadas pois ainda não será possível ser aplicado essa função.
Também tentei simular a tela de notas com um banco de dados, porém não funcionou! Deixei as configurações comentadas pois acredito que com o banco de dados configurado será possível reutilizar o que está lá. Então a tela de notas ficou bem simples, basicamente o esqueleto da ideia dela.


---

*Por: Ketlen Souza*

Toda base foi modelada e implementada, e tentei fazer a integração entre a base e o código elaborado até o momento. No entanto, mesmo sem nenhum erro aparente no código, ao executar a aplicação e tentar adicionar novos dados, só são exibidos erros, não aparecendo nem mesmo os campos de inserção.
A modelagem e implementação da base foi testada em uma api própria para geração de databases, o que garante que está correta, e apenas a integração com a aplicação é que não está funcionando.

