import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3jsExampleComponent } from './d3js-example.component';

describe('D3jsExampleComponent', () => {
  let component: D3jsExampleComponent;
  let fixture: ComponentFixture<D3jsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3jsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3jsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
