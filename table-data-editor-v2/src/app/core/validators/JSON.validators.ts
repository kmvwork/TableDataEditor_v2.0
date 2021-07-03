import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

export function JSONValidators(control: FormControl): null | { [s: string]: boolean } {
  if (typeof control.value !== "string") {
    return {'JSONParseError': true}
  }
  try {
    let result = JSON.parse(control.value)
    return null
  } catch (error) {
    return {'JSONParseError': true}
  }
}
