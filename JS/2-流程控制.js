
// var a;
// a=prompt("请输入a");
// a=Number(a);

// if(a%100==0){
//     if(a%400==0)
//     {
//         alert("闰年");
//     }
//     else{
//         alert("平年");
//     }
// }
// else{
//     if(a%4==0)
//     {
//         alert("闰年");
//     }
//     else{
//         alert("平年");
//     }
// }


// switch(a)
// {
//     case 2020:alert("前年");break;
//     case 2021:alert("去年");break;
//     case 2020:alert("今年");;break;
//     default:alert("其他");;
// }
// var sum=0;

// for(var i=0;i<=100;i++)
// {
//     sum+=i;
// }

// sum/=100;
// console.log(sum);



// var sum1=0;
// for(var i=0;i<=100;i++)
// {
//     if(i%2==0)sum1+=i;
// }

// sum1/=100;
// console.log(sum1);



// var sum2=0;
// for(var i=0;i<=100;i++)
// {
//     if(i%2!=0)sum2+=i;
// }

// sum2/=100;
// console.log(sum2);


// var sum3=0;
// for(var i=0;i<=100;i++)
// {
//     if(i%3==0)sum3+=i;
// }

// sum3/=100;
// console.log(sum3);

// var num=prompt("输入人数");
// var sum=0;

// for(var i=0;i<num;i++)
// {
//     var k=prompt("请输入第"+(i+1)+'个学生的成绩');
//     sum+=(Number(k))
// }

// alert(sum);
// alert(sum/num);
// var n=prompt('输入n');

// var a='';
// for(var j=0;j<n;j++)
// {
    
//     for(var i=0;i<n-j;i++)
//     {
//         a+='*';
//     }
//     a+='\n';
// }
// console.log(a);

// var biao='';
// for(var i=1;i<10;i++)
// {
//     for(var j=1;j<=i;j++)
//     {
        
//         biao=biao+j+'×'+i+'='+(Number(i*j))+' ';
//         if(i*j<10)biao+=' ';

        
//     }
//     biao+='\n';
// }
// console.log(biao);
// var num=1;
// var sum=0;
// while(num<=100)
// {
//     sum+=num;
//     num++;
// }
// console.log(sum);

// var k='';
// while(k!='我爱你')
// {
//     k=prompt('你爱我吗');
// }


// var num=1;
// var sum=0;
// do{
//     sum+=num;
//     num++;
// }while(num<=100);

// console.log(sum);


// var age=1;
// do{
//     console.log('这个人'+age+'岁了');
//     age++;
// }while(age<=100)

// for(var i=0;i<5;i++)
// {
//     if(i==2)break;
//     console.log('我正在吃第'+Number(i+1)+'个包子');
// }
// var sum=0;
// for(var i=0;i<=100;i++)
// {
//     if(i%10==3)continue;
//     sum+=i;
// }
// console.log(sum);

// var money=0;

// while(1)
// {
//     var Operate=Number(prompt("请输入您要的操作:\n1.存钱\n2.取钱\n3.显示余额\n4.退出"));

//     switch(Operate){
//         case 1:
//             var cunQian=prompt("请输入您要存的金额");
//             if(cunQian>0)
//             {
//                 money+=Number(cunQian);
//                  alert("您的余额为:"+money);     
//             }
//             else alert("输入错误,请重新输入");
//             break;
//         case 2:
//             var quQian=prompt("请输入您要取的金额");
//             if(quQian>0&&quQian<=money)
//             {
//                 money-=Number(quQian);
//                  alert("您的余额为:"+money);
                 
//             }
//             else if(quQian>money)
//             {
//                 alert("您的余额为:"+money+",余额不足,请重新输入");
//             }
//             else alert("输入错误,请重新输入");
//             break;

//         case 3:alert("您的余额为:"+money+"余额不足,请重新输入");break;

//         case 4:alert("已退出");break;

//         default:alert("输入错误,请重新输入");

            
//     }
//     if(Operate==4)break;
// }

// var T1=['red','blue','green',1,2,3,4,true];
// for(var i=0;i<T1.length;i++)
// {
//     console.log(T1[i]);

// }
// T1.length=10;
// T1[8]=10;
// T1[9]=100;
// T1[T1.length]=10000;
// for(var i=0;i<T1.length;i++)
// {
//     console.log(T1[i]);

// }

// var T2=[];
// for(var i=0;i<10;i++)
// {
//     T2[i]=i+1;
// }

// for(var i=0;i<T2.length;i++)
// {
//     console.log(T2[i]);

// }


// for(var i=0;i<K1.length;i++)
// {
//     if(K1[i]>=10)
//     {
//         K2.push(K1[i]);
//     }
// }

// for(var i=0;i<K2.length;i++)
// {
//     console.log(K2[i]);

// }

// for(var i=0;i<K1.length;i++)
// {
//     if(K1[i]==0)
//     {
//         for(var j=i;j<K1.length;j++)
//         {
//             K1[j]=K1[j+1];
//         }
//         K1.pop();
//     }
// }
// console.log(K1);

// for(var i=0;i<K1.length;i++)
// {
//     for(var j=0;j<i;j++)
//     {
//         if(K1[i]<K1[j])
//         {
//             var temp=K1[i];
//             K1[i]=K1[j];
//             K1[j]=temp;
//         }
//     }
// }
// console.log('\n\n\n');
// for(var i=0;i<K1.length;i++)
// {
//     console.log(K1[i]);

// }
function showArray(array)
{
    for(i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }
}
function add(num1,num2)
{
    return Number(num1)+Number(num2);
}

function max(num1,num2)
{
    return num1>num2?num1:num2;
}
function ArrayMax(array)
{
    var max=array[0];
    for(var i=1;i<array.length;i++)
    {
        if(array[i]>max)
        {
            max=array[i];
        }
    }
    return max;
}







var K1=[2,0,6,1,77,0,52,25,7];
var K2=[];

for(i=K1.length-1;i>=0;i--)
{
    K2[i]=K1[K1.length-1-i];
}
console.log(K2);
showArray(K1);

var k=add(4,7);
console.log(k);

console.log(max(4,7));
console.log(max(8,5));
console.log(ArrayMax(K1));
