/**
 * Created by astaJerry on 2017/8/10.
 */
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};
//继承了SuperType
SubType.prototype = new SuperType();

var instance = new SubType();
console.log(instance.getSuperValue());


