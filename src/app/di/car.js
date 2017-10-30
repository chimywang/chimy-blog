"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("./Engine");
var Tires_1 = require("./Tires");
var Car = (function () {
    function Car() {
        this.engine = new Engine_1.Engine('my engine');
        this.tires = new Tires_1.Tires('chimy');
    }
    Car.prototype.drive = function () {
        return this.description + " car with " + this.engine.cylinders + " cylinders an " + this.tires.make + " tires.";
    };
    return Car;
}());
exports.Car = Car;
