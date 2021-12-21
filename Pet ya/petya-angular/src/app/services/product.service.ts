import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
 conta=0;
 lastdui;

 j = 0;
productList2: Product[];
  // Traer los datos de firebase
  productList: AngularFireList<any>;

  
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  
  getProducts() { 
    return this.productList = this.firebase.list('products');
  }


  insertProduct(product: Product) {

    let vst;
    let dat;
    let conta=0;
    
      this.firebase.database.ref("products").orderByChild
     ("dui").equalTo(product.dui).on("child_added", function(snapshotChanges) {
     
      dat = snapshotChanges.child("vistas").val();
        if(dat != null){
          
          conta +=1;
        }    
    });
    
console.log(conta);
     
   
    if(conta == 0){
      let discount= 0;
      let tamount = product.amount;
      product.vistas = 1;
      this.productList.push({
        name: product.name,
        dui: product.dui,
        vehicle: product.vehicle,
        amount: product.amount,
        discount: discount,
        tamount: tamount,
        vistas: product.vistas
        
      });
    }else if(conta == 2){
      
      let discount= 0.05;
      let tamount = (product.amount-product.amount*0.05);
      product.vistas= product.vistas+1;
      this.productList.push({
        name: product.name,
        dui: product.dui,
        vehicle: product.vehicle,
        amount: product.amount,
        discount: discount,
        tamount: tamount,
        vistas: conta
      });
    }else if(conta >5){
     let discount = 0.08;
     let tamount = (product.amount-product.amount*0.08);
     product.vistas= product.vistas+1;
      this.productList.push({
      name: product.name,
      dui: product.dui,
      vehicle: product.vehicle,
      amount: product.amount,
      discount: discount,
      tamount: tamount,
      vistas: conta
    });
    }else if(conta != 0 || conta >= 1  || conta <=5 ){
      let discount = 0;
      let tamount = product.amount;
      product.vistas = product.vistas+1;
      this.productList.push({
        name: product.name,
        dui: product.dui,
        vehicle: product.vehicle,
        amount: product.amount,
        discount: discount,
        tamount: tamount,
        vistas: conta
      });
      console.log(vst+1);
    }
    
  
  }

  
  updateProduct(product: Product) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.productList.update(product.$key, {
      name: product.name,
      dui: product.dui,
      vehicle: product.vehicle,
      amount: product.amount
      
    });
  }

  // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteProduct($key: string) {
    this.productList.remove($key);
  }

}
