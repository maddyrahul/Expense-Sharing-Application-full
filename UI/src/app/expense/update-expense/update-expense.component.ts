import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/Expense';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrl: './update-expense.component.css'
})
export class UpdateExpenseComponent implements OnInit {
  expense: Expense | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: ExpenseService
  ) { }

  ngOnInit(): void {
    const expenseId = +this.route.snapshot.paramMap.get('expenseId')!;
    this.loadExpense(expenseId);
  }

  loadExpense(expenseId: number): void {
    this.adminService.getExpenseById(expenseId).subscribe(
      data => this.expense = data,
      error => console.error(error)
    );
  }

  updateExpense(): void {
    if (this.expense) {
      this.adminService.updateExpense(this.expense.expenseId, this.expense).subscribe(
        data => this.router.navigate(['/expense-list']),
        error => console.error(error)
      );
    }
  }

  cancelUpdate(): void {
    this.router.navigate(['/expense-list']);
  }
}
