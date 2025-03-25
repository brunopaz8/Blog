import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  imports: [],
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent {
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
