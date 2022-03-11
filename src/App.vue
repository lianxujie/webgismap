<!--
 * @Author: your name
 * @Date: 2022-03-10 19:09:35
 * @LastEditTime: 2022-03-11 19:30:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \X北辰北\webgismap\webgismap\src\App.vue
-->
<template>
  <div id="app">
    <el-container class="app-out-pannel">
      <el-header class="sys-header">Aside</el-header>
      <el-container class="app-content-pannel">
        <el-aside class="sys-menu">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="true"
          >
            <el-menu-item index="1">
              <i class="el-icon-monitor"></i>
              <span slot="title">首页大屏</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-picture-outline"></i>
              <span slot="title">一张图</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <MapView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MapView from './components/Common/MapView.vue'

export default {
  name: 'App',
  components: {
    MapView,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
html,
body,
#app {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
}
.app-out-pannel,
.app-content-pannel {
    height: 100%;
}
.sys-header {
    background-color: #32373e;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
}
.sys-menu {
    background-color: #545c64;
    width: 64px !important;
    overflow: hidden !important;
}
.sys-content {
    padding: 5px !important;
}

.morescreen-view {
    width: 100%;
    height: 820px;
}
.user-info {
    font-size: 15px;
}
.user-info > span:last-child:hover {
    color: #409eff;
    cursor: pointer;
}
.login-content {
}
</style>
