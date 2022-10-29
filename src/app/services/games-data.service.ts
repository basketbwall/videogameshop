import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Game } from '../gamelist/gameModel';

@Injectable({
    providedIn: 'root'
})
export class GameDataService {
    constructor(private http: HttpClient) {

    }

    getData(){
        return this.http.get(
            'https://api.rawg.io/api/games?key=7216d51886af4412a18dde45c5a7daae'
        )
    }

}