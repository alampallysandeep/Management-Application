import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  ticketId = output<string>()

  onToggleDetails(){
    //this.detailsVisible.set(!this.detailsVisible())
    this.detailsVisible.update((wasVisible)=> !wasVisible) // update method in signal and it expectes function as an argument that function will be executed by angular and angular autometicllay pass old signal value as an argument to that function  
  }
  markAsComplete(id:string){
    this.ticketId.emit(id)
  }
}
