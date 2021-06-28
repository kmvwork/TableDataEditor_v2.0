import {AbstractControl, FormControl, ValidatorFn} from "@angular/forms";

export function JSONValidators(control: FormControl): null | { [s: string]: boolean } {

  let result = JSON.parse(control.value)

  if (typeof control.value !== "string") {
    return {'JSONParseError': true}
  }
  try {
    let typeCheck = false
    let compare = false
    let typeKeysString: boolean = false
    let typeValuesString: boolean = false
    let err: null | { [s: string]: boolean }
    let exit: any

    JSON.parse(control.value);


    function onTypeCheck(result: Array<object>): any {
      // let typeCheck: boolean

      typeCheck = result.every((item: object) => {
        let keys = Object.keys(item)
        let valuesKeys = Object.values(item)
        return typeof item === 'object' && item !== null && keys.every(item=> typeof item === 'string') && valuesKeys.every(item=> typeof item === 'string')
      })
      // return typeCheck
    }
    onTypeCheck(result)

    function onTypekeys (result:Array<object>) {
      // let compare: boolean
      // let typeKeysString: boolean
      // let typeValuesString: boolean
      let keyCompare:any = []

      result.forEach((item) => {
        if(keyCompare.length == 0) {
          keyCompare = Object.keys(item)
          console.log('compare', keyCompare)
          console.log('compare', keyCompare[0])
          console.log('len', keyCompare.length)
          console.log('item', Object.keys(item))
        } else  {
          let newItem = Object.keys(item)
          for (let i = 0; i < keyCompare.length; i++) {
            compare = keyCompare[i] == newItem[i]
          }
          let keys = Object.keys(item)
          let valuesKeys = Object.values(item)
          typeKeysString = keys.every(item=> typeof item === 'string')
          typeValuesString = valuesKeys.every(item=> typeof item === 'string')
        }
        console.log('itemK',Object.keys(item))
        // let keys = Object.keys(item)
        // let valuesKeys = Object.values(item)
        // typeKeysString = keys.every(item=> typeof item === 'string')
        // typeValuesString = valuesKeys.every(item=> typeof item === 'string')
      })
    }
    onTypekeys(result)

    if (Array.isArray(result) && typeCheck && compare && typeKeysString && typeValuesString) {
      console.log('PARSE', JSON.parse(control.value))
      console.log('PARSE', typeof JSON.parse(control.value))
      console.log('Array', Array.isArray(result))
      console.log('Object', typeof result === 'object')
      // return null
      exit = null
    }
    else {
      exit = {'JSONParseError': true}
      // return {'JSONParseError': true}
    }
    return exit

  } catch (error) {
    return {'JSONParseError': true}
  }
}

// [{"key1":"k1v1","key2":"k2v1","key3":"k3v1"},{"key1":"k1v2","key2":"k2v2","key3":"k3v2"}]
