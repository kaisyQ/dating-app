import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'content.component.html',
  styleUrls: ['content.styles.scss'],
})

export class ContentComponent {}
