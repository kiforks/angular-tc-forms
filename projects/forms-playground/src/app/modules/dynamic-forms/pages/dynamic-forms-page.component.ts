import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'dynamic-forms-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dynamic-forms-page.component.html',
	styleUrls: ['../../../../assets/scss/common-page.scss', './dynamic-forms-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormsPageComponent {}
