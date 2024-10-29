import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/Expense';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private adminService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.adminService.getAllExpenses().subscribe(
      data => {
        this.expenses = data;
        console.log("expense", this.expenses);
      },
      error => console.error(error)
    );
  }
}
