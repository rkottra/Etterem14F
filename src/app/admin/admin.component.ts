import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public felhasznalonev:string = "KovacsJanos";
  public jelszo:string = "12345";

  constructor() { }

  ngOnInit(): void {
  }

  kattint() {
    alert("Hahó: " + this.felhasznalonev);

  }
  
}


