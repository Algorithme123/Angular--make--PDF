import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGenerateurComponent } from './pdf-generateur.component';

describe('PdfGenerateurComponent', () => {
  let component: PdfGenerateurComponent;
  let fixture: ComponentFixture<PdfGenerateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfGenerateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfGenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
