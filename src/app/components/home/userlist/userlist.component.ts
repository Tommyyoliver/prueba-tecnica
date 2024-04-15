import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { UserInterface } from '../../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {

  private _apiService = inject(ApiService);
  private _router = inject(Router);

  private usersList: UserInterface[] = [];

  getUsersList() {
    return this.usersList;
  }

  ngOnInit(): void {
    this._apiService.getAllUsers().subscribe((data) => {
      this.usersList = data;
    })
  }

  navigateTo(route: number) {
    this._router.navigate(["user/" + route]);
  }

}
