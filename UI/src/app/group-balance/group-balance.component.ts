import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroupWithMembers } from '../models/GroupWithMembers';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ExpenseService } from '../services/expense.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group-balance',
  templateUrl: './group-balance.component.html',
  styleUrl: './group-balance.component.css'
})
export class GroupBalanceComponent implements OnInit, OnDestroy {
  userId: string = '';
  groupWithMembers: GroupWithMembers[] = [];
  error!: string;
  isLoading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private expenseService: ExpenseService, private groupService:GroupService
  ) { }

  ngOnInit(): void {
    this.fetchBalances();
    this.groupService.refreshBalances.subscribe(() => {
      this.fetchBalances(); // Refresh balances when the event is triggered
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchBalances() {
    this.userId = localStorage.getItem('userId') || '';
    console.log(" in group balnce",this.userId)
    this.isLoading = true;
    const sub = this.expenseService.getGroupsWithBalancesByUserId(Number(this.userId)).subscribe(
      (data) => {
        this.groupWithMembers = data;


        
        this.error = '';
        this.isLoading = false;
      },
      (err) => {
        this.error = 'An error occurred while fetching data.';
        console.error(err);
        this.isLoading = false;
      }
    );
    this.subscription.add(sub);
  }
}
