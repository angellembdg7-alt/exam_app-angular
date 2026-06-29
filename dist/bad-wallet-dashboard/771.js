"use strict";
(self["webpackChunkbad_wallet_dashboard"] = self["webpackChunkbad_wallet_dashboard"] || []).push([[771],{

/***/ 4771:
/*!***********************************************************!*\
  !*** ./src/app/features/bills/bills-history.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillsHistoryComponent: () => (/* binding */ BillsHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _core_services_billing_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/billing-api.service */ 3786);
/* harmony import */ var _shared_pipes_xof_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/xof.pipe */ 1263);





function BillsHistoryComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BillsHistoryComponent_ng_container_4_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "xof");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r4.fournisseur);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](f_r4.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, f_r4.montant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 6, f_r4.dateEcheance, "dd/MM/yyyy"));
  }
}
function BillsHistoryComponent_ng_container_4_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Aucun paiement.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BillsHistoryComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 4)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Fournisseur");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Montant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BillsHistoryComponent_ng_container_4_tr_13_Template, 11, 9, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, BillsHistoryComponent_ng_container_4_tr_14_Template, 3, 0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.history());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.history().length === 0);
  }
}
let BillsHistoryComponent = /*#__PURE__*/(() => {
  class BillsHistoryComponent {
    constructor() {
      this.billingApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_core_services_billing_api_service__WEBPACK_IMPORTED_MODULE_0__.BillingApiService);
      this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false);
      this.history = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([]);
    }
    ngOnInit() {
      const phone = localStorage.getItem('phone') ?? '';
      this.loading.set(true);
      this.billingApi.getHistory(phone).subscribe({
        next: fs => this.history.set(fs),
        complete: () => this.loading.set(false)
      });
    }
    static {
      this.ɵfac = function BillsHistoryComponent_Factory(t) {
        return new (t || BillsHistoryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: BillsHistoryComponent,
        selectors: [["app-bills-history"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 2,
        consts: [[1, "page"], ["class", "loading", 4, "ngIf"], [4, "ngIf"], [1, "loading"], [1, "bill-table"], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "empty"]],
        template: function BillsHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Historique des paiements");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BillsHistoryComponent_p_3_Template, 2, 0, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BillsHistoryComponent_ng_container_4_Template, 15, 2, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _shared_pipes_xof_pipe__WEBPACK_IMPORTED_MODULE_1__.XofPipe],
        styles: [".page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin-bottom:1rem; }\n.bill-table[_ngcontent-%COMP%] { width:100%; border-collapse:collapse; }\n.bill-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .bill-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding:.6rem .8rem; border-bottom:1px solid #eee; text-align:left; }\n.bill-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { background:#f8f9fa; font-size:.85rem; }\n.empty[_ngcontent-%COMP%], .loading[_ngcontent-%COMP%] { text-align:center; padding:2rem; color:#9ca3af; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxzLWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLGtCQUFrQixFQUFFO0FBQy9CLGNBQWMsVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQ3BELGlDQUFpQyxtQkFBbUIsRUFBRSw0QkFBNEIsRUFBRSxlQUFlLEVBQUU7QUFDckcsaUJBQWlCLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFO0FBQ3ZELG1CQUFtQixpQkFBaUIsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFIiwiZmlsZSI6ImJpbGxzLWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIGgxIHsgbWFyZ2luLWJvdHRvbToxcmVtOyB9XG4uYmlsbC10YWJsZSB7IHdpZHRoOjEwMCU7IGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgfVxuLmJpbGwtdGFibGUgdGgsIC5iaWxsLXRhYmxlIHRkIHsgcGFkZGluZzouNnJlbSAuOHJlbTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTsgdGV4dC1hbGlnbjpsZWZ0OyB9XG4uYmlsbC10YWJsZSB0aCB7IGJhY2tncm91bmQ6I2Y4ZjlmYTsgZm9udC1zaXplOi44NXJlbTsgfVxuLmVtcHR5LCAubG9hZGluZyB7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOjJyZW07IGNvbG9yOiM5Y2EzYWY7IH1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmlsbHMvYmlsbHMtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsa0JBQWtCLEVBQUU7QUFDL0IsY0FBYyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDcEQsaUNBQWlDLG1CQUFtQixFQUFFLDRCQUE0QixFQUFFLGVBQWUsRUFBRTtBQUNyRyxpQkFBaUIsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdkQsbUJBQW1CLGlCQUFpQixFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7O0FBRW5FLGc1QkFBZzVCIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UgaDEgeyBtYXJnaW4tYm90dG9tOjFyZW07IH1cbi5iaWxsLXRhYmxlIHsgd2lkdGg6MTAwJTsgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyB9XG4uYmlsbC10YWJsZSB0aCwgLmJpbGwtdGFibGUgdGQgeyBwYWRkaW5nOi42cmVtIC44cmVtOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlOyB0ZXh0LWFsaWduOmxlZnQ7IH1cbi5iaWxsLXRhYmxlIHRoIHsgYmFja2dyb3VuZDojZjhmOWZhOyBmb250LXNpemU6Ljg1cmVtOyB9XG4uZW1wdHksIC5sb2FkaW5nIHsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MnJlbTsgY29sb3I6IzljYTNhZjsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return BillsHistoryComponent;
})();


/***/ })

}]);
//# sourceMappingURL=771.js.map