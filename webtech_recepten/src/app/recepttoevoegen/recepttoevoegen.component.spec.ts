import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepttoevoegenComponent } from './recepttoevoegen.component';

describe('RecepttoevoegenComponent', () => {
  let component: RecepttoevoegenComponent;
  let fixture: ComponentFixture<RecepttoevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepttoevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepttoevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
