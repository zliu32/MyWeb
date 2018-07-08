import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuletableComponent } from './ruletable.component';

describe('RuletableComponent', () => {
  let component: RuletableComponent;
  let fixture: ComponentFixture<RuletableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuletableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
