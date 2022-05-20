import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform !:FormGroup 

  constructor(private route:Router,private formBuilder:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    

    this.loginform= new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,4})(\.[a-z]{2,8})?$')
  
      ]),
      pass: new FormControl('',[
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[&.!@$]).{8,32}$')
      
      ])
    })
    
  }


  get email(){
    console.warn("returning Email")
    return this.loginform.get('email')
  }

  get pass(){
    console.warn("returning Pass")
    return this.loginform.get('pass')
  }


  login(){
    this.http.get<any>("http://localhost:3000/user").subscribe(res => {
      const user = res.find((u:any)=>{
        console.warn(this.loginform.value.email)
        console.warn(this.loginform.value.pass)
        return u.email ===this.loginform.value.email && u.pass ===this.loginform.value.pass
      });
      if (user){
        console.warn(user.role)
        alert("login Successfull")
        
        this.route.navigate(['feature'])
        localStorage.setItem('role',user.role)
        localStorage.setItem('email',user.email)


        
        

      }else{
        alert("Login Failed")
        
      }
    })

    
    
  }
}