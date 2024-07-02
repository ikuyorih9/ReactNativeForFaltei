import AsyncStorage from "@react-native-async-storage/async-storage";

//INTERFACE DE UMA DISCIPLINA.
export interface Disciplina{
    nomeDisciplina: string;
    nomeProfessor: string;
    sigla: string;
    creditos: number;
    cor: string;
    datas:Date[];
}

//ROTINA DE APAGAR UMA DISCIPLINA
export const apagarUmaDisciplina = async(sigla: string)=>{
  console.log("Apagando disciplina", sigla);
  const listaDisciplinas = await AsyncStorage.getItem('listaDisciplinas');
  if(listaDisciplinas != null){
    const disciplinasString = JSON.parse(listaDisciplinas) as string[];
    for(const string of disciplinasString){
      if(string === sigla){
        let i = disciplinasString.indexOf(string);
        await AsyncStorage.removeItem(sigla);
        disciplinasString.splice(i,1);
        await AsyncStorage.setItem('listaDisciplinas', JSON.stringify(disciplinasString));
        console.log("Disciplina removida!");
        console.log(disciplinasString)
      }
    }
  }
  else{
    console.log("Não há disciplinas para remover.");
  }
}

//ROTINA DE APAGAR TODAS AS DISCIPLINAS.
export const apagarTodasDisciplinas = async () => {
    console.log("Apagando disciplinas...");

    const listaDisciplinas = await AsyncStorage.getItem('listaDisciplinas'); //Abre a lista de disciplinas.
    if(listaDisciplinas != null){
      //Converte a lista de disciplinas para string[].
      const disciplinasArray = JSON.parse(listaDisciplinas) as string[];
      

      //Para cada string dessa lista.
      for(const d of disciplinasArray){
        console.log("--------------");
        console.log(disciplinasArray);
        console.log("--------------");


        console.log("---", d);
        await AsyncStorage.removeItem(d);
        const indice = disciplinasArray.indexOf(d);
        if (indice !== -1) {
            disciplinasArray.splice(indice, 1);
        } 
      }
      await AsyncStorage.setItem('listaDisciplinas', JSON.stringify([]));
      console.log("Disciplinas apagadas.");
    }
    else{
      console.log("Não há disciplinas para remover.");
    }
  };

//CARREGA TODAS AS DISCIPLINAS E RETORNA A LISTA DELAS.
export const carregaDisciplinas = async ():Promise<Disciplina[]> =>{
  console.log("Carregando disciplinas...");

  //Abre o array de string da lista de siglas de disciplinas
  const listaDisciplinas = await AsyncStorage.getItem('listaDisciplinas');
  if(listaDisciplinas != null){
    //Converte para o valor recuperado para string.
    const disciplinasArray = JSON.parse(listaDisciplinas) as string[];

    //Cria uma lista de disciplinas.
    const array: Disciplina[] = [];

    //Para cada item da lista de siglas.
    for(const d of disciplinasArray){
      //Carrega a disciplina representada por essa sigla.
      const disciplina = await AsyncStorage.getItem(d);
      if(disciplina != null){
        //Converte o valor recuperado para Disciplina.
        const myD: Disciplina = JSON.parse(disciplina);
        console.log("Disciplina:", myD.sigla);
        //Adiciona na lista de disciplinas. 
        array.push(myD);
      }
    }
    //Retorna a lista de disciplinas.
    return array;
  }
  else{
    console.log("Não ha disciplinas:");
  }

  return [];
}
  
export const carregaUmaDisciplina = async (sigla: string): Promise<Disciplina | undefined> => {
  try {
    const valorRecuperado = await AsyncStorage.getItem(sigla);
    if (valorRecuperado !== null) {
      const disciplina: Disciplina = JSON.parse(valorRecuperado);
      return disciplina;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error('Erro ao carregar disciplina do AsyncStorage:', error);
    throw error; // Lança o erro para ser tratado onde a função foi chamada, se necessário
  }
};

export const salvaUmaDisciplina = async(disciplina: Disciplina)=>{
  try {
    console.log("Enviando:", disciplina);

    let disciplinasArray: string[];
    const listaDisciplinas = await AsyncStorage.getItem('listaDisciplinas');
    if(listaDisciplinas != null){
      disciplinasArray = JSON.parse(listaDisciplinas) as string[];
    }
    else{
      disciplinasArray = [disciplina.sigla];
    }

    let disciplinaJaCriada = false;

    disciplinasArray.forEach(d => {
      if(disciplina.sigla === d){
        disciplinaJaCriada = true;
      }
    });

    if(!disciplinaJaCriada){
      await AsyncStorage.setItem(disciplina.sigla, JSON.stringify(disciplina));
      disciplinasArray.push(disciplina.sigla);
      await AsyncStorage.setItem('listaDisciplinas', JSON.stringify(disciplinasArray));
      console.log('Disciplina salva com sucesso!');
    }
    else{
      console.log('Disciplina já existe!');
    }
    
  } catch (error) {
    console.error('Erro ao salvar disciplina:', error);
  }
}