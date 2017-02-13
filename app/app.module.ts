import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { EventsAppComponent }  from './events-app.component'
import {MeetingsListComponent }  from './meetings/meetings-list.component'
import {MeetingThumbnailComponet} from './meetings/meeting-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import {MeetingService} from './meetings/shared/meeting-service'
import {ToastrService} from './common/toastr.service'
@NgModule({
    imports:[BrowserModule],
    declarations:[EventsAppComponent,MeetingsListComponent,MeetingThumbnailComponet,NavBarComponent],
    providers: [MeetingService,ToastrService],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}