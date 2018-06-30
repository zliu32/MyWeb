import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScoretableComponent } from './scoretable/scoretable.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogComponent } from './blog/blog.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: "score",
        component: ScoretableComponent
    },
    {
        path: "blogs",
        component: BlogComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{

}