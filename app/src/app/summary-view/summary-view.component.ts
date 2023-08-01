import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})
export class SummaryViewComponent implements OnInit {
  jsonData: any[] = [];
  constructor(private dataService: DataService, private router: Router) { }
  navi() {
    this.router.navigate(['detail'])
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dataService.getData().subscribe((data: any) => {
      this.jsonData = data

    })
  }
  getProperty(item: any, label: string): any {
    const property = item.Properties.find((prop: { Label: string; }) => prop.Label === label);
    return property ? property.Value : '';
  }
}
