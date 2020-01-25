import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menudetail=''
  constructor()
  {
    //alert(this.menudetail)
  }

  onChange(selecteddata)
  {

    alert(selecteddata)
    alert(this.menudetail)
  }
  
  menuList =["chiken fry","Dal Fry","jira rice"]
}
