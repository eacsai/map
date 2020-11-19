  if( typeof map != 'undefined' ){
    map.addEventListener("zoomend", function(e){
      layer.msg('地图级别: '+map.getZoom() + (map.getZoom() > 13?', 示例中只有13级地图,超过的无法显示!':''), {'offset':'b'});
    });
  }
  if( typeof map2 != 'undefined' ){
    map2.addEventListener("zoomend", function(e){
      layer.msg('地图级别: '+map.getZoom() + (map.getZoom() > 13?', 示例中只有13级地图,超过的无法显示!':''), {'offset':'b'});
    });
  }