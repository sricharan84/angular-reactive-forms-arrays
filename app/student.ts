import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
} from '@angular/forms';

export enum RecordTypeEnum {
  OLD = 'old',
  NEW = 'new',
  UPDATED = 'updated',
  REMOVED = 'removed',
}

export interface RecordItem {
  recordType: RecordTypeEnum;
  markRemoved: () => void;
}

export class Student extends FormGroup implements RecordItem {
  recordType: RecordTypeEnum;
  constructor(
    controls: { [key: string]: AbstractControl },
    recordType = RecordTypeEnum.OLD
  ) {
    super(controls);
    this.recordType = recordType;
  }

  markRemoved() {
    this.recordType = RecordTypeEnum.REMOVED;
  }
}

export class ControlWrapper {
  // controls: { [key: string]: AbstractControl };
  sName: FormControl;
  sAge: FormControl;
  sBranch: FormControl;
  constructor(name: string, age: number, branch: string) {
    (this.sName = new FormControl(name)),
      (this.sAge = new FormControl(name)),
      (this.sBranch = new FormControl(name));
  }
}
