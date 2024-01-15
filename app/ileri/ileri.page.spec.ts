import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IleriPage } from './ileri.page';

describe('IleriPage', () => {
  let component: IleriPage;
  let fixture: ComponentFixture<IleriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
