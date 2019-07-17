import { Injectable } from "@angular/core";
import { Http }    from '@angular/http';

@Injectable()
export class Oauth2Service {

  data : any;
  http : any;

  constructor(http: Http) {
    this.http = http;
    this.data = null;
  }

  getAccessToken(code: string) {
    return this.http.post('https://chaira.udla.edu.co/ChairaApi/oauth2/token', {
      grant_type: "authorization_code", 
      code: code,
      redirect_uri: "http://localhost/callback",
      client_id: "fsEv87eZrVTh5OqACrlN4fPLea3YVj",
      client_secret: "I1YSIKlfKbztU7expF5BRIrc48xfhR",
      state: "OK"
    })
    .toPromise()
    .then(async token => {
      const accessToken = (await token.json()).access_token
      
      return this.http.get(`https://chaira.udla.edu.co/ChairaApi/consultar?recurso=GjR9jrQ4mrF&access_token=${accessToken}`)
      .toPromise()
      .then(response => response.json(), this.handleError);
    }, this.handleError);
  }

  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }
}