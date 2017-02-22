import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloAngular2 } from './helloangular2.component';

describe('HelloAngular2 Component', () => {

  let comp:    HelloAngular2;
  let fixture: ComponentFixture<HelloAngular2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloAngular2 ], // declare the test component
    });

    fixture = TestBed.createComponent(HelloAngular2);

    comp = fixture.componentInstance; // HelloAngular2 test instance

  });

  it('Message dipslaying before click', () => {
    fixture.detectChanges();
    expect(comp.message).toBe('Click Me');
  });

  it('Message dipslaying after click', () => {
    fixture.detectChanges();
    comp.clickMe();
    expect(comp.message).toBe('Hello Angular 2 components');
  });

});
