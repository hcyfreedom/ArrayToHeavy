/**
 * Created by hcy on 2017/5/7.
 */
Array.prototype.arrayToHeavy4 = function () {
    const result = new Set();
    this.forEach(function (item) {
        result.add(item)
    });
    //es6
    // this.forEach(x => result.add(x));
    var resArray = [];
    for(var i of result){
        resArray.push(i)
    }
    return resArray;
}
var arr = [1,1,23,22,33,33,"33","a","1","a","b","b","23","33"];

console.log(arr.arrayToHeavy4())
