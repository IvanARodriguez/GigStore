import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gig } from './models/gig';
import { GigService } from './services/gig.service';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent { 
  title = 'Gig Store';
  gigs: Gig[] = []

  constructor(private gigService: GigService) {}
  ngOnInit() : void {
    this.gigs = this.gigService.getGigs()
  }
}
