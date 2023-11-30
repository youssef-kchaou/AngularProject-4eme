import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deltail-residence',
  templateUrl: './deltail-residence.component.html',
  styleUrls: ['./deltail-residence.component.css']
})
export class DeltailResidenceComponent {
  constructor(private ac:ActivatedRoute){

  }
  ngOnInit(){
    alert(this.ac.snapshot.params['id'])
  }
}
