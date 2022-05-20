import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private router : Router) {{

  }}
  greeting : string = "";

  ngOnInit(): void {
    var mydate : Date = new Date();
    var hr = mydate.getHours();

    if (hr < 12) {
      this.greeting = "Good Morning 🌅";
    }else if (hr < 16) {
      this.greeting = "Good Afternoon 🌞";
    }else if (hr < 19) {
      this.greeting = "Good Evening 🌇";
    }else {
      this.greeting = "Good Night 😴"
    }
  }
  function() {
    this.router.navigate(["/feature/product-list"])
  }


}
