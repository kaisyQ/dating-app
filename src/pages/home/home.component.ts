import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AppButton} from "../../shared/components/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppButton, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.style.scss'],
})
export class HomeComponent {}
