import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  jsonData: any[] = [];
  selectedItem: any;

  constructor(private dataService: DataService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data: any) => {
      this.jsonData = data;
      this.selectedItem = this.jsonData[0];
    });
  }

  onItemSelected(item: any) {
    this.selectedItem = item;

  }
  onCompletedChange(value: boolean) {
    if (this.selectedItem) {
      const propertyIndex = this.selectedItem.Properties.findIndex((prop: { Label: string }) => prop.Label === "Is Construction Completed");
      if (propertyIndex !== -1) {
        this.selectedItem.Properties[propertyIndex].Value = value;
      }
    }
  }

  onSaveClicked() {
    if (this.selectedItem) {

      this.dataService.updateData(this.selectedItem).subscribe((updatedData: any) => {
      });
      this.toastr.success('Update successfully', 'Success', {
        timeOut: 1000,
        closeButton: true,
        progressBar: true,
      });
    }
  }
  navigate() {
    this.router.navigate(['summary'])
  }
  getPropertyValue(label: string): any {
    const property = this.selectedItem.Properties.find((prop: { Label: string; }) => prop.Label === label);
    return property ? property.Value : '';
  }

  setProperty(label: string, value: any): void {
    const property = this.selectedItem.Properties.find((prop: { Label: string; }) => prop.Label === label);
    if (property) {
      property.Value = value;
    } else {
      this.selectedItem.Properties.push({ Label: label, Value: value });
    }
  }
}
