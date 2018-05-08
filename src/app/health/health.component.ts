import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  healths = [
    `Mission Family Center`,
    `Instituto Familiar de la Raza, Inc. (IFR)`,
    `IFR - Si a La Vida`,
    `SENECA`,
    `HealthRight360`,
    `Alegre Home`,
    `SF Suicide Prevention`,
    `Native American Health Center`,
    `Healthy Hearts SF`,
    `UCSF Screening`,
    `Dignity Memorial Company`,
    `SFAF Dream Project`,
    `SFAF Latino Programs`,
    `On Lok`,
    `HSA CAL FRESH`,
    `La Casa de las Madres`,
    `Planned Parenthood`,
    `Healthier Living`,
    `El/Ella Translatinas`,
    `Bayview Hunters Point Clinic`,
    `Clinica Martin Baro`,
    `SF Fire Department`,
  ]
  constructor() {}

  ngOnInit() {}

}
