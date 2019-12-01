import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReceptService } from '../service/recept.service';

@Component({
  selector: 'app-recepttoevoegen',
  templateUrl: './recepttoevoegen.component.html',
  styleUrls: ['./recepttoevoegen.component.css']
})
export class RecepttoevoegenComponent implements OnInit {
  receptlijstt: Array<string>;

  recept: FormGroup;
  r;
  clear;
  constructor( private receptService: ReceptService ) { }
  

  ngOnInit() {   /// haalt de input uit de html
    this.recept = new FormGroup({
      name: new FormControl(''),
      aantalcalorien: new FormControl(''),
      ingredienten: new FormControl(''),
      benodigdetijd: new FormControl(''),
    });
  }

  onSubmit(){
    this.r = this.receptService.recepttoevoegen(this.recept.value.name, this.recept.value);
  }
  dbclear(){
    this.clear = this.receptService.dbclear();
  }
}
