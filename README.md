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
