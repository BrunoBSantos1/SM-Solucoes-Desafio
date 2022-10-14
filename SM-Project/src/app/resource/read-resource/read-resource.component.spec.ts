import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadResourceComponent } from './read-resource.component';

describe('ReadResourceComponent', () => {
  let component: ReadResourceComponent;
  let fixture: ComponentFixture<ReadResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
