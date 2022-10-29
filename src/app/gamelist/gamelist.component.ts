import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/games-data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
  myData: Array<any> = [];
  constructor(private gameDataService: GameDataService) { }

  ngOnInit(): void {
    this.gameDataService.getData().subscribe((data : any) => {
      console.log('data: ', data["results"])
      this.myData = data['results']
    })
    
  }

}
