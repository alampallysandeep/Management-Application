import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement> // without signal
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')
  private el = inject(ElementRef) //acccessing host elements
  label = input.required<string>()
  constructor(){
    // afterRender(()=>{ //executes everytime if anything changes in the entire application.listens to all.
    //   console.log('After Render')
    // });
    // afterNextRender(()=>{ // only execute on next change
    //   console.log('After Next Render')
    // })
  }
  onClick(){
    console.log("Clicked")
    console.log(this.el)
    console.log(this.control())
  }

}
