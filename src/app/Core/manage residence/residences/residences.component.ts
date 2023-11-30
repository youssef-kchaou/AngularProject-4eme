import { Component } from '@angular/core';
import { Apartment } from 'src/app/model/Apartment';
import { Residences } from 'src/app/model/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  app: Apartment[] = [];

  listResidences:Residences[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../../assets/images/R1.png"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../../assets/images/R1.png"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../../assets/images/R1.png"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../../assets/images/R1.png"}
    ];

    listApartments:Apartment[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0] },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] }];
      
    showApp(j: any){
      for (let i = 0; i < this.listApartments.length; i++) {
        let index = this.listResidences.indexOf(this.listApartments[i].residence)
        if (j = index) {
          this.app.push(this.listApartments[i]);
        }
      }
    }
}
