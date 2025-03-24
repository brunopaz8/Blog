import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmalCardComponent } from "../../components/smal-card/smal-card.component";
import { CardTitleComponent } from "../../components/card-title/card-title.component";

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, MenuBarComponent, BigCardComponent, SmalCardComponent, CardTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
