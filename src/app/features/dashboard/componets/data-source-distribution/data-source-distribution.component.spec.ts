import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceDistributionComponent } from './data-source-distribution.component';

describe('DataSourceDistributionComponent', () => {
  let component: DataSourceDistributionComponent;
  let fixture: ComponentFixture<DataSourceDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSourceDistributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSourceDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
