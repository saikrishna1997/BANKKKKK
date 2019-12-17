import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {customer} from './customer';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { HttpClient } from '@angular/common/http';
import { CustomerserviceService } from './customerservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 title = 'grid-example-app';
  custArray: Array<customer> = new Array();
  getData:any[];
  private gridApi;
  private gridColumnApi;
  //private columnDefs;
  private rowData;
  public tempId = 0;
  public account_no=0;
  public btnVal = "Submit";
  


  model = new customer(0,' ',' ',0,' ',' ',0,0,' ',' ',0,'');

  columnDefs = [
        {  headerName: "account_no",field: "account_no",sortable:true,filter:true },
        {  headerName: "name",field: "name",sortable:true,filter:true },
        {  headerName: "DOB",field: "dob", sortable:true,filter:true  },
        {  headerName: "phone_no",field: "phone_no",sortable:true,filter:true },
        {  headerName: "username",field: "username",sortable:true,filter:true },
        {  headerName: "password",field: "password",sortable:true,filter:true },
        {  headerName: "balance",field: "balance",sortable:true,filter:true },
        {  headerName: "Branch_id",field: "branch_id",sortable:true,filter:true },
        {  headerName: "loan_id",field: "loan_id",sortable:true,filter:true },
        {  headerName: "type_id",field: "type_id",sortable:true,filter:true },
        {  headerName: "aadhar_no",field: "aadhar_no",sortable:true,filter:true },
        {  headerName: "pan_no",field: "pan_no",sortable:true,filter:true },
          
       ];
  


    constructor(private router:Router,private _httpService:CustomerserviceService,private http: HttpClient) {}
       ngOnInit() {
                this.rowData = this.http.get('http://localhost:8082/Customer');

    }

    modules = AllCommunityModules;  

    onTestGet(){
      this._httpService.getUserDetails()
      .subscribe((res:any[])=>{
        console.log(res);
        this.getData=res;
      });
    }




}





    

   