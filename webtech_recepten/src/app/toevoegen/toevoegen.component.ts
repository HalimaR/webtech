import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ReceptService } from './../service/recept.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {

  receptNaam: string;
  calorien: string;
  ingredienten: string;
  tijd: string;
  public toevoegen: Array<string> = [];
  receptToevoegen: FormGroup;

  constructor(private receptservice: ReceptService) { }

  ngOnInit() {
    this.receptToevoegen = new FormGroup({
      naam: new FormControl(''),
      calorien: new FormControl(''),
      ingredienten: new FormControl(''),
      tijd: new FormControl('')
    })
    
  }
  onSubmit(){
    this.receptNaam = this.receptToevoegen.value.naam;
    this.calorien = this.receptToevoegen.value.calorien;
    this.ingredienten = this.receptToevoegen.value.ingredienten;
    this.tijd = this.receptToevoegen.value.tijd;
  }
  //alle recepten terug geven
  getAllrecept(){
   
    this.toevoegen.push(this.calorien);
    this.toevoegen.push(this.ingredienten);
    this.toevoegen.push(this.tijd);

    this.receptservice.receptToevoegen(this.receptToevoegen.value.naam,this.toevoegen);
    console.log();

    /*
    for(let i = 0; i<this.toevoegen.length; i++){
      console.log(this.toevoegen[i]);
    } */
  }
}
