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
var core_1 = require("@angular/core");
var user_1 = require("../_models/user");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var EditComponent = (function () {
    function EditComponent(userService, router, route, location, alertService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.alertService = alertService;
        this.model = {};
        this.user = new user_1.User();
        this.loading = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getById(+params['id']); })
            .subscribe(function (user) { return _this.user = user; });
    };
    EditComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditComponent.prototype.salvar = function () {
        var _this = this;
        this.loading = true;
        this.userService.update(this.user)
            .subscribe(function (data) {
            _this.alertService.success('Atualizado  realizado com Sucesso', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'edit.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        router_1.Router,
        router_1.ActivatedRoute,
        common_1.Location,
        index_1.AlertService])
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map