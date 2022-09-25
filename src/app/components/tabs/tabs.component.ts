import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClient } from 'src/app/models/clients';
import { ITab } from 'src/app/models/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent {
  @Input() tabs: ITab[] = []
  @Input() clients: IClient[] = []
  @Input() selectedTab:string = ''
  @Input() loading = false
  @Output() onChangeTab = new EventEmitter<string>();
  onClickTab(tabName:string){
    this.onChangeTab.emit(tabName)
  }
}
