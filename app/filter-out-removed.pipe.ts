import { Pipe, PipeTransform } from '@angular/core';
import { RecordItem, RecordTypeEnum } from './student';
@Pipe({
  name: 'filterOutRemoved',
  pure: false,
})
export class FilterOutRemovedPipe implements PipeTransform {
  transform(list: RecordItem[], args?: any): RecordItem[] {
    console.count('pipe');
    return list.filter((item) => item.recordType !== RecordTypeEnum.REMOVED);
  }
}
