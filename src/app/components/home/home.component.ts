import { Component } from '@angular/core';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserlistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
