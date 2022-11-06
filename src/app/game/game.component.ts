import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../gamelist/gameModel';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewGameClick() {
    this.router.navigate(['/game-detail']);
  }

}
