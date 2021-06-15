import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoditTextEditorComponent } from './jodit-text-editor.component';

describe('JoditTextEditorComponent', () => {
  let component: JoditTextEditorComponent;
  let fixture: ComponentFixture<JoditTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoditTextEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoditTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
