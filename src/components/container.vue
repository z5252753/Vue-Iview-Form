<style scoped lang="less">
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        .ivu-layout{
          .ivu-layout-content{
            height: ~"calc(100vh - 163px)";
          }
        }
        .layout-span{
           color: white;
           margin-left: 40px;
           font-weight: 800;
           font-size: 16px;
        }
    }
    .layout-logo{
        height: 50px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 9px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right:220px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .Container-Content{
      border: 1px solid goldenrod;
      height: ~"calc(100vh - 163px)";
      display: inline-block;
      width: 60%;
    }
    .Container-left{
      height: ~"calc(100vh - 163px)";
      display: inline-block;
      .icon{
        font-size:20px;
      }

    }

</style>
<template>
    <div class="layout">
        <Layout>

          <!-- 顶部头 -->
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <img class="layout-logo" src="../assets/logo (2).png" alt="">
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            预览
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            查看代码
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            查json
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            保存
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <!-- 中间内容 -->
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px',border:'1px solid red'}">
                <!-- 左 -->
                <!-- <containerLeft class="Container-left"></containerLeft> -->
                <div class="Container-left-box">
                  <Draggable element="ul" :list="basicComponents"
                  :options="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                    @end="handleMoveEnd"
                    @start="handleMoveStart"
                    @add="addDrag"
                    :move="handleMove"
                  >
                    <li class="form-edit-widget-label" v-for="(item,index) in basicComponents":key="index">
                      <a>
                        <icon class="icon" :type="item.icon"></icon>
                        <span>{{item.label}}</span>
                      </a>
                    </li>
                  </Draggable>

                </div>
                <containerCOntent :data="widgetForm" ref="widgetForm" :select.sync="widgetFormSelect" class="Container-Content"></containerCOntent>
                <!-- 中 -->

                <!-- 右 -->

            </Content>
            <!-- 底部 -->
            <Footer class="layout-footer-center">LifeScreen_表单设计器</Footer>
        </Layout>
    </div>
</template>
<script>
import {basicComponents} from './container-model/basicCOmponents.js'
import Draggable from 'vuedraggable'
import containerLeft from './container-model/container-left'
import containerCOntent from './container-model/container-content'

    export default {
      components:{
        Draggable,
        basicComponents,
        containerLeft,
        containerCOntent
      },
      data () {
        return{
          basicComponents,
          widgetFormSelect:null,
          widgetForm: {
            list: [],
            config: {
              labelWidth: 100,
              labelPosition: 'top'
            },

          },
        }
      },
      methods:{
        handleMoveEnd (evt) {
          /*
            结束拖拽的时候调用函数
          */
          // console.log('拖拽松开的时候（结束的时候调用函数）end', evt)
        },
        handleMoveStart ({oldIndex}) {
          /*
            开始拖拽的时候调用函数*（返回当前正在拖拽的数据下标及当前总数据）
          */
          // console.log('start获取当前拖拽的元素在当前数组中的下标及当前总数组', oldIndex, this.basicComponents)
        },
        handleMove (evt, originalEvent) {
          /*
            当前正在拖动的元素，返回false可结束拖拽
          */
          // console.log('当前正在拖动元素所变化',evt,originalEvent)
          return true
        },
        addDrag (evt){
          console.log(evt)
        }
      },
      watch: {
        widgetForm: {
          deep: true,
          handler: function (val) {
            console.log(this.$refs.widgetForm)
            console.log(this.widgetForm)
          }
        }
      }
    }
</script>
