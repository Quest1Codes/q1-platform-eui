import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSkeltonComponent } from './loading-skelton.component';

describe('LoadingSkeltonComponent', () => {
  let component: LoadingSkeltonComponent;
  let fixture: ComponentFixture<LoadingSkeltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSkeltonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSkeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
