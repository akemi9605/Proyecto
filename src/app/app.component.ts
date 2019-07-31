import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'gamesofront';
  constructor() {
  }
  ngOnInit() {
    /* this._timeline.olderCharacter()
       .subscribe(res => {
 
         let age_max = res['age'].map(res => res.age.age_max);
         let age_min = res['age'].map(res => res.age.age_min);
         let allAge = res['age'].map(res => res.dt);
 
         let ageDates = [];
         allAge.forEach((res) => {
           let jsAge = new Date(res * 1000);
           ageDates.push(jsAge.toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
 
         });
         console.log(ageDates);
       });
     */
  }
}
