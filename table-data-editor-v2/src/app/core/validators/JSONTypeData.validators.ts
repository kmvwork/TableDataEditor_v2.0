import {FormControl} from "@angular/forms";

export function JSONTypeDataValidators(control: FormControl): null | { [s: string]: boolean } {
  let typeCheck = false

  try {
    let result = JSON.parse(control.value)

    if (result) {
      onTypeCheck(result)
    }

    function onTypeCheck(result: Array<object>): any {
      typeCheck = result.every((item: object) => {
        let keys = Object.keys(item)
        let valuesKeys = Object.values(item)
        return typeof item === 'object' && item !== null && keys.every(item => typeof item === 'string') && valuesKeys.every(item => typeof item === 'string')
      })
    }

    return typeCheck ? null : {'JSONTypeData': true}
  } catch (e) {
    return {'JSONTypeData': true}
  }
}
