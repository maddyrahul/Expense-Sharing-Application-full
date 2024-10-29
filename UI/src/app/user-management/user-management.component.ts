import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  role: string | null = null;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  editUser(user: User): void {
    this.authService.userRole$.subscribe(role => {
      this.role = role;
      console.log("Role in HeaderComponent:", this.role);
  });
  const loggedInUserId = Number(localStorage.getItem('userId')); 

  if (this.role === 'Admin' && loggedInUserId === user.userId) {
      alert("Admin cannot edit their own account.");
      return; // Exit the function to prevent deletion
  }
    this.router.navigate(['/edit-user', user.userId]);
  }

  deleteUser(userId: number): void {
    this.authService.userRole$.subscribe(role => {
        this.role = role;
        console.log("Role in HeaderComponent:", this.role);
    });

    const loggedInUserId = Number(localStorage.getItem('userId')); 

    if (this.role === 'Admin' && loggedInUserId === userId) {
        alert("Admin cannot delete their own account.");
        return; // Exit the function to prevent deletion
    }

    if (confirm('Are you sure you want to delete this user?')) {
        this.userService.deleteUser(userId).subscribe(() => {
            this.loadUsers();
        });
    }
}

}