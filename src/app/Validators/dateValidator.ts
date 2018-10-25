import {AbstractControl} from '@angular/forms';
import * as moment from 'moment';

export default (control: AbstractControl): { [key: string]: any } | null => {
  if (control.value) {
    const fieldValue = control.value;
    const dateFormats = (
      moment(fieldValue, 'DD MMMM YYYY', true).isValid() ||
      moment(fieldValue, 'YYYY/MM/DD', true).isValid() ||
      moment(fieldValue, 'DD-MMM-YY', true).isValid()
    );

    if (moment(fieldValue).isValid() && moment(fieldValue)) {
      if (!dateFormats) {
        return {
          'incorrectDateFormat': true
        };
      }
      return null;
    }
    return {
      'incorrectDateValue': true
    };
  }
};