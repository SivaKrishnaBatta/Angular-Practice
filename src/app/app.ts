import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from './observable';
import { CommonModule } from '@angular/common';
import{FormsModule,NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  users: any[] = [];
  constructor( private observable: Observable) {}

  ngOnInit(): void {
    this.observable.getData().subscribe((data:any)=>{
      this.users=data;
      console.log(this.users);
    })

  }
  onLogin(form:NgForm){
    console.log(form.value);
    const email=form.value.email;
    const password=form.value.password;
    console.log("email :", email);
    console.log("password :", password);
    form.reset();
  }
}
