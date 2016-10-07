/*
Object.prototype.clone=function(){
    var newObj
    if (this.constructor==Object) newObj=new this.constructor();
    else newObj=this.constructor(this.valueOf());
    for(var key in this){
        if(newObj[key]!=this[key]){
            if(typeof this[key]=='object'){
                newObj[key]=this[key].clone();
            }else {
                newObj[key]=this[key];
            }
        }
    }
    //newObj.toString=this.toString;
    //newObj.valueOf=this.valueOf;
    return newObj;

}

var a={
    a:1,
    c:2
};
//var b=a;
var b= a.clone();
b.c=3;
//console.log(a);
//console.log(b);
/!*
* 作用域问题
* *!/

var x=3;
function S(){
    var s1="s1";
    s="s";
    function ss(){
         s2="s2";
        function sss(){
            var s3="s3";
            //console.log(s2);
            console.log(s3);
        }
        sss();
    }
    ss();
    console.log(s1);

}
S();


function abc(){
    function aaa(){
        if(i=1){ 8
            return i;
        }
    }
    aaa();
    console.log(i)

}
abc();
*/

/*
 //JS作用域的问题-1
var scope="global";
function t(){
    //var scope;
    console.log(scope);
    var scope="local";
    console.log(scope);
}
t();*/



/*
 //JS作用域的问题-2
var scope = 'top';
 function f1() {
    console.log(scope);
};
//f1();
function f2() {
    var scope = 'f2';

    f1();
};
f2();*/

/*

 //JS作用域的问题-3
function aa(){
    var bb = "test";
    cc = "测试";
    console.log(bb);
}

aa();
console.log(cc);
console.log(bb);
*/


/*
 //JS作用域的问题-4
if(true){
    var aa= "bb";
}
console.log(aa);

for(var i = 0; i < 100; i++){
//do
}
console.log(i);*/


/*
//JS作用域的问题-5
var bb = '11111';
function aa() {
    console.log(bb);
    var bb = 'test';
    console.log(bb);
    var cc = "test1";
    console.log(age);
}
aa();*/

/*

 //JS作用域的问题-6
var test = '1111111';
function aa() {
    console.log(test);
}
function bb() {
    var test = '22222222';
    aa();
}
bb();
*/

/*
 //JS作用域的问题-7
console.log(typeof aa);
console.log(typeof bb);
function aa() { //函数定义式
    console.log('I am 111111111');
};
var bb = function() { //函数表达式
}
console.log(typeof bb);*/

function fn1(){
    console.log(this.v);
}
var v=90;
fn1();