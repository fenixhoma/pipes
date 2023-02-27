
export enum Color {
    rojo, blanco, negro, azul, verde, amarillo, plata
}

export interface Heroe {
    nombre: string;
    vuela:  boolean;
    color: Color;
}