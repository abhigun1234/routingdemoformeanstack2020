import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  //username=false
  value=true;
  constructor() { }

  ngOnInit() {
    //this.username.valid
  }
  clickMe()
  {
    alert('click')
  }
  onKeyUp(val:any)
  {
  if (val!=null)
    {

      //alert('hello')
      console.log(val)
      this.value=false;
    }

  }

}
