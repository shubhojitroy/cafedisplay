import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicyDialogComponent } from './privacypolicy-dialog.component';

describe('PrivacypolicyDialogComponent', () => {
  let component: PrivacypolicyDialogComponent;
  let fixture: ComponentFixture<PrivacypolicyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacypolicyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypolicyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
