import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'rating-picker-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './rating-picker-page.component.html',
	styleUrls: ['../../../../assets/scss/common-page.scss', './rating-picker-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerPageComponent {}
