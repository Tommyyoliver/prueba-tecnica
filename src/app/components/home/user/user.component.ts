import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../../../interfaces/user.interface';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserdetailsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  private _apiService = inject(ApiService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);

  private userData: UserInterface;;

  getUserData() {
    return this.userData;
  }

  navigateTo(id: string): void {
    this._router.navigate([id]);
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getUser(params["id"]).subscribe(data => {
        this.userData = data;
      })
    })
  }

}
