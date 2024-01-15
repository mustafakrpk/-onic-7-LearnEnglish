import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrtaPage } from './orta.page';

describe('OrtaPage', () => {
  let component: OrtaPage;
  let fixture: ComponentFixture<OrtaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
