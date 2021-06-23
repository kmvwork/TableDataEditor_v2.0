import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUploadingComponent } from './data-uploading.component';

describe('DataUploadingComponent', () => {
  let component: DataUploadingComponent;
  let fixture: ComponentFixture<DataUploadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUploadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
