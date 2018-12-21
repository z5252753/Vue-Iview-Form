<template>
    <!--
      内容中心部分
      用来生成最后的展示界面及调试界面
     -->
  <Form >
    <draggable
        class="widget-form-list"
        v-model="data.list"
        :options="{group:'people', ghostClass: 'ghost'}"
        @end="handleMoveEnd"
        @add="handleWidgetAdd"
    >
    <template
      class="widget-view"
      v-for="(item,index) in data.list">
      <template v-if="item.type == 'grid'">
          <!-- 在栅格里的组件 -->
      </template>
      <template v-else>
        <!-- 未在栅格里的组件 -->
         <containerContentFormItem
          :list="item">
            </containerContentFormItem>
      </template>
    </template>

    </draggable>

    </Form>
</template>

<script>
import Draggable from 'vuedraggable'
import containerContentFormItem from './container-content-formItem/container-content-formItem.vue'
export default {
  props:['data'],
  components:{
    Draggable,
    containerContentFormItem
  },
  created () {
    console.log(this.data)
  },
  methods:{
    handleMoveEnd ({newIndex, oldIndex}) {
      console.log('index', newIndex, oldIndex)

    },
    handleWidgetAdd (evt) {

    }
  }
}
</script>

<style lang="less">
.widget-form-list{
  height: 100%;
  padding: 30px;
  .widget-view{
    border: 1px solid #f56c6c;
  }

}
</style>
