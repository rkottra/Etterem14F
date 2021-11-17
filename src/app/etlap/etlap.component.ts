import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etlap',
  templateUrl: './etlap.component.html',
  styleUrls: ['./etlap.component.css']
})
export class EtlapComponent implements OnInit {

  public Cim: string = "Étlap és itallap";
  public etlap = [
    {
      Kajanev: "Rántott hús",
      Url: "assets/rantotthus.jpeg"
    },
    {
      Kajanev: "Töltött káposzta"
    },
    {
      Kajanev:  "Paprikás krumpli"
    },
    {
      Kajanev: "Palacsinta"
    },
    {
      Kajanev: "Szilvásgombóc"
    }
    ,
    {
      Kajanev: "Szilvásgombóc"
    }
    ,
    {
      Kajanev: "Szilvásgombóc"
    }
    ,
    {
      Kajanev: "Szilvásgombóc"
    }
    ,
    {
      Kajanev: "Szilvásgombóc"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
