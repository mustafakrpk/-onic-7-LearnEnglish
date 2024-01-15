import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaslangicPage } from './baslangic.page';

describe('BaslangicPage', () => {
  let component: BaslangicPage;
  let fixture: ComponentFixture<BaslangicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaslangicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
