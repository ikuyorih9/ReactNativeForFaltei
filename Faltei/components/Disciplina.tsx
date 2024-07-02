import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Disciplina{
    nomeDisciplina: string;
    nomeProfessor: string;
    sigla: string;
    creditos: number;
    cor: string;
}


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

  export const carregaDisciplinas = async ():Promise<Disciplina[]> =>{
    console.log("Carregando disciplinas...");
  const listaDisciplinas = await AsyncStorage.getItem('listaDisciplinas');
  if(listaDisciplinas != null){
    const disciplinasArray = JSON.parse(listaDisciplinas) as string[];

    const array: Disciplina[] = [];

    for(const d of disciplinasArray){
      const disciplina = await AsyncStorage.getItem(d);
      if(disciplina != null){
        const myD: Disciplina = JSON.parse(disciplina);
        console.log("Disciplina:", myD.sigla);
        //ADICIONAR BANNER
        array.push(myD);
      }
    }
    return array;
  }
  else{
    console.log("Não ha disciplinas:");
  }

  return [];
}
  
