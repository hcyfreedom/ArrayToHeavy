/**
 * Created by hcy on 2017/5/7.
 */
Array.prototype.arrayToHeavy3  =function () {
    var result = [];
    var json = {};
    for(var i =0; i < this.length; i++){
        if(!json[this[i]]){
            result.push(this[i]);
            json[this[i]] = 1;

        }
    }
    return result;
};

var arr = [1,1,23,22,33,33,"33","a","1","a","b","b","23","33"];
//对象的key默认被转为字符串

console.log(arr.arrayToHeavy3());