import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './profile/login/login.component';
import { SignUpComponent } from './profile/sign-up/sign-up.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { SnippetEditorComponent } from './snippets/snippet-editor/snippet-editor.component';
import { SnippetViewerComponent } from './snippets/snippet-viewer/snippet-viewer.component';
import { PublicSnippetsComponent } from './snippets/public-snippets/public-snippets.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'snippet/editor', component: SnippetEditorComponent },
    { path: 'snippets', component: PublicSnippetsComponent },
    { path: 'snippet/:id', component: SnippetViewerComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
