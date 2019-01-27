import { Ingrediente } from "./Ingrediente.model";
import { Categoria } from "./Categoria.model";
import { Immagine } from "./immagine.model";

export class Prodotto {
    id: number;
    nome: string;
    prezzo: number;
    descrizione: string;
    ingredienti: Ingrediente;
    categorie: Categoria;
    immagini: Immagine;
    preview: Immagine;
    preferito:boolean;
}