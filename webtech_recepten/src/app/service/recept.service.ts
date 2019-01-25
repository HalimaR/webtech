import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReceptService {
    
    //public receptLijst: string[];
    //public receptenLijst: string[];
    public keyLijst: string[];
    public valueLijst: string[];
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
        var receptLijst: string[];
        
        for(var i = 0; i< localStorage.length; i++){
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            
            let recept = key + value;
            console.log(recept);
            receptLijst.push(recept);
            console.log(key, value);
            //return receptLijst;
        }
        return receptLijst;
    }
    
}