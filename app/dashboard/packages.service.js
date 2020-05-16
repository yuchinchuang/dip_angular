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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
require("rxjs/add/operator/map");
let PackagesService = class PackagesService {
    constructor(http) {
        this.http = http;
        this.packagesUrl = `http://localhost:60001/api/Packages`;
        this.packByLocationUrl = `http://localhost:60001/api/GetPackLocation`;
        this.packFilterUrl = `http://localhost:60001/api/GetPackKeyword`;
    }
    getAllPackages() {
        return this.http.get(this.packagesUrl).map((response) => response.json());
    }
    searchLocation(searchL) {
        return this.http
            .get(`${this.packByLocationUrl}?=${searchL}`).map((response) => response.json());
    }
    filter(searchL, keyword) {
        return this.http.get(`${this.packFilterUrl}?location=${searchL}&keyword=${keyword}`).map((response) => response.json());
    }
};
PackagesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PackagesService);
exports.PackagesService = PackagesService;
//# sourceMappingURL=packages.service.js.map