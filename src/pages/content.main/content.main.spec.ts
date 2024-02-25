import { TestBed } from '@angular/core/testing';
import { ContentMainComponent} from "./content.main.component";

describe('ContentMainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMainComponent],
    }).compileComponents();
  });

  it('should create the main content', () => {
    const fixture = TestBed.createComponent(ContentMainComponent);
    const mainContent = fixture.componentInstance;
    expect(mainContent).toBeTruthy();
  });

});
