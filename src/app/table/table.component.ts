import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @ViewChild('table') table: MatTable<PeriodicElement>;

  columns = [
    { columnDef: 'position', header: 'No.',    cell: (element: PeriodicElement) => `${element.position}` },
    { columnDef: 'name',     header: 'Name',   cell: (element: PeriodicElement) => `${element.name}`     },
    { columnDef: 'weight',   header: 'Weight', cell: (element: PeriodicElement) => `${element.weight}`   },
    { columnDef: 'symbol',   header: 'Symbol', cell: (element: PeriodicElement) => `${element.symbol}`   },
    { columnDef: 'action',   header: 'Action', cell: (element: PeriodicElement) => `${element.symbol}`   },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = ELEMENT_DATA;
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
    let index = 0;
    this.dataSource.forEach((element: PeriodicElement) => {
      element.position = ++index;
    });
  }

  isAction(str: string) {
    if (str === 'Action')  {
      return true;
    }
    return false;
  }

  onDelete(row: PeriodicElement) {
    alert('Row to be deleted: ' + JSON.stringify(row));
  }

  onEdit(row: PeriodicElement) {
    alert('Row to be edited: ' + JSON.stringify(row));
  }

  ngOnInit() {
  }

}
