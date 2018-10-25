import {AbstractControl} from '@angular/forms';

export default function (control: AbstractControl) {
  const minAgeValue = 18;
  const maxAgeValue = 65;

  if (control.value) {
    const fieldValue = Number(control.value);

    if (!isNaN(fieldValue)) {
      if (fieldValue < minAgeValue || fieldValue > maxAgeValue  || Number.isInteger(fieldValue) === false) {
        return {
          'invalidAge': true
        };
      }
    } else {
      return {
        'incorrectAgeValue': true
      };
    }
  }
  return null;
  
}
