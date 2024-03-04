import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {FormsModule} from "@angular/forms";
import {MessagesComponent} from "./messages/messages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesComponent, FormsModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
