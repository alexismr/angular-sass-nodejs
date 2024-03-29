import { Injectable } from '@angular/core';
import { Configuration } from '../../app.constants';

@Injectable()
export class UtilitiesService {
    constructor(private configuration:Configuration) { 
    
    }
    
   GroupByProduct(arr, criteria)
    {   
        return arr.reduce((obj, item)=> { 
           // item.carcredit = 
            var key = item.accountInformation[criteria];
           
            item.cardcredit =  this.configuration.isCreditCar(key)? true:false;
            
         
            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            // Push the value to the object
            obj[key].push(item);
            return obj;  
        },{});
    }

    GroupByProductAllProduct(arr, criteria)
    {   
        let obj = {};
        
         Object.values(arr).map(item =>{
         Object.values(item).forEach(element => {
                var key = element.accountInformation[criteria];
                
                element.cardcredit =  this.configuration.isCreditCar(key)? true:false;

                if (!obj.hasOwnProperty(key)) {
                    obj[key] = [];
                }
                // Push the value to the object
                obj[key].push(element); 
              });
        });
        return obj;
    }

}