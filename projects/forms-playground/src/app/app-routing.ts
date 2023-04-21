import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Template-Driven Forms Playground',
		loadComponent: () =>
			import('./modules/template-forms/pages/template-forms-page.component').then(
				m => m.TemplateFormsPageComponent
			),
	},
	{
		path: 'reactive-forms',
		title: 'Reactive Forms Playground',
		loadComponent: () =>
			import('./modules/reactive-forms/pages/reactive-forms-page.component').then(
				m => m.ReactiveFormsPageComponent
			),
	},
	{
		path: 'custom-rating-picker',
		title: 'Custom Rating Picker Playground',
		loadComponent: () =>
			import('./modules/custom-rating-picker/pages/rating-picker-page.component').then(
				m => m.RatingPickerPageComponent
			),
	},
	{
		path: 'custom-select',
		title: 'Custom Select Component Playground (Advanced)',
		loadComponent: () =>
			import('./modules/custom-select/pages/custom-select-page.component').then(
				m => m.CustomSelectPageComponent
			),
	},
	{
		path: 'dynamic-forms',
		title: 'Dynamic forms Playground',
		loadComponent: () =>
			import('./modules/dynamic-forms/pages/dynamic-forms-page.component').then(
				m => m.DynamicFormsPageComponent
			),
	},
];
