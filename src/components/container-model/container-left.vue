<template>
  <!-- 内容左侧
    用来存放可拖拽的字节列别
   -->
   <div class="Container-left-box">
     <Draggable element="ul" :list="basicComponents"
     :options="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
      @end="handleMoveEnd"
      @start="handleMoveStart"
      @add="addDrag"
      :move="handleMove"
     >
       <li class="form-edit-widget-label" v-for="(item,index) in basicComponents":key="index">{{item.name}}</li>
     </Draggable>

   </div>
</template>

<script>
import {basicComponents} from './basicCOmponents.js'
import Draggable from 'vuedraggable'

export default {
  components:{
    Draggable,
    basicComponents
  },
  data () {
    return {
      basicComponents,

    }
  },
  created() {
    console.log(this.basicComponents)
  },
  methods:{
    handleMoveEnd (evt) {
       /*
        结束拖拽的时候调用函数
      */
      console.log('拖拽松开的时候（结束的时候调用函数）end', evt)
    },
    handleMoveStart ({oldIndex}) {
      /*
        开始拖拽的时候调用函数*（返回当前正在拖拽的数据下标及当前总数据）
      */
      console.log('start获取当前拖拽的元素在当前数组中的下标及当前总数组', oldIndex, this.basicComponents)
    },
    handleMove (evt, originalEvent) {
      /*
        当前正在拖动的元素，返回false可结束拖拽
      */
      console.log('当前正在拖动元素所变化',evt,originalEvent)
      return true
    },
    addDrag (evt){

    }
  }
}
</script>

<style lang="less">
.Container-left-box{
  width: 20%;
  border: 1px solid grey;
  .form-edit-widget-label{
    font-size: 12px;
    display: block;
    width: 48%;
    line-height: 26px;
    position: relative;
    float: left;
    left: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 1%;
    color: #333;
    border: 1px solid red;
    .icon{
      font-size:25px;
      margin-right: 10px;
      vertical-align: middle;
    }
    span{
      vertical-align: middle;

    }
    &:hover{
      color: primary-color;
      border: 1px dashed primary-color;
    }
  }

}

</style>
