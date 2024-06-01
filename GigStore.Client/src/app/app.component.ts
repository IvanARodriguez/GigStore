import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gig } from './models/gig';
import { GigService } from './services/gig.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GigStore.Client';
  gigs: Gig[] = []

  constructor(private gigService: GigService) {}
  ngOnInit() : void {
    this.gigs = this.gigService.getGigs()
    console.table(this.gigs);
    
  }
}
