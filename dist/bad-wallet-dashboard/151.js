"use strict";
(self["webpackChunkbad_wallet_dashboard"] = self["webpackChunkbad_wallet_dashboard"] || []).push([[151],{

/***/ 7151:
/*!**************************************************!*\
  !*** ./src/app/features/auth/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);







function LoginComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4)(2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Avant de vous connecter, indiquez si vous \u00EAtes :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6)(5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_container_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.chooseRole("CLIENT"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_container_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.chooseRole("AGENT"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function LoginComponent_ng_container_8_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numero requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_ng_container_8_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mot de passe requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginComponent_ng_container_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.error());
  }
}
function LoginComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_container_8_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_container_8_span_6_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_ng_container_8_span_11_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_ng_container_8_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_container_8_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Changer de profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.form.get("phone")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r1.form.get("phone")) == null ? null : tmp_1_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.form.get("password")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.form.get("password")) == null ? null : tmp_2_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.error());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.form.invalid || ctx_r1.loading());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.loading() ? "Connexion..." : "Se connecter", " ");
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "role-select-bg": a0,
    "client-bg": a1,
    "agent-bg": a2
  };
};
const _c1 = function (a0, a1) {
  return {
    "client-card": a0,
    "agent-card": a1
  };
};
let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor() {
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder);
      this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
      this.selectedRole = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
      this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
      this.error = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('');
      this.form = this.fb.group({
        phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      });
      this.testUsers = [{
        phone: '770000001',
        password: 'client123',
        role: 'CLIENT',
        token: 'test-client-token'
      }, {
        phone: '770000002',
        password: 'agent123',
        role: 'AGENT',
        token: 'test-agent-token'
      }];
    }
    get roleLabel() {
      return this.selectedRole() === 'AGENT' ? 'Agent' : 'Client';
    }
    chooseRole(role) {
      this.selectedRole.set(role);
      this.error.set('');
      this.form.reset();
    }
    goBack() {
      this.selectedRole.set(null);
      this.error.set('');
      this.form.reset();
    }
    findTestUser(phone, password) {
      const normalizedPhone = phone.replace(/\D/g, '');
      return this.testUsers.find(user => user.phone === normalizedPhone && user.password === password);
    }
    submit() {
      if (this.form.invalid) return;
      this.loading.set(true);
      this.error.set('');
      const phone = this.form.value.phone ?? '';
      const password = this.form.value.password ?? '';
      const testUser = this.findTestUser(phone, password);
      if (testUser) {
        localStorage.setItem('token', testUser.token);
        localStorage.setItem('role', testUser.role);
        localStorage.setItem('phone', testUser.phone);
        this.router.navigate([testUser.role === 'AGENT' ? '/admin/wallets' : '/dashboard']);
        return;
      }
      this.http.post('http://localhost:8080/api/auth/login', this.form.value).subscribe({
        next: ({
          token,
          role,
          phone
        }) => {
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          localStorage.setItem('phone', phone);
          this.router.navigate([role === 'AGENT' ? '/admin/wallets' : '/dashboard']);
        },
        error: () => {
          this.error.set('Identifiants incorrects. Veuillez réessayer.');
          this.loading.set(false);
        }
      });
    }
    static {
      this.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 9,
        vars: 12,
        consts: [[1, "login-wrapper", 3, "ngClass"], [1, "login-card", 3, "ngClass"], [1, "brand"], [4, "ngIf"], [1, "role-prompt"], [1, "subtitle"], [1, "role-options"], ["type", "button", 1, "role-option", "client", 3, "click"], ["type", "button", 1, "role-option", "agent", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "field"], ["formControlName", "phone", "placeholder", "77 XXX XX XX"], ["class", "err", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "********"], ["class", "alert", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["type", "button", 1, "link-btn", 3, "click"], [1, "err"], [1, "alert"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BadWallet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_ng_container_7_Template, 9, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_ng_container_8_Template, 17, 6, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, !ctx.selectedRole(), ctx.selectedRole() === "CLIENT", ctx.selectedRole() === "AGENT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx.selectedRole() === "CLIENT", ctx.selectedRole() === "AGENT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedRole() ? "Connexion " + ctx.roleLabel : "Choisissez votre profil");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedRole());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedRole());
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
        styles: [".login-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  transition: background .4s ease;\n}\n.login-wrapper.role-select-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5d5fe5 0%, #8e44ad 50%, #ff5f6d 100%);\n}\n.login-wrapper.client-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #06b6d4 0%, #14b8a6 45%, #16a34a 100%);\n}\n.login-wrapper.agent-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #7c3aed 0%, #d946ef 45%, #f97316 100%);\n}\n.login-card[_ngcontent-%COMP%] {\n  background: rgba(255,255,255,.95);\n  padding: 2.5rem 2rem;\n  border-radius: 22px;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 80px rgba(0,0,0,.25);\n  border: 1px solid rgba(255,255,255,.25);\n}\n.login-card.client-card[_ngcontent-%COMP%] {\n  border-color: rgba(14, 165, 233, 0.55);\n}\n.login-card.agent-card[_ngcontent-%COMP%] {\n  border-color: rgba(249, 115, 22, 0.55);\n}\n.brand[_ngcontent-%COMP%] { text-align: center; margin-bottom: 2rem; }\n.brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 2rem; font-weight: 800; color: #111827; letter-spacing: 0.04em; }\n.brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #4b5563; font-size: 1rem; margin-top: .4rem; }\n.role-prompt[_ngcontent-%COMP%] { text-align: center; }\n.subtitle[_ngcontent-%COMP%] { color: #111827; font-size: 1rem; margin-bottom: 1.5rem; font-weight: 600; }\n.role-options[_ngcontent-%COMP%] { display: grid; gap: 1rem; }\n.role-option[_ngcontent-%COMP%] {\n  padding: 1rem 1.2rem;\n  border: none;\n  border-radius: 14px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  cursor: pointer;\n  transition: transform .2s, box-shadow .2s;\n}\n.role-option[_ngcontent-%COMP%]:hover { transform: translateY(-3px); box-shadow: 0 18px 35px rgba(0,0,0,.15); }\n.role-option.client[_ngcontent-%COMP%] { background: linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%); }\n.role-option.agent[_ngcontent-%COMP%] { background: linear-gradient(135deg, #7c3aed 0%, #f97316 100%); }\n.field[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: .35rem; margin-bottom: 1.2rem; }\nlabel[_ngcontent-%COMP%] { font-size: .9rem; font-weight: 700; color: #0f172a; }\ninput[_ngcontent-%COMP%] { padding: .8rem 1rem; border: 1px solid rgba(148,163,184,.6); border-radius: 12px; font-size: 1rem; transition: border-color .2s, box-shadow .2s; background: rgba(255,255,255,.95); }\ninput[_ngcontent-%COMP%]:focus { outline: none; border-color: #22c55e; box-shadow: 0 0 0 4px rgba(34,197,94,.12); }\n.err[_ngcontent-%COMP%] { color: #dc2626; font-size: .82rem; }\n.alert[_ngcontent-%COMP%] { background: rgba(254,226,226,.9); color: #991b1b; padding: .75rem 1rem; border-radius: 10px; font-size: .9rem; margin-bottom: 1rem; }\n.btn-submit[_ngcontent-%COMP%] { width: 100%; padding: .95rem; background: #111827; color: #fff; border: none; border-radius: 14px; font-size: 1rem; font-weight: 700; cursor: pointer; transition: background .25s, transform .2s; margin-top: .5rem; }\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) { background: #f97316; transform: translateY(-1px); }\n.btn-submit[_ngcontent-%COMP%]:disabled { opacity: .65; cursor: not-allowed; }\n.link-btn[_ngcontent-%COMP%] {\n  width: 100%; margin-top: 1rem;\n  padding: .8rem;\n  border: 1px solid rgba(17,24,39,.15);\n  border-radius: 14px;\n  background: transparent;\n  color: #111827;\n  font-weight: 700;\n  cursor: pointer;\n}\n.link-btn[_ngcontent-%COMP%]:hover { background: rgba(17,24,39,.05); }\n@media (min-width: 580px) {\n  .role-options[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsMEVBQTBFO0FBQzVFO0FBQ0E7RUFDRSwwRUFBMEU7QUFDNUU7QUFDQTtFQUNFLDBFQUEwRTtBQUM1RTtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBLFNBQVMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7QUFDbEQsWUFBWSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFO0FBQ3ZGLFdBQVcsY0FBYyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRTtBQUMvRCxlQUFlLGtCQUFrQixFQUFFO0FBQ25DLFlBQVksY0FBYyxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRTtBQUN0RixnQkFBZ0IsYUFBYSxFQUFFLFNBQVMsRUFBRTtBQUMxQztFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZix5Q0FBeUM7QUFDM0M7QUFDQSxxQkFBcUIsMkJBQTJCLEVBQUUsdUNBQXVDLEVBQUU7QUFDM0Ysc0JBQXNCLDZEQUE2RCxFQUFFO0FBQ3JGLHFCQUFxQiw2REFBNkQsRUFBRTtBQUNwRixTQUFTLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUU7QUFDcEYsUUFBUSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUU7QUFDNUQsUUFBUSxtQkFBbUIsRUFBRSxzQ0FBc0MsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsNENBQTRDLEVBQUUsaUNBQWlDLEVBQUU7QUFDNUwsY0FBYyxhQUFhLEVBQUUscUJBQXFCLEVBQUUseUNBQXlDLEVBQUU7QUFDL0YsT0FBTyxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7QUFDMUMsU0FBUyxnQ0FBZ0MsRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUU7QUFDN0ksY0FBYyxXQUFXLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSwwQ0FBMEMsRUFBRSxpQkFBaUIsRUFBRTtBQUNwTyxtQ0FBbUMsbUJBQW1CLEVBQUUsMkJBQTJCLEVBQUU7QUFDckYsdUJBQXVCLFlBQVksRUFBRSxtQkFBbUIsRUFBRTtBQUMxRDtFQUNFLFdBQVcsRUFBRSxnQkFBZ0I7RUFDN0IsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBLGtCQUFrQiw4QkFBOEIsRUFBRTtBQUNsRDtFQUNFLGdCQUFnQiw4QkFBOEIsRUFBRTtBQUNsRCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGVhc2U7XG59XG4ubG9naW4td3JhcHBlci5yb2xlLXNlbGVjdC1iZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1ZDVmZTUgMCUsICM4ZTQ0YWQgNTAlLCAjZmY1ZjZkIDEwMCUpO1xufVxuLmxvZ2luLXdyYXBwZXIuY2xpZW50LWJnIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA2YjZkNCAwJSwgIzE0YjhhNiA0NSUsICMxNmEzNGEgMTAwJSk7XG59XG4ubG9naW4td3JhcHBlci5hZ2VudC1iZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3YzNhZWQgMCUsICNkOTQ2ZWYgNDUlLCAjZjk3MzE2IDEwMCUpO1xufVxuLmxvZ2luLWNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC45NSk7XG4gIHBhZGRpbmc6IDIuNXJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDgwcHggcmdiYSgwLDAsMCwuMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7XG59XG4ubG9naW4tY2FyZC5jbGllbnQtY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNCwgMTY1LCAyMzMsIDAuNTUpO1xufVxuLmxvZ2luLWNhcmQuYWdlbnQtY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDksIDExNSwgMjIsIDAuNTUpO1xufVxuLmJyYW5kIHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAycmVtOyB9XG4uYnJhbmQgaDEgeyBmb250LXNpemU6IDJyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjMTExODI3OyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyB9XG4uYnJhbmQgcCB7IGNvbG9yOiAjNGI1NTYzOyBmb250LXNpemU6IDFyZW07IG1hcmdpbi10b3A6IC40cmVtOyB9XG4ucm9sZS1wcm9tcHQgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi5zdWJ0aXRsZSB7IGNvbG9yOiAjMTExODI3OyBmb250LXNpemU6IDFyZW07IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLnJvbGUtb3B0aW9ucyB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMXJlbTsgfVxuLnJvbGUtb3B0aW9uIHtcbiAgcGFkZGluZzogMXJlbSAxLjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzLCBib3gtc2hhZG93IC4ycztcbn1cbi5yb2xlLW9wdGlvbjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTsgYm94LXNoYWRvdzogMCAxOHB4IDM1cHggcmdiYSgwLDAsMCwuMTUpOyB9XG4ucm9sZS1vcHRpb24uY2xpZW50IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA2YjZkNCAwJSwgIzE0YjhhNiAxMDAlKTsgfVxuLnJvbGUtb3B0aW9uLmFnZW50IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCAwJSwgI2Y5NzMxNiAxMDAlKTsgfVxuLmZpZWxkIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAuMzVyZW07IG1hcmdpbi1ib3R0b206IDEuMnJlbTsgfVxubGFiZWwgeyBmb250LXNpemU6IC45cmVtOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzBmMTcyYTsgfVxuaW5wdXQgeyBwYWRkaW5nOiAuOHJlbSAxcmVtOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OCwxNjMsMTg0LC42KTsgYm9yZGVyLXJhZGl1czogMTJweDsgZm9udC1zaXplOiAxcmVtOyB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzLCBib3gtc2hhZG93IC4yczsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOTUpOyB9XG5pbnB1dDpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IGJvcmRlci1jb2xvcjogIzIyYzU1ZTsgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMzQsMTk3LDk0LC4xMik7IH1cbi5lcnIgeyBjb2xvcjogI2RjMjYyNjsgZm9udC1zaXplOiAuODJyZW07IH1cbi5hbGVydCB7IGJhY2tncm91bmQ6IHJnYmEoMjU0LDIyNiwyMjYsLjkpOyBjb2xvcjogIzk5MWIxYjsgcGFkZGluZzogLjc1cmVtIDFyZW07IGJvcmRlci1yYWRpdXM6IDEwcHg7IGZvbnQtc2l6ZTogLjlyZW07IG1hcmdpbi1ib3R0b206IDFyZW07IH1cbi5idG4tc3VibWl0IHsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IC45NXJlbTsgYmFja2dyb3VuZDogIzExMTgyNzsgY29sb3I6ICNmZmY7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTRweDsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNzAwOyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGJhY2tncm91bmQgLjI1cywgdHJhbnNmb3JtIC4yczsgbWFyZ2luLXRvcDogLjVyZW07IH1cbi5idG4tc3VibWl0OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogI2Y5NzMxNjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7IG9wYWNpdHk6IC42NTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuLmxpbmstYnRuIHtcbiAgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmc6IC44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3LDI0LDM5LC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzExMTgyNztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpbmstYnRuOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgxNywyNCwzOSwuMDUpOyB9XG5AbWVkaWEgKG1pbi13aWR0aDogNTgwcHgpIHtcbiAgLnJvbGUtb3B0aW9ucyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDBFQUEwRTtBQUM1RTtBQUNBO0VBQ0UsMEVBQTBFO0FBQzVFO0FBQ0E7RUFDRSwwRUFBMEU7QUFDNUU7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLHVDQUF1QztBQUN6QztBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQSxTQUFTLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFO0FBQ2xELFlBQVksZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRTtBQUN2RixXQUFXLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUU7QUFDL0QsZUFBZSxrQkFBa0IsRUFBRTtBQUNuQyxZQUFZLGNBQWMsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdEYsZ0JBQWdCLGFBQWEsRUFBRSxTQUFTLEVBQUU7QUFDMUM7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUNBQXlDO0FBQzNDO0FBQ0EscUJBQXFCLDJCQUEyQixFQUFFLHVDQUF1QyxFQUFFO0FBQzNGLHNCQUFzQiw2REFBNkQsRUFBRTtBQUNyRixxQkFBcUIsNkRBQTZELEVBQUU7QUFDcEYsU0FBUyxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFO0FBQ3BGLFFBQVEsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFO0FBQzVELFFBQVEsbUJBQW1CLEVBQUUsc0NBQXNDLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLDRDQUE0QyxFQUFFLGlDQUFpQyxFQUFFO0FBQzVMLGNBQWMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLHlDQUF5QyxFQUFFO0FBQy9GLE9BQU8sY0FBYyxFQUFFLGlCQUFpQixFQUFFO0FBQzFDLFNBQVMsZ0NBQWdDLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFO0FBQzdJLGNBQWMsV0FBVyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsMENBQTBDLEVBQUUsaUJBQWlCLEVBQUU7QUFDcE8sbUNBQW1DLG1CQUFtQixFQUFFLDJCQUEyQixFQUFFO0FBQ3JGLHVCQUF1QixZQUFZLEVBQUUsbUJBQW1CLEVBQUU7QUFDMUQ7RUFDRSxXQUFXLEVBQUUsZ0JBQWdCO0VBQzdCLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQSxrQkFBa0IsOEJBQThCLEVBQUU7QUFDbEQ7RUFDRSxnQkFBZ0IsOEJBQThCLEVBQUU7QUFDbEQ7O0FBRUEsd29NQUF3b00iLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNHMgZWFzZTtcbn1cbi5sb2dpbi13cmFwcGVyLnJvbGUtc2VsZWN0LWJnIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzVkNWZlNSAwJSwgIzhlNDRhZCA1MCUsICNmZjVmNmQgMTAwJSk7XG59XG4ubG9naW4td3JhcHBlci5jbGllbnQtYmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDZiNmQ0IDAlLCAjMTRiOGE2IDQ1JSwgIzE2YTM0YSAxMDAlKTtcbn1cbi5sb2dpbi13cmFwcGVyLmFnZW50LWJnIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdjM2FlZCAwJSwgI2Q5NDZlZiA0NSUsICNmOTczMTYgMTAwJSk7XG59XG4ubG9naW4tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjk1KTtcbiAgcGFkZGluZzogMi41cmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBib3gtc2hhZG93OiAwIDI1cHggODBweCByZ2JhKDAsMCwwLC4yNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjI1KTtcbn1cbi5sb2dpbi1jYXJkLmNsaWVudC1jYXJkIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0LCAxNjUsIDIzMywgMC41NSk7XG59XG4ubG9naW4tY2FyZC5hZ2VudC1jYXJkIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0OSwgMTE1LCAyMiwgMC41NSk7XG59XG4uYnJhbmQgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDJyZW07IH1cbi5icmFuZCBoMSB7IGZvbnQtc2l6ZTogMnJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMxMTE4Mjc7IGxldHRlci1zcGFjaW5nOiAwLjA0ZW07IH1cbi5icmFuZCBwIHsgY29sb3I6ICM0YjU1NjM7IGZvbnQtc2l6ZTogMXJlbTsgbWFyZ2luLXRvcDogLjRyZW07IH1cbi5yb2xlLXByb21wdCB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLnN1YnRpdGxlIHsgY29sb3I6ICMxMTE4Mjc7IGZvbnQtc2l6ZTogMXJlbTsgbWFyZ2luLWJvdHRvbTogMS41cmVtOyBmb250LXdlaWdodDogNjAwOyB9XG4ucm9sZS1vcHRpb25zIHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAxcmVtOyB9XG4ucm9sZS1vcHRpb24ge1xuICBwYWRkaW5nOiAxcmVtIDEuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMsIGJveC1zaGFkb3cgLjJzO1xufVxuLnJvbGUtb3B0aW9uOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpOyBib3gtc2hhZG93OiAwIDE4cHggMzVweCByZ2JhKDAsMCwwLC4xNSk7IH1cbi5yb2xlLW9wdGlvbi5jbGllbnQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDZiNmQ0IDAlLCAjMTRiOGE2IDEwMCUpOyB9XG4ucm9sZS1vcHRpb24uYWdlbnQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjN2MzYWVkIDAlLCAjZjk3MzE2IDEwMCUpOyB9XG4uZmllbGQgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IC4zNXJlbTsgbWFyZ2luLWJvdHRvbTogMS4ycmVtOyB9XG5sYWJlbCB7IGZvbnQtc2l6ZTogLjlyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjMGYxNzJhOyB9XG5pbnB1dCB7IHBhZGRpbmc6IC44cmVtIDFyZW07IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQ4LDE2MywxODQsLjYpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBmb250LXNpemU6IDFyZW07IHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMsIGJveC1zaGFkb3cgLjJzOyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC45NSk7IH1cbmlucHV0OmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyLWNvbG9yOiAjMjJjNTVlOyBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSgzNCwxOTcsOTQsLjEyKTsgfVxuLmVyciB7IGNvbG9yOiAjZGMyNjI2OyBmb250LXNpemU6IC44MnJlbTsgfVxuLmFsZXJ0IHsgYmFja2dyb3VuZDogcmdiYSgyNTQsMjI2LDIyNiwuOSk7IGNvbG9yOiAjOTkxYjFiOyBwYWRkaW5nOiAuNzVyZW0gMXJlbTsgYm9yZGVyLXJhZGl1czogMTBweDsgZm9udC1zaXplOiAuOXJlbTsgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxuLmJ0bi1zdWJtaXQgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogLjk1cmVtOyBiYWNrZ3JvdW5kOiAjMTExODI3OyBjb2xvcjogI2ZmZjsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxNHB4OyBmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMjVzLCB0cmFuc2Zvcm0gLjJzOyBtYXJnaW4tdG9wOiAuNXJlbTsgfVxuLmJ0bi1zdWJtaXQ6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiAjZjk3MzE2OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cbi5idG4tc3VibWl0OmRpc2FibGVkIHsgb3BhY2l0eTogLjY1OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4ubGluay1idG4ge1xuICB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogLjhyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTcsMjQsMzksLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMTExODI3O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGluay1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDE3LDI0LDM5LC4wNSk7IH1cbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkge1xuICAucm9sZS1vcHRpb25zIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return LoginComponent;
})();


/***/ })

}]);
//# sourceMappingURL=151.js.map