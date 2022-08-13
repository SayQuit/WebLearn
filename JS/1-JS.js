//变量 
var number1=1,number2=10,tempnumber;
tempnumber=number1;
number1=number2;
number2=tempnumber;


console.log('number1=');
console.log(number1);
console.log('');
console.log('number2=');
console.log(number2);
console.log(isNaN(number1));



// 字符型
var a='我\n是';
var b='A';
console.log(a);
console.log(a.length);
console.log(a+b);
console.log(a+b+number1+number2);

// 类型
var bl=true;
var b2=true;
console.log(bl+b2);

console.log(typeof(bl));
console.log(typeof(number1));

console.log('\n');console.log('\n');console.log('\n');







// 转换为字符串
var NumToStr=18;
var NumToStr2=18;



var k=NumToStr.toString();
var k2=String(NumToStr2);


console.log(k);
console.log(typeof(k));
console.log(k2);
console.log(typeof(k2));

// 转换整数

NumToStr='18';
NumToStr2='18.15';

k=parseInt(NumToStr);
k2=parseFloat(NumToStr2);
var k3=Number(NumToStr);
var k4=NumToStr-0;

console.log(k);
console.log(typeof(k));
console.log(k2);
console.log(typeof(k2));
console.log(k3);
console.log(typeof(k3));
console.log(k4);
console.log(typeof(k4));


// 转换bool

var z=1;

var BB=Boolean(z);

console.log(BB);
console.log(typeof(BB));


var p=0;
p++;
console.log(p);














