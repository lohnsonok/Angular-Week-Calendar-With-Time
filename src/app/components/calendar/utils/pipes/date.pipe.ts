import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dayDatePipe'
})
export class DayDatePipe extends
    DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, "EEEE");
    }
}

@Pipe({
    name: 'monthDatePipe'
})
export class MonthDatePipe extends
    DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, "dd/MM");
    }
}