import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { URL } from '../constants';
import { Prodotto } from '../model/prodotto.model';

@Injectable()
export class PreferitiService {

    constructor(private http: HttpClient) {
    }

    listPreferiti(): Observable<Array<Prodotto>> {
        console.log("lista");
        return this.http.get<Array<Prodotto>>(URL.PREFERITI);
    }

    findById(prodottoId: number): Observable<Prodotto> {
        let apiURL = `${URL.PREFERITI}/${prodottoId}`;
        return this.http.get<Prodotto>(apiURL);
    }

    deletePreferito(prodotto: Prodotto) {
        let deleteUrl = `${URL.PREFERITI}/${prodotto.id}`;
        return this.http.delete<Prodotto>(deleteUrl);
    }

    addPreferito(prodotto: Prodotto) {
        let addUrl = `${URL.ADD_PREFERITO}/${prodotto.id}`;
        return this.http.get<Prodotto>(addUrl);
    }



}