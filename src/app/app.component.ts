import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmalCardComponent } from './components/smal-card/smal-card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from "./pages/home/home.component";
import { MenuBottomComponent } from "./components/menu-bottom/menu-bottom.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
