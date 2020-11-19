import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBlurFormatCurrencyComponent } from './ngx-blur-format-currency.component';

describe('NgxBlurFormatCurrencyComponent', () => {
  let component: NgxBlurFormatCurrencyComponent;
  let fixture: ComponentFixture<NgxBlurFormatCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBlurFormatCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBlurFormatCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
