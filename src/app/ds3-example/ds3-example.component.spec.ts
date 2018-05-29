import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ds3ExampleComponent } from './ds3-example.component';

describe('Ds3ExampleComponent', () => {
  let component: Ds3ExampleComponent;
  let fixture: ComponentFixture<Ds3ExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ds3ExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ds3ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
