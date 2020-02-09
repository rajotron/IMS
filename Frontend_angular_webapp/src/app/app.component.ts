import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ApisService } from './services/api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webApp';

  constructor(private auth:AuthService,private router: Router,private _api:ApisService) { }

  ngOnInit() {
  	this.databaseConnection();
  }

  databaseConnection(){
  	this._api.connectToDB().subscribe((res: any) => {
        //this.result=res;
         
        if (res.code == 'Success') {
          console.log("Connection to database setup successfully!!!");
        }
        else{
          console.log("Connection to database is unsuccessful!!!")
        }
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });
  }


  logout(){
    this.auth.setLoggedOut();
  }

}
