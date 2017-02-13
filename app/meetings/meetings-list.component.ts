import {Component}  from '@angular/core'
@Component({
    selector:'meetings-list',
    template:`
      <div>
    <h2> Upcomming Angular Events </h2>
    <hr/>
   <div class="well">
   <div>Hello World</div>
   </div>
    <meeting-thumbnail  [events]="meeting"></meeting-thumbnail>
   
    </div>
    `,
    styles:[`
    .well div {color: red;}
    `]
})

export class MeetingsListComponent {


    meeting = {
        id:1,
        name:'Angular Connect',
        date:'9/9/2012',
        time:'10:20 am',
        price: 599.99,
        imageUrl:'/app/assets/images/angularconnect-shield.png',
        location:{
            address: '1057  DT',
            city: 'London',
            country:'UK'
        }
    }
   
}