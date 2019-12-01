import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptlistComponent } from './receptlist.component';

describe('ReceptlistComponent', () => {
  let component: ReceptlistComponent;
  let fixture: ComponentFixture<ReceptlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
