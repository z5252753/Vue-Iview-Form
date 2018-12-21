<template>
  <!-- 每一个单组件 -->
    <FormItem
      :label="list.label"
      :key="`${_uid}`"
      :prop="list.name"
      >
      <component :is="list.type" :range="list.range">
        <template v-if="list.options.options">
          <component
            v-for="(items,i) in list.options.options"
              :is="list.options.type"
              :value="items.value"
              :key="`${_uid}_${i}`"
              :label="items.label"
              >{{ items.label }}</component>

        </template>
      </component>
      </FormItem>
</template>

<script>
export default {
  props:{
    list:Object,
  },
  watch:{
    list(list){
      console.log(this.list)
    }
  }

}
</script>

<style>

</style>
