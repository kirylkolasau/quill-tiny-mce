import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorTextEditorComponent } from './ckeditor-text-editor.component';

describe('CkeditorTextEditorComponent', () => {
  let component: CkeditorTextEditorComponent;
  let fixture: ComponentFixture<CkeditorTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkeditorTextEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
