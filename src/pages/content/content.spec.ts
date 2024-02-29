import { TestBed } from '@angular/core/testing';
import { ContentComponent} from "./content.component";

describe('ContentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentComponent],
    }).compileComponents();
  });

  it('should create the main content', () => {
    const fixture = TestBed.createComponent(ContentComponent);
    const mainContent = fixture.componentInstance;
    expect(mainContent).toBeTruthy();
  });

});
