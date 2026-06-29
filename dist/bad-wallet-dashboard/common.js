"use strict";
(self["webpackChunkbad_wallet_dashboard"] = self["webpackChunkbad_wallet_dashboard"] || []).push([[76],{

/***/ 3786:
/*!******************************************************!*\
  !*** ./src/app/core/services/billing-api.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingApiService: () => (/* binding */ BillingApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);



let BillingApiService = /*#__PURE__*/(() => {
  class BillingApiService {
    constructor() {
      this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
      this.base = 'http://localhost:8080/api/external/factures';
    }
    getCurrent(phone) {
      return this.http.get(`${this.base}/current/${phone}`);
    }
    getHistory(phone) {
      return this.http.get(`${this.base}/history/${phone}`);
    }
    static {
      this.ɵfac = function BillingApiService_Factory(t) {
        return new (t || BillingApiService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BillingApiService,
        factory: BillingApiService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return BillingApiService;
})();


/***/ }),

/***/ 95:
/*!********************************************!*\
  !*** ./src/app/shared/pipes/phone.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhonePipe: () => (/* binding */ PhonePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

let PhonePipe = /*#__PURE__*/(() => {
  class PhonePipe {
    transform(value) {
      if (!value) return '';
      const digits = value.replace(/\D/g, '').replace(/^221/, '');
      const match = digits.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/);
      return match ? `+221 ${match[1]} ${match[2]} ${match[3]} ${match[4]}` : value;
    }
    static {
      this.ɵfac = function PhonePipe_Factory(t) {
        return new (t || PhonePipe)();
      };
    }
    static {
      this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "phone",
        type: PhonePipe,
        pure: true,
        standalone: true
      });
    }
  }
  return PhonePipe;
})();


/***/ }),

/***/ 4171:
/*!*******************************************************!*\
  !*** ./src/app/shared/validators/phone.validators.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   differentPhoneValidator: () => (/* binding */ differentPhoneValidator),
/* harmony export */   phoneValidator: () => (/* binding */ phoneValidator)
/* harmony export */ });
function phoneValidator() {
  return control => {
    const value = control.value?.replace(/\D/g, '') ?? '';
    const valid = /^(221)?(7[05678]\d{7})$/.test(value);
    return valid ? null : {
      invalidPhone: true
    };
  };
}
function differentPhoneValidator(currentPhone) {
  return control => {
    const raw = control.value?.replace(/\D/g, '') ?? '';
    const current = currentPhone.replace(/\D/g, '');
    return raw === current ? {
      samePhone: true
    } : null;
  };
}

/***/ })

}]);
//# sourceMappingURL=common.js.map