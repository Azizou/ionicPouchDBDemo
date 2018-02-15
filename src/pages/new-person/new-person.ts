import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

/**
 * Generated class for the NewPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-person',
  templateUrl: 'new-person.html',
})
export class NewPersonPage {
  private name;
  private email;
  private phone;
  private db;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  setupDB(){
    this.db = new PouchDB('contacts')
  }

  ionViewDidLoad() {
    this.setupDB();
  }

  cancel(){
    this.navCtrl.pop();
  }

  save(){
    this.db.post({
      name: this.name,
      email: this.email,
      phone: this.phone
    }, (err, result) => {
      if(!err){
        alert("Person saved successfully.")
      }
    } )
  }
}
