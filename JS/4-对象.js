// 第一种方法
var person={
    name:'xiaochengdong',
    age:20,
    sex:'male',

    sayhi:function () {
        console.log('hi');
        
    }


}
console.log(person.name);
person.sayhi();





// 第二种方法
var people=new Object();
people.name='xiaochengdong';
people.age=20;
people.sex='male';
people.sayhi=function()
{
    console.log('hi');
}
console.log(people.name);
console.log(people.sex);
people.sayhi();












// 构造函数
function student(Stu_name,Stu_id,Stu_age,Stu_major)
{
    this.name=Stu_name;
    this.id=Stu_id;
    this.age=Stu_age;
    this.major=Stu_major;

    this.show=function()
    {
        console.log(this.name);
        console.log(this.id);
        console.log(this.age);
        console.log(this.major);
    }

}
var Xiao=new student('xiaochengdong','202030482201',20,'SE');
console.log(Xiao);
Xiao.show();
console.log('\n');


// 遍历对象
for(var k in Xiao)
{
    console.log(k);
    console.log(Xiao[k]);
}
