import { Component, Host, Element, Event, EventEmitter, h } from '@stencil/core';
import { Gesture, GestureConfig, createGesture } from '@ionic/core';

@Component({
  tag: 'app-tinder-card',
  styleUrl: 'tinder-card.css'
})
export class TinderCard {

  @Element() hostElement: HTMLElement;
  @Event() match: EventEmitter;

  connectedCallback(){
    this.initGesture();
  }

  async initGesture(){

    const style = this.hostElement.style;
    const windowWidth = window.innerWidth;

    const options: GestureConfig = {
      el: this.hostElement,
      gestureName: 'tinder-swipe',
      onStart: () => {
        style.transition = "none";
      },
      onMove: (ev) => {
        style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX/20}deg)`
      },
      onEnd: (ev) => {

        style.transition = "0.3s ease-out";

        if(ev.deltaX > windowWidth/2){
          style.transform = `translateX(${windowWidth * 1.5}px)`;
          this.match.emit(true);
        } else if (ev.deltaX < -windowWidth/2){
          style.transform = `translateX(-${windowWidth * 1.5}px)`;
          this.match.emit(false);
        } else {
          style.transform = ''
        }

      }
    };

    const gesture: Gesture = await createGesture(options);

    gesture.enable();

  }

  render() {
    return (
      <Host>
        <div class="header">
          <img class="avatar" src="https://avatars.io/twitter/joshuamorony" />
        </div>
        <div class="detail">
          <h2>Josh Morony</h2>
          <p>Animator of the DOM</p>
        </div>
      </Host>
    );
  }

}
