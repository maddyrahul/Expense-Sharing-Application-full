import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpenseService } from '../services/expense.service';
import { GroupMember } from '../models/GroupMember';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userId: string = '';
  role: string | null = null;
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private expenseService: ExpenseService, private groupService: GroupService
  ) {
   
  }
  ngOnInit(): void {
    this.authService.userRole$.subscribe(role => {
      this.role = role;
      console.log("Role in HeaderComponent:", this.role);
    });

    this.usercall();
  }

  usercall(): void {
    this.userId = localStorage.getItem('userId') || '';
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }


  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToUserManagement(): void {
    this.router.navigate(['/user-management']);
  }

  logout() {
    this.role = null;
  
    this.authService.logout();
  }
  // settleExpense(): void {
  //   this.userId = localStorage.getItem('userId') || '';

  //   if (this.userId !== null) {
  //     // Confirm settlement action
  //     const confirmation = confirm('Are you sure you want to settle expenses?');
  //     if (!confirmation) {
  //       return; // Do nothing if user cancels
  //     }

  //     const expense: GroupMember = {
  //       groupMemberId: 0,
  //       groupId: 0, // Set appropriate values for groupId if necessary
  //       userId: Number(this.userId),
  //       isSettled: false,
  //     };

  //     const observer = {
  //       next: (response: any) => {
  //         console.log("response", response);
  //         this.snackBar.open(response.Message, 'Close', {
  //           duration: 3000,
  //           panelClass: 'snackbar-popup'
  //         });
  //       },
  //       error: (error: any) => {
  //         this.snackBar.open('Failed to settle expense.', 'Close', {
  //           duration: 3000,
  //           panelClass: 'snackbar-popup-error'
  //         });
  //       }
  //     };

  //     this.expenseService.settleExpense(Number(this.userId), expense).subscribe(observer);



  //   } else {
  //     this.snackBar.open('User ID is null.', 'Close', {
  //       duration: 3000,
  //       panelClass: 'snackbar-popup-error'
  //     });
  //   }
  // }

  settleExpense(): void {
    this.userId = localStorage.getItem('userId') || '';
  
    if (this.userId) {
      // Confirm settlement action
      const confirmation = confirm('Are you sure you want to settle expenses?');
      if (!confirmation) {
        return; // Do nothing if user cancels
      }
  
      const expense: GroupMember = {
        groupMemberId: 0,
        groupId: 0, // Set appropriate values for groupId if necessary
        userId: Number(this.userId),
        isSettled: false,
      };
  
      const observer = {
        next: (response: any) => {
          // Show a success message upon successful settlement
          alert('Expense settled successfully!');
          this.groupService.refreshBalances.emit();
        },
        error: (error: any) => {
          // Show an error message if the settlement fails
          alert('Failed to settle expense.');
        }
      };
  
      this.expenseService.settleExpense(Number(this.userId), expense).subscribe(observer);
  
    } else {
      alert('User ID is null.');
    }
  }

  
  
}
