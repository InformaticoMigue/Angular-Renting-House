import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../assets/types/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['../../styles.css']
})
export class NavbarComponent implements OnInit {

  userService: UserService = inject(UserService)
  user!:User;

  ngOnInit() {
   this.user = this.userService.getUser();
  }

}
