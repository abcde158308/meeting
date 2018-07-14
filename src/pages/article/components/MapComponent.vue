<template>
 <div>
   <!--百度地图容器-->
    <div style="width:100%;height:500px;border:#ccc solid 1px;font-size:12px" id="map"></div>
  
 </div>
</template>
<script>
import BMap from "BMap";
export default {
  name: "MapComponen",
  data: function() {
    return {
      map:"",
    };
  },
  mounted () {
      this.initMap()
  },
  methods: {
    initMap() {
      this.createMap();//创建地图
      this.setMapEvent();//设置地图事件
      this.addMapControl();//向地图添加控件
      this.addMapOverlay();//向地图添加覆盖物
    },
    createMap() {
      this.map = new BMap.Map("map"); 
      this.map.centerAndZoom(new BMap.Point(116.448461,40.048159),14);
    },
    setMapEvent() {
      this.map.enableScrollWheelZoom();
    },
    addClickHandler(target, window) {
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    },
    addMapOverlay() {
       var markers = [
        {content:"我的备注",title:"北苑大酒店",imageOffset: {width:0,height:3},position:{lat:40.042891,lng:116.431838}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        this.addClickHandler(marker,infoWindow);
        this.map.addOverlay(marker);
      };
    },
    //向地图添加控件
    addMapControl() {
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_METRIC);
      this.map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:1});
      this.map.addControl(navControl);
    }
  }
};
</script>
 
<!--Add"scoped" attribute to limit CSS to this component only -->
<style >
.BMap_cpyCtrl {
      display: none !important ;
  }
  div.anchorBL {
      display: none !important;
  }
</style>