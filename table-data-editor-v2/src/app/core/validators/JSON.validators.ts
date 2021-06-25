import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

export function JSONValidators(control: FormControl):null | {[s:string]: boolean} {
  console.log('CONTROL', control.value)
  if (typeof control.value !=="string"){
    return {'JSONParseError': true}
  }
  try{
    JSON.parse(control.value);
    return null
  }
  catch (error){
    return {'JSONParseError': true}
  }
}

