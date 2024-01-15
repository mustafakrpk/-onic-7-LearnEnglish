import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HikayeModalPage } from './hikaye-modal.page';

describe('HikayeModalPage', () => {
  let component: HikayeModalPage;
  let fixture: ComponentFixture<HikayeModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HikayeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
