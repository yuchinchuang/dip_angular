import { Component, OnInit } from '@angular/core';
import { PackagesService } from './packages.service';
import { Package } from './package';


@Component({
    selector: 'dashboard',
    template: `
        <style>
            table, tr, th, td{
                border:1px solid black;
                border-collapse:collapse;
            }
        </style>
        <h1>Packages</h1>
        <button (click)="DisplayAll()">Display All Packages</button>
        <p>Location: <input #location [(ngModel)]="searchL"><button (click)="Search()">Search</button></p>
        <p>Keyword: <input [(ngModel)]="keyword"><button (click)="Filter()">Filter</button></p>
        
        <table *ngIf="packArr">
            <tr>
                <th>Package Name</th>
                <th>Location</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
            <tr *ngFor = "let p of packArr">
                <td>{{p.name}}</td>
                <td>{{p.location}}</td>
                <td>{{p.price}}</td>
                <td>{{p.description}}</td>
            </tr>
        </table>
    `,
    providers: [PackagesService]
})

export class Dashboard implements OnInit {
    packArr: Package[];

    searchL: string = "";

    constructor(private _packagesService: PackagesService) { }

    ngOnInit() {
        this._packagesService.getAllPackages().subscribe(result => { this.packArr = result });
    }

    DisplayAll(){
        this._packagesService.getAllPackages().subscribe(result => { this.packArr = result });
    }

    Search() {
        this._packagesService.searchLocation(this.searchL).subscribe(result => { this.packArr = result });
    }

    keyword: string = "";
    Filter() {
        this._packagesService.filter(this.searchL, this.keyword).subscribe(result => { this.packArr = result });
    }
}