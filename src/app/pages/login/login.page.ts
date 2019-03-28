import { ToastController, NavController } from '@ionic/angular';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private users: UsersService,
    private toaster: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async doLogin() {
    try {
      await this.users.login(this.email, this.password);
      console.log('Logged in!');
      this.toaster.create({
        message: 'Logged in!',
        duration: 5000
      });
      this.navCtrl.navigateRoot('/profile');
    } catch (e) {
      console.log('Login failed! (' + e + ')');
      this.toaster.create({
        message: 'Login failed! (' + e + ')',
        duration: 5000
      });
    }
  }

}
