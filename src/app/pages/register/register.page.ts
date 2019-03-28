import { ToastController, NavController } from '@ionic/angular';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Authentication
  email: string;
  password: string;
  confirm_password: string;

  constructor(
    private users: UsersService,
    private toaster: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async doRegister() {
    try {
      if(this.password !== this.confirm_password){
        throw 'passwords do not match';
      }
      await this.users.register(this.email, this.password);
      console.log('Success!');
      this.toaster.create({
        message: 'Success!',
        duration: 5000
      });
      this.navCtrl.navigateRoot('/home');
    } catch (e) {
      console.log('Registration failed! (' + e + ')');
      this.toaster.create({
        message: 'Registration failed! (' + e + ')',
        duration: 5000
      });
    }
  }

}
