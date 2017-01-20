import {Component } from '@angular/core'

@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})

export class EventListComponent {

    event = {
        id:1,
        name: 'Angular Connect',
        date:'9/26/2016',
        time:'1:00 am',
        price:599.99,
        imageUrl:'/app/assets/images/angularconnect-shield.png',
        location:{
            address:'1057 DT',
            city: 'London',
            country:'England'
        }
    }
}