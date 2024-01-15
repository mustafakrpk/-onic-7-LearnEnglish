import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevamOkuPage } from './devam-oku.page';

describe('DevamOkuPage', () => {
  let component: DevamOkuPage;
  let fixture: ComponentFixture<DevamOkuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DevamOkuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
