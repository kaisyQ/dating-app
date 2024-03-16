import { TestBed } from '@angular/core/testing';
import {ContentComponent} from "./content.component";
import { provideRouter } from '@angular/router';

describe('ContentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentComponent],
      providers: [
        provideRouter([]),
    ]
    }).compileComponents();
  });

  it('should create the main content component', () => {
    const fixture = TestBed.createComponent(ContentComponent);
    const mainContent = fixture.componentInstance;
    expect(mainContent).toBeTruthy();
  });

});
