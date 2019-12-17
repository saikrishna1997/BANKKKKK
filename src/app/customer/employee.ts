export class employee{
	public account_no:number;
	public name:string;
	public dob:string;
	public phno:number;
	public username:string;
	public password:string;
	public amount:number;
	public branch_id:number;
	public loan_id:string;
	public type_id:string;

constructor(account_no:number, name:string, dob:string, phno:number, username:string, password:string,amount:number, branch_id:number, loan_id:string, type_id:string)
{
	this.account_no=account_no;
		this.name=name;
	this.dob=dob;
	this.phno=phno;
	this.username=username;
	this.password=password;
	this.amount=amount;
	this.branch_id=branch_id;
	this.loan_id=loan_id;
	this.type_id=type_id;
	
}


}


