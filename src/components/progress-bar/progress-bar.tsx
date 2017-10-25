import { Component, Prop, PropDidChange, Element, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'progress-bar',
  styleUrl: 'progress-bar.scss'
})
export class ProgressBar {

  @Prop() progress: number;
  @Element() bar: HTMLElement;
  @Event() progressDone: EventEmitter;
  
  //update the progress bar with the initial value
  componentDidLoad(){
    this.updateWidth();
  }

  //update the progress bar on every property change
  @PropDidChange('progress')
  didChangeHandler() {
    this.updateWidth();
  }

  //internal method to update progress bar width
  private updateWidth(){
    (this.bar.children[0] as HTMLElement).style.width = this.progress + '%';
    if(this.progress == 100)
      this.progressDoneEmitter();
  }

  //call event
  progressDoneEmitter() {
    this.progressDone.emit();
  }

  //render method  
  render() {
    return (
      <div></div>
    );
  }
}