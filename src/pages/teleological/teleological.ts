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
        { name: 'OFICINA ASESORA JURÍDICA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pUXmF3MeAw8') },
        { name: 'VICERRECTORÍA ACADÉMICA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HzsgPimkRsE') },
        { name: 'VICERRECTORÍA ADMINISTRATIVA ', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YZhlTutzNaE') },
        { name: 'VICERRECTORÍA DE INVESTIGACIÓN', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8_Hm2rda8PE') },
        { name: 'VICERRECTORÍA DE INVESTIGACIONES Y POSGRADOS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rdWpR5v8b6c') },
        { name: 'FACULTAD DE CIENCIAS AGROPECUARÍAS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/M4yiS5t5oak') },
        { name: 'FACULTAD DE CIENCIAS BASICAS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Lb-eq2DLHLM') },
        { name: 'FACULTAD DE CIENCIAS CONTABLES, ECONÓMICAS Y ADMINISTRATIVAS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/GBDvhEnCfT8') },
        { name: 'FACULTAD EN CIENCIAS DE LA EDUCACIÓN', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1CI0kWzij8I') },
        { name: 'FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Cve9TeK__so') },
        { name: 'FACULTAD DE INGENIERÍA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4zz1Kf1KE-o') },
        { name: 'TECNOLOGÍA EN DESARROLLO DE SOFTWARE', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YRGZ4UR1Lmk') },
        { name: 'TECNOLOGIA EN GESTION DE MERCADOS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/PPfoWNAnsUA') },
        { name: 'TECNOLOGIA EN ADMINISTRACIÓN DE EMPRESAS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/70c0jacDV00') },
        { name: 'TECNOLOGIA EN ADMINISTRACIÓN FINANCIERA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/nHbbZOJQ-2o') },
        { name: 'DERECHO', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/5oSqPznD4UE') },
        { name: 'INGENIERÍA AGREOECOLÓGICA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/QgPHGmc7AyU') },
        { name: 'INGENIERÍA DE ALIMENTOS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/SC80YnXSOCw') },
        { name: 'INGENIERIA DE SISTEMAS', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/rsZ6fEyk94A') },
        { name: 'LICENCIATURA EN  CIENCIAS SOCIALES', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/66Y7mqbv8Jg') },
        { name: 'LICENCIATURA EN EDUCACIÓN ARTISTICA Y CULTURAL', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/BAGygyo2Kws') },
        { name: 'LICENCIATURA EN INGLES', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/0debiQiZPMM') },
        { name: 'LICENCIATURA EN LITERATURA Y LENGUA CASTELLANA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Gzc47ydmjnY') },
        { name: 'LICENCIATURA EN MATEMATICAS Y FISICA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ZwJD8tSTYeE') },
        { name: 'MEDICINA VETERINARIA Y ZOOTECNIA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/fsXnkNgH0f8') },
        { name: 'DEPARTAMENTO DE EDUCACIÓN A DISTANCIA', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zJo-cOYKEOc') },
        { name: 'DEPARTAMENTO DE PEDAGOGIA ', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HPe2blA9gZ4') },
        { name: 'DEPARTAMENTO DE TECNOLOGÍAS DE LA INFORMACIÓN', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/_gaFwifpfJI') },
        { name: 'HIMNO', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Ro8QLJJUiqI') },
        { name: 'MISION', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8Yzmv3RBzqM') },
        { name: 'VISION', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/muOOwcxNUYM') },
        { name: 'LOGO', link: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/sBQWXxDYaw8') }
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
