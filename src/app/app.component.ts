import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(){
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyBNXgOmXZsuOgXnlqjyjzn01nzZCJlqKNc",
    authDomain: "http-farm-demo.firebaseapp.com",
    databaseURL: "https://http-farm-demo.firebaseio.com",
    projectId: "http-farm-demo",
    storageBucket: "http-farm-demo.appspot.com",
    messagingSenderId: "979957278193"
  };
  firebase.initializeApp(config);
  }
}
