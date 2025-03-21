import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryInterfaceComponent } from './query-interface.component';

describe('QueryInterfaceComponent', () => {
  let component: QueryInterfaceComponent;
  let fixture: ComponentFixture<QueryInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
