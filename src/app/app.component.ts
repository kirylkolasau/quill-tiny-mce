import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	value/*  = "tinymce test" */;

	getInitConfig() {
		return {
			height: 500,
			placeholder: "OLOL",
			menubar: false,
			toolbar: 'bold italic underline | formatselect',
			toolbar_groups: {
				formatselect:
				{
					icon: 'line-height',
					tooltip: 'formatselect',
					items: 'h1 h2 h3 h4 h5 h6'
				}
			}
		};
	}

	a($event) {
		console.log($event)
	}
}
