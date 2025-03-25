import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smal-card',
  imports: [RouterLink],
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent {
  @Input()
  Id:string = "0"
  @Input()
  cardPhoto:string = ""
  @Input()
  CardDate:string = ""
  @Input()
  CardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  cardOwner:string = "by " + ""
  
}
