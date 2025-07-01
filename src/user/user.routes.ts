import { Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";

export const userRoutes: Routes = [
    { path: '', component: UserComponent },
    { path: 'profile', component: UserProfileComponent }
]