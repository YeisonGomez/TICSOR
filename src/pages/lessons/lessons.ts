import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { TopicPage } from '../topic/topic';
import { TestPage } from '../test/test';
import { LoginPage } from '../login/login';

import { TemaryService } from '../../services/temary.service';

@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html'
})
export class LessonsPage {

  private temary: any[];

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, 
    private temaryService: TemaryService) {

    this.temaryService.getAll(1)
    .subscribe((data)=> {
      this.temary = data.result;
    }, (error) => {
      console.log(error);
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'UASOR',
      buttons: [
        {
          text: 'Cerrar Sesion',
          role: 'Close Sesion',
          handler: () => {
            localStorage.clear();
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    actionSheet.present();
  }

  openTopic(temary) {
    this.navCtrl.push(TopicPage, {
      temary: temary
    });
  }

  openTest(temary){
     this.navCtrl.push(TestPage, {
      temary: temary
    });
  }
  
}
