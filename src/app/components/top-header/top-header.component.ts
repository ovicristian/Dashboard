import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent {
  @Output() toggleClass = new EventEmitter<void>();
  user: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Subscribe to current user from auth service
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = {
          username: 'Usuario',
          avatarUrl: 'assets/images/users/avatar.jpg',
        };
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  emitToggleClassEvent() {
    this.toggleClass.emit();
  }

  countryManu: boolean = true;

  countryDropdown() {
    this.countryManu = !this.countryManu;
  }

  isCartManu: boolean = true;

  cartDropdown() {
    this.isCartManu = !this.isCartManu;
  }

  isNotification: boolean = true;

  notificationManu() {
    this.isNotification = !this.isNotification;
  }

  isUser: boolean = true;
  userDropdown() {
    this.isUser = !this.isUser;
  }

  countryData = [
    {
      name: 'German',
      image: 'assets/images/flags/germany.png',
    },
    {
      name: 'Italian',
      image: 'assets/images/flags/italy.png',
    },
    {
      name: 'Russian',
      image: 'assets/images/flags/russia.png',
    },
    {
      name: 'Spanish',
      image: 'assets/images/flags/spain.png',
    },
  ];

  cartItem = [
    {
      image: 'assets/images/shop/items/s1.jpg',
      name: 'T-shirt (M)',
      item: '$320 X 2',
      amount: '$640',
    },
    {
      image: 'assets/images/shop/items/s2.jpg',
      name: 'Bag',
      item: '$50 X 5',
      amount: '$250',
    },
    {
      image: 'assets/images/shop/items/s3.jpg',
      name: 'Watch (Men)',
      item: '$800 X 1',
      amount: '$800',
    },
  ];
}
