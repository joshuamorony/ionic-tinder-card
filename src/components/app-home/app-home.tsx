import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  handleMatch(ev){
    if(ev.detail){
      console.log("It's a match!")
    } else {
      console.log("Maybe next time");
    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Ionic Tinder Cards</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <div class="tinder-container">
          <app-tinder-card onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card onMatch={(ev) => {this.handleMatch(ev)}} />
          <app-tinder-card onMatch={(ev) => {this.handleMatch(ev)}} />
        </div>
      </ion-content>
    ];
  }
}
