import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ResumeDataComponent } from '../resume-data/resume-data.component';
import { GenderComponent } from '../gender/gender.component';
import { GeneralResultsComponent } from '../general-results/general-results.component';


@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [ MatDividerModule, ResumeDataComponent, GenderComponent, GeneralResultsComponent ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsPageComponent {

}
