import { afterRender, AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit,AfterViewInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() { 
    effect((onCleanup)=>{
      //const interval = setTimeout(() => {
        console.log(this.currentStatus())
      //}, 100);
      // onCleanup(()=>{
      //   clearTimeout(interval)
      // })
    })
  }
  ngOnInit() {
    console.log('ON INIT')
    const interval = setInterval(() => {
      const rnd = Math.random() // generate values between 0 to 0.99999
      if (rnd < 0.5) {
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 5000);
    this.destroyRef.onDestroy(()=>{ // alternative to ngOnDestroy hook
      clearInterval(interval)
    })
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT')
  }
  // ngOnDestroy(): void {
  //   clearInterval(this.interval)
  // }
}
