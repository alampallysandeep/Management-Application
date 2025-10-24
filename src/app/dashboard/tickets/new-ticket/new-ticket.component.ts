import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit,OnInit {
  //@ViewChild('form') private form?:ElementRef<HTMLFormElement>; // to access element with template variable through ViewChild
  formElement = viewChild.required<ElementRef<HTMLFormElement>>('form') // to access element with template variable through viewChild function signal Available for Angular 17
  newTicket = output<{title:string,text:string}>()

  onSubmit(titleElement: string, requestText: string) { // HTMLInputElement is type of an element if you entire element in a function
    console.log(titleElement)
    console.log(requestText)
    this.newTicket.emit({title:titleElement,text:requestText})
    this.formElement().nativeElement.reset()
  }
  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.formElement().nativeElement);
  }
  ngAfterViewInit() {
    console.log('After View InIt');
    console.log(this.formElement().nativeElement);
  }
}
