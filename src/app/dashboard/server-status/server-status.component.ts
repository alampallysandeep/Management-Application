import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  constructor() { }
  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random() // generate values between 0 to 0.99999
      if (rnd < 0.5) {
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 5000);
  }
}
