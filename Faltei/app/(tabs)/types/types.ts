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
    provas: Prova[];
    trabalhos: Trabalho[];
    pesoMediaProvas: number;
    pesoMediaTrabalhos: number;
    informacoesAdicionais?: string;
}
