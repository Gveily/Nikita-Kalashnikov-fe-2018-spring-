import { AbstractControl } from "@angular/forms";

export default function (control: AbstractControl): Promise<any> {
    const nameRegEx = /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/;

    return new Promise((res) => {
      setTimeout(() => {
        if (!nameRegEx.test(control.value)) {
          res({
            'invalidName': true
          });
        } else {
          res(null);
        }
      }, 2000);
    });
}