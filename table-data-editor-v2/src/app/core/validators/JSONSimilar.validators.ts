import {FormControl} from "@angular/forms";

export function JSONSimilarValidators(control: FormControl): null | { [s: string]: boolean } {

  let compare: boolean = false
  let typeKeysString: boolean = false
  let typeValuesString: boolean = false
  let replayKey: boolean = false

  try {
    let result = JSON.parse(control.value)
    let resultString = control.value
    let len = Object.keys(result)
    let keys = Object.keys(result[0])

    function simil(keys: string[], len: string[]) {
      for (let i = 0; i < keys.length; i++) {
        let regexp = new RegExp(`"${keys[i]}":`, 'g')
        let checkArray = resultString.match(regexp)
        if (checkArray.length !== len.length) {
          return replayKey = false
        } else {
          replayKey = true
        }
      }
      return null
    }

    function onTypeKeys(result: Array<object>) {
      let keyCompare: any = []
      if (result.length >= 1) {
        simil(keys, len)
        if (replayKey) {
          result.forEach((item): any => {
            if (keyCompare.length == 0) {
              keyCompare = Object.keys(item)
            } else {
              let newItem = Object.keys(item)
              for (let i = 0; i < keyCompare.length; i++) {
                compare = keyCompare[i] == newItem[i]
                if (compare == false) {
                  return compare = false
                }
              }
              let keys = Object.keys(item)
              let valuesKeys = Object.values(item)
              typeKeysString = keys.every(item => typeof item === 'string')
              typeValuesString = valuesKeys.every(item => typeof item === 'string')
            }
          })
        }
        compare = true
        typeKeysString = true
        typeValuesString = true
      }
    }

    onTypeKeys(result)

    if (compare && typeKeysString && typeValuesString && replayKey) {
      return null
    }
    return {'JSONSimilar': true}
  } catch (e) {
    return {'JSONSimilar': true}
  }
}
