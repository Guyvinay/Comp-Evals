import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCreds } from 'src/app/profile';
import { ProfileService } from 'src/app/profile.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {




  loginCreds:LoginCreds = {
    username: '',
    password: ''
  }

  constructor(
    private profileService: ProfileService,
    private router : Router,
  ){}


  ngOnInit(): void {

  }


  loginUser(){

    this.profileService.loginUser(this.loginCreds)
               .subscribe(
                (response)=>{
                  console.log(response);
                  setTimeout(()=>{
                    this.router.navigate(['/dashboard']);
                  },2000);
                  Swal.fire({
                    icon: 'success', // Set the alert icon (success, error, warning, info, etc.)
                    title: 'Login Success!',
                    text: 'Successfully Logged-in',
                    showConfirmButton: false, // Automatically close the alert after a short delay
                    timer: 1500, // Adjust the duration (in milliseconds) for the alert to disappear
                  });
                },
                (error)=>{
                  console.log(error);
                  Swal.fire({
                    icon: 'error', // Set the alert icon (success, error, warning, info, etc.)
                    title: 'Login Failed',
                    text: 'Login Failed, Try Again!',
                    showConfirmButton: false, // Automatically close the alert after a short delay
                    timer: 1500, // Adjust the duration (in milliseconds) for the alert to disappear
                  });
                }
               )
    
  }
  routeToRegister(){

  }

}
