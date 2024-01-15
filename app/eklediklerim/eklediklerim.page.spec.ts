import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EklediklerimPage } from './eklediklerim.page';

describe('EklediklerimPage', () => {
  let component: EklediklerimPage;
  let fixture: ComponentFixture<EklediklerimPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EklediklerimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
