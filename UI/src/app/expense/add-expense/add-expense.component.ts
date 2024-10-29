import { Component } from '@angular/core';
import { ExpenseDto } from '../../models/ExpenseDto ';
import { ExpenseService } from '../../services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  expenseDto: ExpenseDto = {
    email: '',
    groupName: '',
    description: '',
    amount: 0,
    date: new Date()
  };

  constructor(private expenseService: ExpenseService, private router: Router) { }

  onSubmit(): void {
    this.expenseService.addExpense(this.expenseDto).subscribe(
      response => {
        alert('Expense added successfully');
        this.router.navigate(['/group-balance']);
      },
      error => {
        alert('Failed to add expense');
        console.error(error);
      }
    );
  }
}

