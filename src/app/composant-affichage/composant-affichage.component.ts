import { Component, OnInit } from '@angular/core';
import { CarteVisiteComponent } from '../carte-visite/carte-visite.component';

@Component({
  selector: 'app-composant-affichage',
  templateUrl: './composant-affichage.component.html',
  styleUrls: ['./composant-affichage.component.scss']
})
export class ComposantAffichageComponent implements OnInit {
  hidden:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hidden = !this.hidden;
  }

}
