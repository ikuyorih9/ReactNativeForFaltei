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

### 15 de jungo de 2024
*Por: Hugo Nakamura*
Reinstalei o nodejs e recriei o projeto com o nome *ReactNativeForFaltei*. Após a execução de

```
nvm install
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
