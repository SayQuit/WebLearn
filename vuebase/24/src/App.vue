
<template>
    <div>
        <school></school>
        <student></student>
        <wang name="张三"></wang>

        <!-- 只能穿props里的，data的不可以穿 -->
        <wang name="李四"></wang>
        
    </div>
</template>


<script>

    import school from './components/school'
    import student from './components/student'
    import wang from './components/wang'



    export default {
        name:'App',
        components:{
            school,
            student,
            wang,
        }
        

    }

</script>