import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppButton } from '../../shared/components/button/button.component';

describe('HomeComponent', () => {

    var component: HomeComponent;
    var fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [HomeComponent],
          imports: [AppButton]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    

    it('should render correctly', () => {
        expect(component).toBeTruthy();
    });
  
    it('should have a title "Sign up to continue"', () => {
        const titleElement: HTMLElement = fixture.nativeElement.querySelector('.home-form__title');
        expect(titleElement.textContent).toContain('Sign up to continue');
    });


    it('should have a button with text "Continue with phone number"', () => {
        const buttonElement: HTMLElement = fixture.nativeElement.querySelector('app-button');
        expect(buttonElement.textContent).toContain('Continue with phone number');
    });
});