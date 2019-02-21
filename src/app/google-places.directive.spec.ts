import { GooglePlacesDirective } from './google-places.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input type="text" google-place>'
})
class TestGooglePlaceComponent {

}
describe('GooglePlacesDirective', () => {
  let component: TestGooglePlaceComponent;
  let fixture: ComponentFixture<TestGooglePlaceComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglePlacesDirective, TestGooglePlaceComponent]
    });

    fixture = TestBed.createComponent(TestGooglePlaceComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'))
  })
  
  it('should create the directive', () => {
    const directive = new GooglePlacesDirective(inputEl);
    expect(directive).toBeTruthy();
  });

  it('should load autocomplete results', () => {
    const directive = new GooglePlacesDirective(inputEl);
    //Type words into the input box
    inputEl.nativeElement.value = 'Paris';
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    //The autocomplete results should show (pac-container is the classname
    // of autocomplete results div)
    let resultsContainer = fixture.debugElement.query(By.css('.pac-container'));
    //Check if a valid response is received.
    expect(resultsContainer).toBeTruthy();
  })
});
