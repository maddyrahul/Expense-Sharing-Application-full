// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   message = '';

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.maxLength(15),
//         ],
//       ],
//     });
//   }

//   login(): void {
//     if (this.loginForm.invalid) {
//       return;
//     }

//     const email = this.Email.value;
//     const password = this.Password.value;

//     this.authService.login(email, password).subscribe(
//       (res: any) => {
//         if (res && res.token) {
//           this.message = 'Logged In Successfully.';
//           const userId = this.authService.getUserId();
//           console.log('User ID:', userId); // Use userId as needed
//           if(this.authService.getUserRole()=='Admin'){
//             this.router.navigate(['/create-group']);
//           }
//           else{
//             this.router.navigate(['/group-balance']);
//           }

          
//         } else {
//           this.message = 'Invalid Credentials!';
//         }
//       },
//       (error) => {
//         console.error('Error during login:', error);
//         this.message = 'An error occurred during login.';
//       }
//     );
//   }

//   logout(): void {
//     this.authService.logout();
//     this.router.navigate(['/login']);
//   }

//   get Email(): FormControl {
//     return this.loginForm.get('email') as FormControl;
//   }

//   get Password(): FormControl {
//     return this.loginForm.get('password') as FormControl;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';
  jwtHelper = new JwtHelperService();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.Email.value;
    const password = this.Password.value;

    this.authService.login(email, password).subscribe({
      next: (result) => {
        console.log('Login result:', result);  // Debugging log
        const token = result?.token;  // Ensure the token is in the expected place
        if (!token) {
          console.error('Token not found in the response');
          return;
        }
        
        // Store the token in localStorage
        localStorage.setItem('token', token);
        
        // Decode the token to get the userId and other information
        const decodedToken = this.jwtHelper.decodeToken(token);
        console.log('Decoded Token:', decodedToken);  

        // Get the userId, role, and username from the token
       const userId = decodedToken?.['sub'];
        const role = decodedToken?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        
        console.log("userid in ",userId)
        // Store the userId and username in localStorage
       localStorage.setItem('userId', userId); 

      localStorage.setItem('role',role);
       

        // Redirect based on role
        if (role === 'Admin') {
          this.router.navigate(['/create-group']);
        } else {
          this.router.navigate(['/group-balance']);
        }
      },
      error: (err) => {
        console.error('Login error:', err);
      }
    });
  }
  



  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}

