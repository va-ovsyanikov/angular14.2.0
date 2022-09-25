import { Component, OnInit } from '@angular/core';
import { IClient } from 'src/app/models/clients';
import { ITab } from 'src/app/models/tabs';
import { ClientsService } from 'src/app/services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  clients: IClient[] = []
  tabs: ITab[] = [
    { name: 'income' },
    { name: 'outcome' },
    { name: 'loan' },
    { name: 'investment' },
  ]
  selectedTab = 'income'
  loading = false

  constructor(
    private clientsService: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
    this.loading = true
    this.router.navigate(['/navigator'], {
      queryParams: {
        'tab': this.selectedTab
      }
    })
    this.clientsService.getAll().subscribe(response => {
      this.clients = response.data.filter(el => el.type == this.selectedTab)
      this.loading = false
    })
  }
  onChangeTab(tabName: any) {
    this.loading = true
    this.clients = []
    this.selectedTab = tabName
    this.router.navigate(['/navigator'], {
      queryParams: {
        'tab': this.selectedTab
      }
    })
    this.clientsService.getAll().subscribe(response => {
      this.clients = response.data.filter(el => el.type == this.selectedTab)
      this.loading = false
    })
  }
}
