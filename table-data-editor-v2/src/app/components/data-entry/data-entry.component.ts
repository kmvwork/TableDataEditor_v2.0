import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {JSONValidators} from "../../core/validators/JSON.validators";
import {JSONTypeDataValidators} from "../../core/validators/JSONTypeData.validators";
import {JSONSimilarValidators} from "../../core/validators/JSONSimilar.validators";

@Component({
  selector: 'app-data-entry',
  template: `
    <div class="container">
      <form class="m-2" [formGroup]="entryDataForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="inputData">Введите Ваши Данные:</label>
          <textarea formControlName="inputField" class="form-control" id="inputData" rows="3"></textarea>
        </div>
        <div *ngIf="inputField?.invalid && (inputField?.dirty || inputField?.touched)" class="error">
          <div class="alert alert-danger mt-2" *ngIf="inputField?.errors?.required">
            Пожалуйста, введите ваши данные.
          </div>
          <div class="alert alert-danger mt-2" *ngIf="inputField?.errors?.JSONSimilar">
            Значения ваших ключей в первом объекте должны повторяться в последующих. Пожалуйста, проверьте ваши
            значения.
          </div>
          <div class="alert alert-danger mt-2" *ngIf="inputField?.errors?.JSONTypeData">
            Пожалуйста, введите данные в формате строки заключенной в двойные кавычки " " .
          </div>
        </div>
        <button class="btn btn-success btn-lg btn-block mt-4" type="submit" [disabled]="entryDataForm.invalid">
          Продолжить
        </button>
      </form>
    </div>
  `
})


export class DataEntryComponent implements OnInit {
  entryDataForm = this.fb.group({
    inputField: ['', [Validators.required, JSONValidators, JSONTypeDataValidators, JSONSimilarValidators]]
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  get inputField() {
    return this.entryDataForm.get('inputField')
  }

  onSubmit() {
    console.log(this.entryDataForm)
  }
}
