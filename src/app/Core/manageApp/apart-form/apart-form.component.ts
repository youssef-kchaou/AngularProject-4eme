import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apart-form',
  templateUrl: './apart-form.component.html',
  styleUrls: ['./apart-form.component.css']
})
export class ApartFormComponent {
  fg=new FormGroup({
    numap:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
    FloorNub:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
    surface:new FormControl('',[Validators.required]),
    terrace:new FormControl('',[Validators.required]),
    surfaceterrace:new FormControl('',[Validators.required]),
    cat:new FormControl('',[Validators.required]),
    desc:new FormControl('',[Validators.required,Validators.minLength(10)]),
    residence:new FormControl('',[Validators.required]),
  })
  showForm(){
    console.log(this.fg.value)
  }

}
