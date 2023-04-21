import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'reactive-forms-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './reactive-forms-page.component.html',
	styleUrls: ['../../../../assets/scss/common-page.scss', '../../../../assets/scss/common-form.scss', './reactive-forms-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormsPageComponent {
	public get years() {
		const now = new Date().getUTCFullYear();
		return Array(now - (now - 40))
			.fill('')
			.map((_, idx) => now - idx);
	}
}
