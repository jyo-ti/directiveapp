
import {PipeTransform,Pipe}  from '@angular/core'
@Pipe({
    name:'cutstringpipe'
})
export class custompipe implements PipeTransform{
    transform(value: any, limit?: any) {
        if (value.length > limit) {
            return value.substr(0, limit);
        }
        return value;
    }
}