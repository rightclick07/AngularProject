import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessSongDialogComponent } from './sucess-song-dialog.component';

describe('SucessSongDialogComponent', () => {
  let component: SucessSongDialogComponent;
  let fixture: ComponentFixture<SucessSongDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessSongDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessSongDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
