import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MeetingDtoComponent } from './components/meeting-dto/meeting-dto.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { RegisterComponent } from './components/register/register.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserComponent } from './components/users/user/user.component';
import { VoteComponent } from './components/vote/vote.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '',pathMatch: 'full', component: HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user",component:UserComponent, canActivate:[LoginGuard]},
  {path:"user/update",component:UserUpdateComponent,canActivate:[LoginGuard]},
  {path:"meetingCreate",component:MeetingComponent,canActivate:[LoginGuard]},
  {path:"meetingDto/meetingcreate/vote/:meetingId",component:VoteComponent,canActivate:[LoginGuard]},
  {path:"meetingDto",component:MeetingDtoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
