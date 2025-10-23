import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>; // to access element with template variable through ViewChild
  onSubmit(titleElement: string, requestText: string) { // HTMLInputElement is type of an element if you entire element in a function
    console.log(titleElement)
    console.log(requestText)
    this.form?.nativeElement.reset()
  }
}
