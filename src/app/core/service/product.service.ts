import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/app.constants';
import { Observable, pipe, Subject } from 'rxjs';

import { LoadDataService } from './load-data.service';
import { Product } from 'src/app/models/card-product-map';
import { UtilitiesService } from './utilities.service';



@Injectable()
export class ProductService {
    products:Array<Product>;
    private refresDataroduct = new Subject<Array<Product>>();
    public refresDataroduct$ = this.refresDataroduct.asObservable();


    constructor( 
        private configuration: Configuration ,
        private loadDataService: LoadDataService,
        private utilitiesService :UtilitiesService) {
        }

        getProducts(flagAllBanks: boolean):void{     
                    this.products = flagAllBanks?
                    Object.values(this.utilitiesService.GroupByProductAllProduct(
                    Object.values(this.loadDataService.getProductList()),
                    this.configuration.getProductFilter()))
                    : Object.values(this.utilitiesService.GroupByProduct(this.loadDataService.productList[this.configuration.DefaultProduct],this.configuration.ProductTypeFilter));
                    this.refresDataroduct.next(this.products);
       }







    
}