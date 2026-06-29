"use strict";
(self["webpackChunkbad_wallet_dashboard"] = self["webpackChunkbad_wallet_dashboard"] || []).push([[546],{

/***/ 9546:
/*!*********************************************************!*\
  !*** ./src/app/features/transfer/transfer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferComponent: () => (/* binding */ TransferComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_wallet_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/wallet-api.service */ 7408);
/* harmony import */ var _core_store_balance_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/store/balance.store */ 1357);
/* harmony import */ var _shared_components_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/toast.service */ 1253);
/* harmony import */ var _shared_validators_phone_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/validators/phone.validators */ 4171);
/* harmony import */ var _shared_pipes_xof_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/xof.pipe */ 1263);











function TransferComponent_ng_container_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Champ obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TransferComponent_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Numero invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TransferComponent_ng_container_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Destinataire different requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TransferComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TransferComponent_ng_container_8_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TransferComponent_ng_container_8_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TransferComponent_ng_container_8_span_3_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.form.get("receiverPhone")) == null ? null : tmp_0_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.form.get("receiverPhone")) == null ? null : tmp_1_0.hasError("invalidPhone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.form.get("receiverPhone")) == null ? null : tmp_2_0.hasError("samePhone"));
  }
}
function TransferComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Champ obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TransferComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Montant superieur a 0 requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
let TransferComponent = /*#__PURE__*/(() => {
  class TransferComponent {
    constructor() {
      this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder);
      this.walletApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_services_wallet_api_service__WEBPACK_IMPORTED_MODULE_0__.WalletApiService);
      this.balanceStore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_core_store_balance_store__WEBPACK_IMPORTED_MODULE_1__.BalanceStore);
      this.toast = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_shared_components_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService);
      this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
      this.senderPhone = localStorage.getItem('phone') ?? '';
      this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.signal)(false);
      this.form = this.fb.group({
        receiverPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, (0,_shared_validators_phone_validators__WEBPACK_IMPORTED_MODULE_3__.phoneValidator)(), (0,_shared_validators_phone_validators__WEBPACK_IMPORTED_MODULE_3__.differentPhoneValidator)(this.senderPhone)]],
        amount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)]]
      });
    }
    submit() {
      if (this.form.invalid) return;
      this.loading.set(true);
      const {
        receiverPhone,
        amount
      } = this.form.value;
      this.walletApi.transfer({
        senderPhone: this.senderPhone,
        receiverPhone: receiverPhone,
        amount: amount
      }).subscribe({
        next: () => {
          this.toast.success('Transfert effectue avec succes !');
          this.balanceStore.refresh(this.senderPhone);
          this.router.navigate(['/dashboard']);
        },
        complete: () => this.loading.set(false)
      });
    }
    static {
      this.ɵfac = function TransferComponent_Factory(t) {
        return new (t || TransferComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: TransferComponent,
        selectors: [["app-transfer"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
        decls: 22,
        vars: 9,
        consts: [[1, "page"], [1, "card", 3, "formGroup", "ngSubmit"], [1, "field"], ["formControlName", "receiverPhone", "placeholder", "77 XXX XX XX"], [4, "ngIf"], ["type", "number", "formControlName", "amount", "min", "1", "placeholder", "0"], ["class", "err", 4, "ngIf"], [1, "summary"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "err"]],
        template: function TransferComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Transfert");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function TransferComponent_Template_form_ngSubmit_3_listener() {
              return ctx.submit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Numero destinataire");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TransferComponent_ng_container_8_Template, 4, 3, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2)(10, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Montant (XOF)");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TransferComponent_span_13_Template, 2, 0, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TransferComponent_span_14_Template, 2, 0, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Solde actuel : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "xof");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.form.get("receiverPhone")) == null ? null : tmp_1_0.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.form.get("amount")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.form.get("amount")) == null ? null : tmp_2_0.hasError("required")));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.form.get("amount")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("amount")) == null ? null : tmp_3_0.hasError("min")));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 7, ctx.balanceStore.balance()));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.loading());
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.loading() ? "Envoi..." : "Envoyer", " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_pipes_xof_pipe__WEBPACK_IMPORTED_MODULE_4__.XofPipe],
        styles: [".page[_ngcontent-%COMP%] { max-width:480px; margin:0 auto; }\nh1[_ngcontent-%COMP%] { margin-bottom:1.5rem; }\n.card[_ngcontent-%COMP%] { background:#fff; padding:1.5rem; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,.08); display:flex; flex-direction:column; gap:1rem; }\n.field[_ngcontent-%COMP%] { display:flex; flex-direction:column; gap:.3rem; }\nlabel[_ngcontent-%COMP%] { font-size:.85rem; font-weight:600; color:#374151; }\ninput[_ngcontent-%COMP%] { padding:.6rem .8rem; border:1px solid #d1d5db; border-radius:6px; font-size:1rem; }\ninput[_ngcontent-%COMP%]:focus { outline:none; border-color:#00d4aa; }\n.err[_ngcontent-%COMP%] { color:#dc2626; font-size:.78rem; }\n.summary[_ngcontent-%COMP%] { font-size:.9rem; color:#6b7280; }\n.btn-primary[_ngcontent-%COMP%] { padding:.75rem; background:#1a1a2e; color:#fff; border:none; border-radius:8px; font-size:1rem; cursor:pointer; }\n.btn-primary[_ngcontent-%COMP%]:disabled { opacity:.5; cursor:not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxlQUFlLEVBQUUsYUFBYSxFQUFFO0FBQ3hDLEtBQUssb0JBQW9CLEVBQUU7QUFDM0IsUUFBUSxlQUFlLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLG9DQUFvQyxFQUFFLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUU7QUFDbEosU0FBUyxZQUFZLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFO0FBQ3pELFFBQVEsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRTtBQUMxRCxRQUFRLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRTtBQUMxRixjQUFjLFlBQVksRUFBRSxvQkFBb0IsRUFBRTtBQUNsRCxPQUFPLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRTtBQUN4QyxXQUFXLGVBQWUsRUFBRSxhQUFhLEVBQUU7QUFDM0MsZUFBZSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQy9ILHdCQUF3QixVQUFVLEVBQUUsa0JBQWtCLEVBQUUiLCJmaWxlIjoidHJhbnNmZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHsgbWF4LXdpZHRoOjQ4MHB4OyBtYXJnaW46MCBhdXRvOyB9XG5oMSB7IG1hcmdpbi1ib3R0b206MS41cmVtOyB9XG4uY2FyZCB7IGJhY2tncm91bmQ6I2ZmZjsgcGFkZGluZzoxLjVyZW07IGJvcmRlci1yYWRpdXM6MTBweDsgYm94LXNoYWRvdzowIDJweCA4cHggcmdiYSgwLDAsMCwuMDgpOyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjFyZW07IH1cbi5maWVsZCB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6LjNyZW07IH1cbmxhYmVsIHsgZm9udC1zaXplOi44NXJlbTsgZm9udC13ZWlnaHQ6NjAwOyBjb2xvcjojMzc0MTUxOyB9XG5pbnB1dCB7IHBhZGRpbmc6LjZyZW0gLjhyZW07IGJvcmRlcjoxcHggc29saWQgI2QxZDVkYjsgYm9yZGVyLXJhZGl1czo2cHg7IGZvbnQtc2l6ZToxcmVtOyB9XG5pbnB1dDpmb2N1cyB7IG91dGxpbmU6bm9uZTsgYm9yZGVyLWNvbG9yOiMwMGQ0YWE7IH1cbi5lcnIgeyBjb2xvcjojZGMyNjI2OyBmb250LXNpemU6Ljc4cmVtOyB9XG4uc3VtbWFyeSB7IGZvbnQtc2l6ZTouOXJlbTsgY29sb3I6IzZiNzI4MDsgfVxuLmJ0bi1wcmltYXJ5IHsgcGFkZGluZzouNzVyZW07IGJhY2tncm91bmQ6IzFhMWEyZTsgY29sb3I6I2ZmZjsgYm9yZGVyOm5vbmU7IGJvcmRlci1yYWRpdXM6OHB4OyBmb250LXNpemU6MXJlbTsgY3Vyc29yOnBvaW50ZXI7IH1cbi5idG4tcHJpbWFyeTpkaXNhYmxlZCB7IG9wYWNpdHk6LjU7IGN1cnNvcjpub3QtYWxsb3dlZDsgfVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdHJhbnNmZXIvdHJhbnNmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGVBQWUsRUFBRSxhQUFhLEVBQUU7QUFDeEMsS0FBSyxvQkFBb0IsRUFBRTtBQUMzQixRQUFRLGVBQWUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsb0NBQW9DLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRTtBQUNsSixTQUFTLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUU7QUFDekQsUUFBUSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFO0FBQzFELFFBQVEsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFO0FBQzFGLGNBQWMsWUFBWSxFQUFFLG9CQUFvQixFQUFFO0FBQ2xELE9BQU8sYUFBYSxFQUFFLGdCQUFnQixFQUFFO0FBQ3hDLFdBQVcsZUFBZSxFQUFFLGFBQWEsRUFBRTtBQUMzQyxlQUFlLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDL0gsd0JBQXdCLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTs7QUFFeEQsdzNEQUF3M0QiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7IG1heC13aWR0aDo0ODBweDsgbWFyZ2luOjAgYXV0bzsgfVxuaDEgeyBtYXJnaW4tYm90dG9tOjEuNXJlbTsgfVxuLmNhcmQgeyBiYWNrZ3JvdW5kOiNmZmY7IHBhZGRpbmc6MS41cmVtOyBib3JkZXItcmFkaXVzOjEwcHg7IGJveC1zaGFkb3c6MCAycHggOHB4IHJnYmEoMCwwLDAsLjA4KTsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDoxcmVtOyB9XG4uZmllbGQgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOi4zcmVtOyB9XG5sYWJlbCB7IGZvbnQtc2l6ZTouODVyZW07IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6IzM3NDE1MTsgfVxuaW5wdXQgeyBwYWRkaW5nOi42cmVtIC44cmVtOyBib3JkZXI6MXB4IHNvbGlkICNkMWQ1ZGI7IGJvcmRlci1yYWRpdXM6NnB4OyBmb250LXNpemU6MXJlbTsgfVxuaW5wdXQ6Zm9jdXMgeyBvdXRsaW5lOm5vbmU7IGJvcmRlci1jb2xvcjojMDBkNGFhOyB9XG4uZXJyIHsgY29sb3I6I2RjMjYyNjsgZm9udC1zaXplOi43OHJlbTsgfVxuLnN1bW1hcnkgeyBmb250LXNpemU6LjlyZW07IGNvbG9yOiM2YjcyODA7IH1cbi5idG4tcHJpbWFyeSB7IHBhZGRpbmc6Ljc1cmVtOyBiYWNrZ3JvdW5kOiMxYTFhMmU7IGNvbG9yOiNmZmY7IGJvcmRlcjpub25lOyBib3JkZXItcmFkaXVzOjhweDsgZm9udC1zaXplOjFyZW07IGN1cnNvcjpwb2ludGVyOyB9XG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQgeyBvcGFjaXR5Oi41OyBjdXJzb3I6bm90LWFsbG93ZWQ7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return TransferComponent;
})();


/***/ })

}]);
//# sourceMappingURL=546.js.map