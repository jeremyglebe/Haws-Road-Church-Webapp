import { BeliefsService } from './../../services/beliefs.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-belief',
  templateUrl: './add-belief.page.html',
  styleUrls: ['./add-belief.page.scss'],
})
export class AddBeliefPage implements OnInit {

  public statement: string;
  public scripture: string;
  public order: string;

  constructor(
    private navCtrl: NavController,
    private beliefs: BeliefsService
  ) { }

  ngOnInit() {
  }

  add(){
    console.log(this.statement, this.scripture);
    this.beliefs.addBelief(this.statement, this.scripture, parseInt(this.order, 10));
    this.navCtrl.navigateRoot('/about');
  }

  cancel(){
    this.navCtrl.navigateRoot('/about');
  }

}
