// types.ts
export interface Prova{
    id: string;
    peso: number;
}

export interface Trabalho{
    id: string;
    peso: number;
}

export interface Disciplina {
    id: string;
    nome: string;
    provas: Prova[];
    trabalhos: Trabalho[];
    pesoMediaProvas: number;
    pesoMediaTrabalhos: number;
    informacoesAdicionais?: string;
}
