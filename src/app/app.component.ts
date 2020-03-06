import { Component } from '@angular/core';
import {RandomCard} from './random-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Random Card';
  public card: RandomCard;
  public imageSrc: string;
  private nextCard: RandomCard;
  private nextImage: HTMLImageElement;
  constructor() {
    this.card = new RandomCard();
    this.imageSrc = AppComponent.cardImageSrc(this.card.number);
    this.nextCard = new RandomCard();
    this.nextImage = new Image();
    this.preload();
  }
  private static cardImageSrc(num: number) {
    return `assets/images/cards/${num}.png`;
  }
  private preload() {
    this.nextImage.src = AppComponent.cardImageSrc(this.nextCard.number);
  }
  public next() {
    this.card.copy(this.nextCard);
    this.nextCard.reset();
    this.imageSrc = AppComponent.cardImageSrc(this.card.number);
    this.preload();
  }
}
