function compose () {
    // TODO
    //var s1="";
    //for(var i=0;i<arguments.length;i++){
    //  s1+=arguments[i].name+"(";
    //}
    //var s2=new Array(arguments.length+1).join(")");
    //var s=s1+s2
    //return s;
    var length = arguments.length;
    var tmp=length;
    var args = arguments;
    function it(tmp,num){
        if(tmp == 1){
            //console.log(args[tmp-1](num))
            return args[tmp-1](num);
        }
        return it(tmp-1,args[tmp-1](num));

    }
    return function(num){
        return it(length,num);
    }
}

// 测试代码
function addOne (a) { return a + 1 }
function multiTwo (a) { return a * 2 }
function divThree (a) { return a / 3 }
function toString (a) { return a + '' }
function split (a) { return a.split('') }

//split(toString(addOne(multiTwo(divThree(666))))) // => ["4", "4", "5"]
//compose(split, toString, addOne, multiTwo, divThree);
var testForCompose = compose(split, toString, addOne, multiTwo, divThree)
//console.log(testForCompose);
console.log(testForCompose(666))
