import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']  
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  contentOwner: string = "";
  private id: string | null = null; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.setValuesToComponent(this.id);
    });
  }
  
  private setValuesToComponent(id: string | null) {
    if (!id) return;

    const result = dataFake.find(article => article.id === Number(id));

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
      this.contentOwner = result.owner;
    }
  }
}


