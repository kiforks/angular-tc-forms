import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'custom-select-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './custom-select-page.component.html',
	styleUrls: ['../../../../assets/scss/common-page.scss', './custom-select-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectPageComponent {}
