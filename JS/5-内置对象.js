// MATH方法

function MAX(){
    var k1=10,k2=1010;
    var Array=[10,100,140,146,1213,11213];
    var k=Math.max(k1,k2);
    console.log(k);
}


// 自己封装的math对象
var MYMATH={
    PI:3.14,
    max:function(){
        var maxnum=-Infinity;
        for(var k in arguments)
        {
            if(arguments[k]>maxnum)maxnum=arguments[k];
        }
        return maxnum;

    },


    min:function(){
        var minnum=Infinity;
        for(var k in arguments)
        {
            if(arguments[k]<minnum)minnum=arguments[k];
        }
        return minnum;

    }
}

// console.log(MYMATH.max(1,10,100,1001,1000,10000));
// console.log(MYMATH.min(1,10,100,1001,1000,10000));








Mathtest=function(){
    console.log("向下取整:",Math.floor(1.9));
    console.log("向上取整:",Math.ceil(1.1));
    console.log("绝对值:",Math.abs(-10));
    console.log("四舍五入:",Math.round(1.4));
    console.log("四舍五入:",Math.round(1.5));
    console.log("四舍五入负数特殊情况:",Math.round(-1.5));
    console.log("随机数:",Math.random());//[0,1)
    console.log("随机数:",Math.floor(Math.random()*10001));//[0,10000]

}


guessNumber=function(){
    var k=Math.floor(Math.random()*101);
    while(1){
        var k1;

        k1=prompt('输入你认为的数字');
        if(k1>k)alert("数字大了");
        else if(k1<k)alert("数字小了");
        else {
            alert("输入正确");
            break;
        }
    }

    console.log(k);
}




















//日期类
 Datelearn=function(){
     var today=new Date();
    //  无参数为当前时间
     console.log(today);

     var tomorrow=new Date('2022-5-24 10:10:10');
     console.log(tomorrow);

     //格式化
    var today1=new Date();
    console.log(today1.getMonth()+1);
    //月份少一

    console.log(today1.getHours());
    console.log(today.valueOf());
    console.log(Date.now());
    

 }
 Datelearn()

daojishi=function()
{
    today=new Date();
    tomorrow=new Date('2022-7-2 12:00:00');
    var time=tomorrow.valueOf()-today.valueOf()
    time=time/1000;
    console.log(parseInt(time/60/60%24),parseInt(time/60%60),parseInt(time%60));

}





















//数组学习
Arraylearn=function(){
    a=new Array(1,2,3);
    a.push(4);
    a.unshift(0);
    
    console.log(Array.isArray(a));
    console.log(a);

    a.pop();
    a.shift();
    console.log(a);


    b=new Array(1,6,3,2,5,7,8,4,2);
    b.reverse();
    console.log(b);
    b.sort();
    console.log(b);

    c=new Array(1,6,3,2,5,7,8,4,2,10,5,3);

    var k=parseInt(c.length);

    for(var i=0;i<k;i++)
    {
        for(var j=0;j<k;j++)
        {
            if(c[j]>c[j+1])
            {
                var temp=c[j];
                c[j]=c[j+1];
                c[j+1]=temp;
            }
        }
    }

    console.log(c);

    console.log(c.indexOf(10));

    d=new Array();

    for(var i=0;i<k;i++)
    {
        if(c.indexOf(c[i])==c.lastIndexOf(c[i]))
        d.push(c[i]);
    }

    console.log(d);

    var a1=[1,2,3];
    console.log(a1.toString());
    console.log(a1.join(' '));

}













//字符串学习
stringLearn=function(){
    var k='';
    for(var i=0;i<10;i++)
    {
        k+=i;
    }
    console.log(k);


    var k1='andy';
    console.log(k1.indexOf('a'));
    k1='robin';
    console.log(k1.indexOf('o'));

    k1='kasfhaskfgasjkgfkasgfkasfgksafgsasjkasgfkfksks';
    var count=0;
    for(var i=0;i<k1.length;i++)
    {

        if(k1[i]=='k'){
            console.log(i);
            count++;
        }
    }
    console.log(count);


    console.log(k1.charAt(2));
    console.log(k1.charCodeAt(2));
    console.log(k1[2]);



    var obj={};
    for(var i=0;i<k1.length;i++)
    {

        if(obj[k1[i]]){
            obj[k1[i]]++;
        }
        else{
            obj[k1[i]]=1;
        }
    }
    console.log(obj);

    var max=0;
    var char='';
    for(k in obj)
    {
        if(obj[k]>max){
            max=obj[k];
            char=k;
        }
    }
    console.log(max);
    console.log(char);


    var str='blue';
    console.log(str.concat('red'));
    console.log(str.substring(0,2));

    console.log(str.replace('b','a'));

    var j="1,1,2,3";
    console.log(j.split(','));
}

stringLearn();