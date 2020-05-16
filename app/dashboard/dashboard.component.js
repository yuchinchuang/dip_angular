"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const packages_service_1 = require("./packages.service");
let Dashboard = class Dashboard {
    constructor(_packagesService) {
        this._packagesService = _packagesService;
        this.searchL = "";
        this.keyword = "";
    }
    ngOnInit() {
        this._packagesService.getAllPackages().subscribe(result => { this.packArr = result; });
    }
    DisplayAll() {
        this._packagesService.getAllPackages().subscribe(result => { this.packArr = result; });
    }
    Search() {
        this._packagesService.searchLocation(this.searchL).subscribe(result => { this.packArr = result; });
    }
    Filter() {
        this._packagesService.filter(this.searchL, this.keyword).subscribe(result => { this.packArr = result; });
    }
};
Dashboard = __decorate([
    core_1.Component({
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
        providers: [packages_service_1.PackagesService]
    }),
    __metadata("design:paramtypes", [packages_service_1.PackagesService])
], Dashboard);
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map