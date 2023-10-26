import { Component } from '@angular/core';
import { FirebaseControlService, tItem } from "src/app/services/firebase-control.service";

@Component({
  selector: 'app-item-card-list',
  templateUrl: './item-card-list.component.html',
  styleUrls: ['./item-card-list.component.css']
})
export class ItemCardListComponent {
  itemArray: any = [];
  address:string = "";

  constructor(private fbS:FirebaseControlService){
    this.initialize();
  }

  async initialize() {
    let x = await this.fbS.queryCondition(this.address, 100, "name", "!=", 'null');
    console.log(x);
    this.itemArray = x;
  }
}
