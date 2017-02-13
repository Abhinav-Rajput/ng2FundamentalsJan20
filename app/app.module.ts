import {NgModule} from '@angular/core'
import{RouterModule}  from '@angular/router'
import {BrowserModule} from '@angular/platform-browser'
import { EventsAppComponent }  from './events-app.component'
import {MeetingsListComponent }  from './meetings/meetings-list.component'
import {MeetingThumbnailComponet} from './meetings/meeting-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {MeetingService} from './meetings/shared/meeting-service'
import {ToastrService} from './common/toastr.service'
import {MeetingDetailsComponent}  from './meetings/meeting-details/meeting-details.component'
import {appRoutes} from './routes'
@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations:[EventsAppComponent,MeetingsListComponent,MeetingThumbnailComponet,NavBarComponent,MeetingDetailsComponent],
    providers: [MeetingService,ToastrService],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}