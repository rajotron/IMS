import { Component, OnInit ,Inject, ViewChild,ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import { ApisService } from '../services/api.service';
import {NgForm} from '@angular/forms';
import { NotifyService } from '../services/notify.service';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { MatSort} from '@angular/material/sort';
import {Sort} from '@angular/material/sort';
/*import {MatDialog, MatDialogConfig} from "@angular/material";
*/import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   @ViewChild(MatSort,{static: false}) sort: MatSort;

   displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef) { }

  username:any;


  ngOnInit() {
  	 this.username = localStorage.getItem('username');
  	 this.getShoppingCentreDetails();
  }

  getShoppingCentreDetails(){
  
   this._api.getShoppingCentreDetails().subscribe((res: any) => {
        //this.result=res;
         
        if (res.code == 'Success') {
        	console.log("Details --",res.data);
                    var columnsOfData=Object.keys(res.data[0]);
                    columnsOfData.push('Action');
                    columnsOfData.push('View Assets');

                    this.displayedColumns = columnsOfData;
                    console.log("Columns - ",this.displayedColumns)
          this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
        setTimeout(() => this.dataSource.sort = this.sort);
        this.dataSource.data = res.data;
        this.cdr.detectChanges();
          /*this.notify.success("Success - ",res.message);
          localStorage.setItem('username',res.data[0].username);
          localStorage.setItem('token',res.data[0].token);
          this.router.navigateByUrl('/dashboard');*/

          console.log("shopping centre details fetched successfully");
        }
        else{
        	console.log("failure in fetching shopping centre details ");
        }
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });
}

 getProperty = (obj, path) => (
  path.split('.').reduce((o, p) => o && o[p], obj)
)



 openDialog(row): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '100%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getShoppingCentreDetails();
    });
  }

  openDialog2(row): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog2, {
      width: '100%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getShoppingCentreDetails();
    });
  }
 /*edit(row){
   console.log("Row --- ",row);
 }*/

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog1.html',
})
export class DialogOverviewExampleDialog {

  constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  update(){
    console.log("Data -------------------- ",this.data);

this._api.updateShoppingCentreDetails(this.data).subscribe((res: any) => {
        //this.result=res;
         
        if (res.code == 'Success') {
          console.log("Details --",res.data);
          this.notify.success("Success - ",res.message);
                  

          console.log("shopping centre details fetched successfully");
        }
        else{
          this.notify.error("Failure - ",res.message);
          console.log("failure in fetching shopping centre details ");
        }

        this.dialogRef.close();
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });




  }

}


@Component({
  selector: 'dialog-overview-example-dialog2',
  templateUrl: 'dialog2.html',
})
export class DialogOverviewExampleDialog2 {

  @ViewChild(MatSort,{static: false}) sort: MatSort;

   displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

 ngOnInit(){
    this.fetchAssets();
  }


fetchAssets(){
  var obj={
    id:this.data.id
  }
 this._api.getAssets(obj).subscribe((res: any) => {
        //this.result=res;
         
        if (res.code == 'Success') {
          console.log("Details --",res.data);
                    var columnsOfData=Object.keys(res.data[0]);
                    columnsOfData.push('Action');
                    this.displayedColumns = columnsOfData;
                    console.log("Columns - ",this.displayedColumns)
          this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
        setTimeout(() => this.dataSource.sort = this.sort);
        this.dataSource.data = res.data;
        this.cdr.detectChanges();
          /*this.notify.success("Success - ",res.message);
          localStorage.setItem('username',res.data[0].username);
          localStorage.setItem('token',res.data[0].token);
          this.router.navigateByUrl('/dashboard');*/

          console.log("shopping centre details fetched successfully");
        }
        else{
          console.log("failure in fetching shopping centre details ");
        }
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });
}


  update(){
    console.log("Data -------------------- ",this.data);

this._api.updateShoppingCentreDetails(this.data).subscribe((res: any) => {
        //this.result=res;
         
        if (res.code == 'Success') {
          console.log("Details --",res.data);
          this.notify.success("Success - ",res.message);
                  

          console.log("shopping centre details fetched successfully");
        }
        else{
          this.notify.error("Failure - ",res.message);
          console.log("failure in fetching shopping centre details ");
        }

        this.dialogRef.close();
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });




  }

   getProperty = (obj, path) => (
  path.split('.').reduce((o, p) => o && o[p], obj)
)

    openDialog(row): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog3, {
      width: '100%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchAssets();
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog3',
  templateUrl: 'dialog3.html',
})
export class DialogOverviewExampleDialog3 {

  constructor(private dialog: MatDialog,private router: Router, private notify:NotifyService,private _api:ApisService,public cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
   status = [
    {value: 'ONLINE', viewValue: 'ONLINE'},
    {value: 'OFFLINE', viewValue: 'OFFLINE'}]


  update(){
    console.log("Data -------------------- ",this.data);

this._api.updateAssets(this.data).subscribe((res: any) => {
        //this.result=res;
         
        if (res.code == 'Success') {
          console.log("Details --",res.data);
          this.notify.success("Success - ",res.message);
                  

          console.log("shopping centre details fetched successfully");
        }
        else{
          this.notify.error("Failure - ",res.message);
          console.log("failure in fetching shopping centre details ");
        }

        this.dialogRef.close();
      },
          err => {
            
            if (err.status === 0 || err.status === 408) {
            }
            else{
            }

          });




  }

}