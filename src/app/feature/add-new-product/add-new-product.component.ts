import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  constructor(
              private router:Router,
              private http:HttpClient){}



  addProductForm:any=FormGroup;
  
  ngOnInit(): void {
    this.addProductForm = new FormGroup({
        'id': new FormControl(null, [Validators.required , Validators.pattern( /^[a-zA-Z0-9]+$/)]),
        'name':new FormControl(null,[Validators.required,Validators.maxLength(30)]),
        'category':new FormControl(null,[Validators.required]),
        'price':new FormControl(null,[Validators.required , Validators.pattern(/^[+-]?\d+(\.\d+)?$/)]),
        'serial_number':new FormControl(null,[Validators.required , Validators.pattern( /^[a-zA-Z0-9]+$/)]),
        'release_date': new FormControl(null, [Validators.required]),
        'Stock_units':new FormControl(null,[Validators.required , Validators.pattern( /^[0-9]+$/)]),
        'Description':new FormControl(null,[Validators.required,Validators.maxLength(150)])
    })
    this.futureDateDisabled();
  }
  
  get id(){
    return this.addProductForm.get('id')
  }
  get name(){
    return this.addProductForm.get('name')
  }
  get category(){
    return this.addProductForm.get('category')
  }
  get price(){
    return this.addProductForm.get('price')
  }
  get serial_number(){
    return this.addProductForm.get('serial_number')
  }
  get Stock_units()
  {
    return this.addProductForm.get('Stock_units') 
  }
  get Description()
  {
    return this.addProductForm.get('Description')
    
  }
  get release_date()
  {
    return this.addProductForm.get('release_date')
    
  }

    maxDate :any;
    futureDateDisabled(){
      var date :any = new Date();
      var today = date.getDate();
      var month = date.getMonth()+1;
      var year = date.getFullYear();

      this.maxDate = year + "-" + month  + "-" + today;
    }

  onSubmit(){
    console.log(this.addProductForm.value);
    
    this.http.post<any>('http://localhost:3000/Products',this.addProductForm.value)
    .subscribe(res=>{
      console.warn(res)
       alert("Product Details Added Successfully")
       this.addProductForm.reset();
       this.router.navigate(['ProductList'])   
    })   
  }

  

}