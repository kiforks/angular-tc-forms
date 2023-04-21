import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserInfo } from '../../../core/interfaces/user-info.interface';
import { BanWordsDirective } from '../validators/ban-words/ban-words.directive';
import { PasswordShouldMatchDirective } from '../validators/password-should-match/password-should-match.directive';
import { UniqueNicknameDirective } from '../validators/unique-nickname/unique-nickname.directive';

@Component({
	selector: 'template-forms-page',
	standalone: true,
	imports: [CommonModule, FormsModule, BanWordsDirective, PasswordShouldMatchDirective, UniqueNicknameDirective],
	templateUrl: './template-forms-page.component.html',
	styleUrls: [
		'../../../../assets/scss/common-page.scss',
		'../../../../assets/scss/common-form.scss',
		'./template-forms-page.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFormsPageComponent implements AfterViewInit {
	@ViewChild(NgForm) public readonly form!: NgForm;

	private initialFormValues: unknown;

	public userInfo: UserInfo = {
		firstName: 'Kostia',
		lastName: 'Kifor',
		nickname: 'ks.kifor',
		email: 'ks.kifor@gmail.com',
		yearOfBirth: 1996,
		passport: 'AB123456',
		fullAdress: 'Somestreet 4',
		city: 'Ivano-Frankivsk',
		postCode: 123456,
		password: '',
		confirmPassword: '',
	};

	public get isAdult() {
		const currentYear = new Date().getFullYear();

		return currentYear - this.userInfo.yearOfBirth >= 18;
	}

	public get years() {
		const now = new Date().getUTCFullYear();

		return Array(now - (now - 40))
			.fill('')
			.map((_, idx) => now - idx);
	}

	public ngAfterViewInit(): void {
		queueMicrotask(() => (this.initialFormValues = this.form.value));
	}

	public onSubmitForm(e: SubmitEvent) {
		console.log('The form has been submitted', this.form.value);
		// Strategy 1 - Reset form values, validation statuses, making controls untouched, pristine, etc
		// form.resetForm();
		// Strategy 2 - Reset only control statuses but not values.
		this.form.resetForm(this.form.value);
		this.initialFormValues = this.form.value;
		console.log('The native submit event', e);
	}

	public onReset(e: Event) {
		e.preventDefault();

		this.form.resetForm(this.initialFormValues);
	}
}
