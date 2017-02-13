import {Routes} from '@angular/router'
import {MeetingsListComponent } from './meetings/meetings-list.component'
import { MeetingDetailsComponent } from './meetings/meeting-details/meeting-details.component'

export const appRoutes: Routes =[
    { path: 'meetings',component: MeetingsListComponent},
    { path: 'meetings/:id', component: MeetingDetailsComponent},
    { path: '', redirectTo:'/meetings', pathMatch: 'full'}
    
    
]