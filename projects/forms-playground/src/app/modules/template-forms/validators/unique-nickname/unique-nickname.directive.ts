import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { catchError, finalize, map, Observable, of } from 'rxjs';

@Directive({
	selector: '[uniqueNickname]',
	standalone: true,
	providers: [
		{
			provide: NG_ASYNC_VALIDATORS,
			multi: true,
			useExisting: UniqueNicknameDirective,
		},
	],
})
export class UniqueNicknameDirective implements AsyncValidator {
	constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef) {}

	public validate(
		control: AbstractControl<string>
	): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users?username=${control.value}`).pipe(
			map(users => {
				return users.length === 0 ? null : { uniqueNickname: { isTaken: true } };
			}),
			catchError(() => of({ uniqueNickname: { unknownError: true } })),
			finalize(() => this.cdr.markForCheck())
		);
	}
}
