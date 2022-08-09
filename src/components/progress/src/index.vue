<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Xqh
 * @Date: 2022-07-27 22:42:00
 * @LastEditors: Xqh
 * @LastEditTime: 2022-07-27 23:07:54
-->
<template>
  <div>
       <el-progress :percentage="p"  status="exception" />
       <el-progress :percentage="p"  />
       <el-progress type="circle"  :percentage="p"  />
  </div>
</template>

<script lang='ts' setup>
import {ref,onMounted} from 'vue'
const p = ref(0)
let props = defineProps({
  percentage:{
    type:Number,
    required:true
  },
  inAnimation:{
    type:Boolean,
    default:false,
  },
  time:{
    type:Number,
    default:3000
  }

})
onMounted(()=>{
  if(props.inAnimation){
    let t = Math.ceil(props.time / props.percentage) 

    const timer = setInterval(()=>{
       p.value++
      if(p.value >= props.percentage){
       
        p.value = props.percentage
        clearInterval(timer)
      }
    },t)

  }else{
    p.value = props.percentage
  }
})
</script>
<style  scoped lang='scss'>
 svg{
  height: 5em;
  width: 5em;
 }
</style>
