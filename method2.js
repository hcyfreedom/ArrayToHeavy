/**
 * Created by hcy on 2017/5/7.
 */
Array.prototype.arrayToHeavy2 = function () {
    this.sort();//sort()升序，先数字，再字符串
    var result = [this[0]];

    for(var  i = 1;i < this.length;){
        this[i] === result[result.length - 1] ? i++ : result.push(this[i])

    }

return result;
};

var arr = [1,1,23,22,33,33,"33","a","1","a","b","b","23","33"];
console.log(arr.arrayToHeavy2());