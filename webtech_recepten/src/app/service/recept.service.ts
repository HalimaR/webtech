import { Injectable } from '@angular/core';
import { ReceptlistComponent } from '../receptlist/receptlist.component';

@Injectable({
  providedIn: 'root'
})
export class ReceptService {

  constructor() { }
  private receptlist: Array<string> = [];
 
  recepttoevoegen(naamrecept, recept):  void{
    if(localStorage.getItem(naamrecept) != undefined){
      console.log("deze recept bestaat al")
    }
    else{
      localStorage.setItem(naamrecept, JSON.stringify(recept));
      console.log("recept is opgeslagen")
    }
  }

  dbclear(): void{
    localStorage.clear();
  }
  
  loop(): Array<string>{
    this.receptlist = [];
    for(var i =0; i < localStorage.length; i++){
      var data = localStorage.key(i);
     
      var res = localStorage.getItem(data);
      this.receptlist.push(res);
    }
    return this.receptlist.sort();
  }
}
