import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSongDialogComponent } from './error-song-dialog.component';

describe('ErrorSongDialogComponent', () => {
  let component: ErrorSongDialogComponent;
  let fixture: ComponentFixture<ErrorSongDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSongDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSongDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
