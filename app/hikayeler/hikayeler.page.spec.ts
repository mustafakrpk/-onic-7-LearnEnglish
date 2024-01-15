import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HikayelerPage } from './hikayeler.page';

describe('HikayelerPage', () => {
  let component: HikayelerPage;
  let fixture: ComponentFixture<HikayelerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HikayelerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
