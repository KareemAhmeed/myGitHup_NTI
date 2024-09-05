"use strict";
/*
tsc --init  -> to init tsconfig file
tsc filename -> compile to js
tsc -> compile all files
tsc --watch -> watch changes
ts-node filename -> compile and run

npm i -g typescript
npm i -g ts-node
 */
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// data types
// number, string, boolean, array, object, null, undefined, any
let n = 1;
n = 10;
let message;
// message = true;
// function sayHello(n1: number, n2: number): number {
//   return (n1 + n2)
// }
// sayHello()
// console.log(sayHello(5, 10));
// const test = function () {
//   console.log('12');
// }
// const arrow = (): void => { }
// Generic type
// const sum = <T = number, T2 = number>(n1: T, n2: T): number => {
//   const result: number = n1 + n2
//   return (result)
// }
// console.log(sum<number, boolean>(5, true));
// const user: Profile = {
//   id: '1',
//   name: 'John',
//   age: 'My age is 30',
//   gender: "male",
// }
const user1 = {
    id: '2',
    name: 'Ahmed',
    age: 'My age is 30',
    gender: "male"
};
const user2 = {
    id: '3',
    name: 'Dina',
    age: 'My age is 30',
    gender: "female"
};
// user.age = 10
// user.id='5'
class Car {
    constructor(color) {
        this.color = color;
        console.log('Inside Constructor');
        console.log(`Car color is ${this.color}`);
    }
    maxSpeed(speed) { return (`Car Max Speed is ${speed}`); }
}
const car2 = new Car('Red');
console.log(car2.maxSpeed(200));
function first(val) {
    console.log(val);
    return function (target) {
        console.log("first(): called");
    };
}
let Ford = (() => {
    let _classDecorators = [first('From Ford Class')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Car;
    var Ford = _classThis = class extends _classSuper {
        constructor(name, color) {
            super(color);
            this.name = name;
            this.color = color;
            console.log(`Car Name is ${name}`);
        }
    };
    __setFunctionName(_classThis, "Ford");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Ford = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Ford = _classThis;
})();
const ford1 = new Ford('Ford Explore', 'Black');
