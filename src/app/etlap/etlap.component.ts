import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-etlap',
  templateUrl: './etlap.component.html',
  styleUrls: ['./etlap.component.css']
})
export class EtlapComponent implements OnInit {

  public Cim: string = "Étlap és itallap";
  public etlap: any[]= [];

  public etelid:number = -1;

  constructor( private route: ActivatedRoute, private config: ConfigService) { 
    
    this.route.params.subscribe( params => {
      if (params.id > -1)
        this.etelid = params.id;
    });

    this.config.getEtelek().subscribe(data => {
      this.etlap = data;
    });
  }

  ngOnInit(): void {
  }

}
