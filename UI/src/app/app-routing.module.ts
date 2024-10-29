// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { GroupBalanceComponent } from './group-balance/group-balance.component';
// // import { LoginComponent } from './login/login.component';
// // import { GroupDetailsComponent } from './group-details/group-details.component';
// // import { CreateGroupComponent } from './groups/create-group/create-group.component';
// // import { AuthGuard } from './guards/auth.guard';
// // import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
// // import { UserManagementComponent } from './user-management/user-management.component';
// // import { EditUserComponent } from './edit-user/edit-user.component';
// // import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
// // import { GroupListComponent } from './group-list/group-list.component';
// // import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';

// // const routes: Routes = [
// //   {path:'group-balance',component:GroupBalanceComponent},
// //   { path: 'login', component: LoginComponent },
// //   {path:'group-details',component:GroupDetailsComponent},
// //   { path: 'create-group', component: CreateGroupComponent, canActivate: [AuthGuard] , data: { role: 'admin' }},
// //   { path: 'group/:groupId/add-expense', component: AddExpenseComponent, canActivate: [AuthGuard],data: { role: 'normal' } },
// //   { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
// //   { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard] , data: { role: 'admin' }},
// //   { path: 'add-expense', component: AddExpenseComponent, canActivate: [AuthGuard] , data: { role: 'normal' }},
// //   { path: 'expense-list', component: ExpenseListComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
// //   {path :'group-list',component:GroupListComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
// //   { path: 'update-expense/:expenseId', component: UpdateExpenseComponent, canActivate: [AuthGuard], data: { role: 'admin' } }
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { GroupBalanceComponent } from './group-balance/group-balance.component';
// import { LoginComponent } from './login/login.component';
// import { GroupDetailsComponent } from './group-details/group-details.component';
// import { CreateGroupComponent } from './groups/create-group/create-group.component';
// import { AuthGuard } from './guards/auth.guard';
// import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
// import { UserManagementComponent } from './user-management/user-management.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
// import { GroupListComponent } from './group-list/group-list.component';
// import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';

// const routes: Routes = [
//   {path:'group-balance',component:GroupBalanceComponent},
//   { path: 'login', component: LoginComponent },
//   {path:'group-details',component:GroupDetailsComponent},
//   { path: 'create-group', component: CreateGroupComponent, canActivate: [AuthGuard] , data: { role: 'Admin' }},
//   { path: 'group/:groupId/add-expense', component: AddExpenseComponent, canActivate: [AuthGuard],data: { role: 'User' } },
//   { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
//   { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard] , data: { role: 'Admin' }},
//   { path: 'add-expense', component: AddExpenseComponent, canActivate: [AuthGuard] , data: { role: 'User' }},
//   { path: 'expense-list', component: ExpenseListComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
//   {path :'group-list',component:GroupListComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
//   { path: 'update-expense/:expenseId', component: UpdateExpenseComponent, canActivate: [AuthGuard], data: { role: 'Admin' } }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { GroupBalanceComponent } from './group-balance/group-balance.component';
// import { LoginComponent } from './login/login.component';
// import { GroupDetailsComponent } from './group-details/group-details.component';
// import { CreateGroupComponent } from './groups/create-group/create-group.component';
// import { AuthGuard } from './guards/auth.guard';
// import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
// import { UserManagementComponent } from './user-management/user-management.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
// import { GroupListComponent } from './group-list/group-list.component';
// import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';

// const routes: Routes = [
//   {path:'group-balance',component:GroupBalanceComponent},
//   { path: 'login', component: LoginComponent },
//   {path:'group-details',component:GroupDetailsComponent},
//   { path: 'create-group', component: CreateGroupComponent, canActivate: [AuthGuard] , data: { role: 'admin' }},
//   { path: 'group/:groupId/add-expense', component: AddExpenseComponent, canActivate: [AuthGuard],data: { role: 'normal' } },
//   { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
//   { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard] , data: { role: 'admin' }},
//   { path: 'add-expense', component: AddExpenseComponent, canActivate: [AuthGuard] , data: { role: 'normal' }},
//   { path: 'expense-list', component: ExpenseListComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
//   {path :'group-list',component:GroupListComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
//   { path: 'update-expense/:expenseId', component: UpdateExpenseComponent, canActivate: [AuthGuard], data: { role: 'admin' } }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupBalanceComponent } from './group-balance/group-balance.component';
import { LoginComponent } from './login/login.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';

import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { GroupListComponent } from './group-list/group-list.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'group-balance',component:GroupBalanceComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
 
  {path:'group-details',component:GroupDetailsComponent,canActivate: [AuthGuard]},
  { path: 'create-group', component: CreateGroupComponent,canActivate: [AdminGuard]},
  { path: 'group/:groupId/add-expense', component: AddExpenseComponent ,canActivate: [AuthGuard]},
  { path: 'user-management', component: UserManagementComponent ,canActivate: [AdminGuard]},
  { path: 'edit-user/:id', component: EditUserComponent,canActivate: [AdminGuard]},
  { path: 'add-expense', component: AddExpenseComponent,canActivate: [AuthGuard]},
  { path: 'expense-list', component: ExpenseListComponent ,canActivate: [AdminGuard]},
  {path :'group-list',component:GroupListComponent,canActivate: [AdminGuard]},
  { path: 'update-expense/:expenseId', component: UpdateExpenseComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
