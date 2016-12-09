/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DragItemComponent } from './drag-item.component';

describe('DragItemComponent', () => {
  let component: DragItemComponent;
  let fixture: ComponentFixture<DragItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
