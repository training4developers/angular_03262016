import { Component } from "angular2/core";

@Component({
	selector: "main",
	template: `
		<h1>List of Colors</h1>
		<ul><li *ngFor='#color of colors'>{{color}}</li></ul>
		<input [(ngModel)]="newColor"><button (click)="addColor(newColor)">Add Color</button>`
})
export class AppComponent {

	newColor = "";
	colors = ["red","white","blue"];

	addColor(newColor) {
		this.colors.push(newColor);
		this.newColor = "";
	}


}
