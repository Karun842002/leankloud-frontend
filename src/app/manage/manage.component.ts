import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

interface task{
  id: number;
  task : string;
  dueby: Date;
  status : string;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  public todos : task[];
  public apiClient:DataService;
  constructor(private dataService: DataService) {
    this.apiClient = dataService;
    this.todos = [];
   }

  async ngOnInit() {
    this.todos = await this.apiClient.manage<task[]>();
    console.log(this.todos)
  }

}
