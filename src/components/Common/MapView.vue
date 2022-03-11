<!--
 * @Author: your name
 * @Date: 2022-03-10 19:09:35
 * @LastEditTime: 2022-03-10 23:11:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \X北辰北\webgismap\webgismap\src\App.vue
-->
<template>
  <div id="mapview">123</div>
</template>

<script>

import { loadModules } from 'esri-loader';

const options = {
  url: 'https://js.arcgis.com/4.22/',
  css: 'https://js.arcgis.com/4.22/esri/themes/light/main.css',
}
export default {
  name: 'MapView',
  components: {},
  mounted: function () {
    this._createMapView();
  },
  methods: {
    async _createMapView() {
      const [Map, MapView] = await loadModules(
        ['esri/Map', 'esri/views/MapView'],
        options
      );

      const map = new Map({
        basemap: 'osm',
      });

      const view = new MapView({
        container: 'mapview',
        map: map,
        zoom: 10,
        center: [104.072745, 30.663774]
      });
      console.log(view);
    }
  }
}
</script>

<style>
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>
