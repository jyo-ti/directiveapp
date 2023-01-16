import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterpi',
    pure:false
})

export class filterpipe implements PipeTransform{
transform(value:any,search:any,designation:any) {
    if (search && search.length > 0) {
        const vv=value.filter((x: any) => x.name.toLowerCase().includes(search.toLowerCase()))
        return vv;
    }
    if(designation && designation.length>0){
const vv=value.filter((x:any)=>x.designation.includes(designation))
return vv;
    }
 return value;
}
}