import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
    selector: 'page-teleological',
    templateUrl: 'teleological.html'
})
export class TeleologicalPage {

    public temary: any[] = [
        { name: 'SECRETARÍA GENERAL', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/SxphDhSA4_Q') },
        { name: 'OFICINA ASESORA DE RELACIONES INTERNACIONALES', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Utz7HHJAMGo') },
        { name: 'OFICINA ASESORA DE PLANEACIÓN', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/z4CtN1soRF4') },
        { name: 'OFICINA ASESORA DE CONTROL INTERNO ', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5bREyL0LgwI') },
        
    ];
    public defaultMultimedia;

    constructor(
        public navCtrl: NavController,
        public actionSheetCtrl: ActionSheetController,
        private domSanitizer: DomSanitizer) {
    }

    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'TicSor',
            buttons: [
                {
                    text: 'Cerrar Sesion',
                    role: 'Close Sesion',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    selectedMultimedia(url) {
        /* this.defaultMultimedia = undefined; */
        this.defaultMultimedia = url;
    }

}
