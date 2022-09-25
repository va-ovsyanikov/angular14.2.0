import { Component } from '@angular/core';
import { INavLink } from 'src/app/models/navLink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent {

  navLinks:INavLink[] = [
    {name:'Summary', route:'' },
    {name:'Link', route:'/navigator' }
  ]

}
