/**
 * Created by hcy on 2017/5/7.
 */
Array.prototype.arrayToHeavy = function () {
    var result = [this[0]];//把数组的第一个元素放入结果数组中,注意this的指向，是将来调用这个原型方法的数组

    for(var i = 1;i < this.length;i++){
        var repeat = false;//没有重复的

        for(var j = 0;j<result.length;j++){
            if(this[i] === result[j]){//==的话，如果类型不一样，但是数值一样，也会被去重；===严格相等的话，就数值类型都要一样才会被去重
                repeat  =true;//有重复的了，立即结束这重循环
                break;
            }
        }

        //没有重复的
        if(!repeat){//if里的条件必须为真，才会执行了里面的语句，现在repeat为false，所以要改成true
            result.push(this[i])
        }
    }
 return result;
}

var arr = [1,23,22,33,33,"33","a","1"];
console.log(arr.arrayToHeavy())