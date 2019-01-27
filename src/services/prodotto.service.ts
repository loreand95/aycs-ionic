import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { URL } from '../constants';
import { Prodotto } from '../model/prodotto.model';

@Injectable()
export class ProdottoService {

    constructor(private http: HttpClient) {
    }

    listProdotti(categoria:string): Observable<Array<Prodotto>> {
        let addUrl = `${URL.PRODOTTI_BY_CATEGORIA}/${categoria}`;
        return this.http.get<Array<Prodotto>>(addUrl);
    }

    listSelezione(): Observable<Array<Prodotto>> {
        let addUrl = `${URL.SELEZIONE}`;
        return this.http.get<Array<Prodotto>>(addUrl);
    }

    findById(prodottoId: number): Observable<Prodotto> {
        let apiURL = `${URL.PRODOTTO_BY_ID}/${prodottoId}`;
        return this.http.get<Prodotto>(apiURL);
    }

}