var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.debitAmount = function () {
    };
    Account.prototype.creditAmount = function () {
    };
    Account.prototype.getBalance = function () {
    };
    return Account;
}());
var saving_account = /** @class */ (function (_super) {
    __extends(saving_account, _super);
    function saving_account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    saving_account.prototype.addCustomer = function () { };
    saving_account.prototype.removeCustomer = function () { };
    return saving_account;
}(Account));
var current_account = /** @class */ (function (_super) {
    __extends(current_account, _super);
    function current_account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    current_account.prototype.addCustomer = function () { };
    current_account.prototype.removeCustomer = function () { };
    return current_account;
}(Account));
