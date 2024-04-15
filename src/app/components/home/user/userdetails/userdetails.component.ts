import { Component, Input } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { ShortenPipe } from '../../../../pipes/shorten.pipe';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [ShortenPipe],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {

  @Input() userdetails: UserInterface; // variable que almacenara los datos del usuario enviados desde el padre

}
