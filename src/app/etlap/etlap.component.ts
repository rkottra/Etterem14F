import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  public etelid:number = -1;

  constructor( private route: ActivatedRoute) { 
    
    this.route.params.subscribe( params => {
      if (params.id > -1)
        this.etelid = params.id;
    });
  }

  ngOnInit(): void {
  }

}
