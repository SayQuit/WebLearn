
        // 原型对象
        Demo=function(){
            this.a=1;
            this.b=2;
        }
        var d=new Demo();
        console.log(d.a);
        console.log(d.b);
        console.log(Demo.prototype);
        console.log(d.__proto__);
        Demo.prototype.x=99;
        console.log(d.x);