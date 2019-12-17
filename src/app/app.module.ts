import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
// import { LogoutComponent } from './logout/logout.component';
import {CustomerComponent} from './customer/customer.component';
import { AgentComponent } from './agent/agent.component';
import { AgentregistrationComponent } from './agentregistration/agentregistration.component';
import {AgGridModule} from "@ag-grid-community/angular";
import { HttpClientModule } from '@angular/common/http';
/*import { NewregistrationComponent } from './newregistration/newregistration.component';*/
/*import { ReactiveFormsModule } from '@angular/forms';*/
import { AgentserviceService } from './agent/agentservice.service';
import { CustomerserviceService } from './customer/customerservice.service';
import { AgentregistrationserviceService } from './agentregistration/agentregistrationservice.service';
import { LoginserviceService } from './login/loginservice.service';
import { AdminupdatecomponentComponent } from './adminupdatecomponent/adminupdatecomponent.component';
import { AdminupdateserviceService } from './adminupdatecomponent/adminupdateservice.service';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    // LogoutComponent,
    CustomerComponent,
    AgentComponent,
    AgentregistrationComponent,
    AdminupdatecomponentComponent,
    MainpageComponent
  
    

   // NewregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      HttpClientModule,

       //ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
