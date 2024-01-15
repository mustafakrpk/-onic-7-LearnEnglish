import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlkokulSeviyesiPage } from './ilkokul-seviyesi.page';

describe('IlkokulSeviyesiPage', () => {
  let component: IlkokulSeviyesiPage;
  let fixture: ComponentFixture<IlkokulSeviyesiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlkokulSeviyesiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
