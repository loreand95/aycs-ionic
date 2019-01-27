import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { URL } from '../constants';
import { Categoria } from '../model/categoria.model';

@Injectable()
export class CategoriaService {

    constructor(private http: HttpClient) {
    }

    listCategory(categoria:string): Observable<Array<Categoria>> {
        let addUrl = `${URL.CATEGORIE}/${categoria}`;
        return this.http.get<Array<Categoria>>(addUrl);
    }

}