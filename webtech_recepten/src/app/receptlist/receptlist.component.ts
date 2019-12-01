import { Component, OnInit } from '@angular/core';
import { ReceptService } from '../service/recept.service';

@Component({
  selector: 'app-receptlist',
  templateUrl: './receptlist.component.html',
  styleUrls: ['./receptlist.component.css']
})
export class ReceptlistComponent implements OnInit {

  receptlijstt: Array<string>;
  //receptlijstt: Array<string>;
  list: Array<string> = [];
  constructor(private receptService: ReceptService) {  }

  ngOnInit() {
  }
  receptlijst(){
    this.list = [];
    this.receptlijstt = this.receptService.loop();
    var lijst;
    for(let i = 0; i < this.receptlijstt.length; i++){
      lijst = JSON.parse(this.receptlijstt[i]);
      this.list.push(lijst);
    }
    console.log(this.list);
  }

}
