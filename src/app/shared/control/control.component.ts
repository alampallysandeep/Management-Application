import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{ // this properties will add into this component to its hot element <app-control class="control">
    class:"control",
    '(click)':"onClick()"
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //  console.log("Clicked")
  // }
  private el = inject(ElementRef) //acccessing host elements
  label = input.required<string>()
  onClick(){
    console.log("Clicked")
    console.log(this.el)
  }

}
