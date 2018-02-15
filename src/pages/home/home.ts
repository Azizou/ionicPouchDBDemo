import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPersonPage } from '../new-person/new-person';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private persons;
  private db;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
   this.refresh()
  }

  refresh() {
    this.db = new PouchDB('contacts');
    this.persons = [];

    this.db.allDocs({include_docs: true}, (err, result) => {
      if(!err){
        let rows = result.rows;
        for(let i=0; i < rows.length; i++){
          this.persons.push(rows[i].doc);
        }
        console.log(rows)
      }
    })
  }

  createNew(){
    this.navCtrl.push(NewPersonPage)
    
  }

}
