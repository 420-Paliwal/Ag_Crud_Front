import { Routes } from '@angular/router';
import { MasterComponent } from './component/master/master.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ClientComponent } from './component/client/client.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'master',
        pathMatch:'full'
    },
    {
        path:'master',
        component:MasterComponent
    },
    {
        path:'employee',
        component:EmployeeComponent
    },
    {
        path:'client',
        component:ClientComponent
    },
    {
        path:'student',
        component:StudentComponent
    }
];
