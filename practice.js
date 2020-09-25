"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'lol';
var n = null;
var u = undefined;
var list1 = [1, 2];
var list2 = [1, 2];
var person = [1, "hey"];
console.log(message);
var Color;
(function (Color) {
    Color[Color["Red"] = 12] = "Red";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 40] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var random = 123;
random = true;
var myvar = "hello";
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myvar)) {
    console.log(myvar.name);
}
myvar.toUpperCase();
function fullName(person) {
    return { firstName: person.firstName, lastName: person.lastName };
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
console.log(fullName(p));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('kel');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.managerName);
