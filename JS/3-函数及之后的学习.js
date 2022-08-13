//***********************arguments学习***********************
function arg()
{
    console.log(arguments);
}
function max()
{
    var MMax=arguments[0];
    for(var i=1;i<arguments.length;i++)
    {
        if(arguments[i]>MMax)
        {
            MMax=arguments[i];
        }
    }
    return MMax;
}
function fanzhuan()
{
    var array=[];
    for(var i=0;i<arguments.length;i++)
    {
        array[arguments.length-i-1]=arguments[i];
        
    }
    return array;
}
// function swap(num1,num2)
// {
//     var temp=num1;
//     num1=num2;
//     num2=temp;
// }
function bubbleSort()
{
    var array=[];
    for(var i=0;i<arguments.length;i++)array[i]=arguments[i];
    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length;j++)
        {
            if(array[j]>array[i])
            {
                var temp=array[j];
                array[j]=array[i];
                array[i]=temp;
            }
        }
        
    }
    return array;
    
}
function runnian(year)
{
    var a=Number(year);

    if(a%100==0){
        if(a%400==0)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(a%4==0)
        {
            return true;
        }
        else{
            return false;
        }
    }

}

function backday(year)
{
    if(runnian(year))return 29;
    else return 28;
}


// console.log(max(1,4,6,7,4,0,9));
// console.log(fanzhuan(1,4,6,7,4,0,9));
// console.log(bubbleSort(1,4,6,7,4,0,9));
// console.log(backday(1999));
// console.log(backday(2000));
// var k1=3;
// var k2=4;
// swap(k1,k2);
// console.log(k1,k2);