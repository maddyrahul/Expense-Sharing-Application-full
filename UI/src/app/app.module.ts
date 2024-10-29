import { createComponent, NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { FooterComponent } from './footer/footer.component';
import { GroupBalanceComponent } from './group-balance/group-balance.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupListComponent } from './group-list/group-list.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { UpdateExpenseComponent } from './expense/update-expense/update-expense.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    CreateGroupComponent,
    FooterComponent,
    GroupBalanceComponent,
    GroupDetailsComponent,
    GroupListComponent,
   
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    UserManagementComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    UpdateExpenseComponent,
    MovieListComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:7141'], 
        disallowedRoutes: []
      }
    })
  ],
  providers: [
   
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
