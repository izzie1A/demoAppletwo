import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title: string = "Appletwo";
  iconImgURL: string = "https://appletwo.ca/wp-content/uploads/2023/03/AppleTwo_Full_Logo-removebg-preview.png";
  itemArray:navItem [] = [];
  constructor(){
    this.itemArray.push(new navItem('Home','home','home'));
    this.itemArray.push(new navItem('Account','account','account'));
    this.itemArray.push(new navItem('Setting','setting','setting'));

  }

}
class navItem {
  displayName:string;
  iconName:string;
  url:string;
  constructor(displayName:string,iconName:string,url:string){
    this.displayName = displayName;
    this.iconName = iconName;
    this.url = url;
  }
}