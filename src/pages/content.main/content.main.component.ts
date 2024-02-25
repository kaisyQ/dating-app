import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-content-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'content.main.component.html',
  styleUrls: ['content.main.styles.scss'],
})

export class ContentMainComponent{}
