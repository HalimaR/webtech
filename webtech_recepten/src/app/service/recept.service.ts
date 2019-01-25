import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReceptService {
    
    //public receptLijst: string[];
    public receptenLijst: string[];
    public toegevoegd: string;
    constructor() { }
    receptToevoegen(renaam, rceptlijst){
        var receptNaam: string ='';
        
        if(localStorage.getItem(renaam) != undefined){
            console.log("bestaat al");
        }
        else{
            receptNaam = renaam;
            localStorage.setItem(renaam, JSON.stringify(rceptlijst));
            console.log("toegevoegd");
        }
        
    }
    
    getAllrecepten(): Array<string>{
        console.log("yep");
        for(var i = 0; i< localStorage.length; i++){
            var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
            this.receptenLijst.push(localStorage.key(i));
            console.log(i);

        }
        return this.receptenLijst;
    }
    
}