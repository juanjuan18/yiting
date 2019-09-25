import { Map, Marker } from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation'

import React, { Component } from 'react';
 
class Ditu extends Component {
 
    componentDidMount() {
        // const { BMap, BMAP_STATUS_SUCCESS } = window
        // var map = new BMap.Map("allmap"); // 创建Map实例
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
        // var p1 = new BMap.Point(116.301934, 39.977552);
        // var p2 = new BMap.Point(116.508328, 39.919141);
        // var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });
        // driving.search(p1, p2);
       
        const { BMap, BMAP_STATUS_SUCCESS ,BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS} = window
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 20);
        let lng, lat, start, end
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            lng = r.point.lng;
            lat = r.point.lat
            var pt1=r.point
            // console.log(r.point)
            var geoc = new BMap.Geocoder();
            geoc.getLocation(pt1, function(rs){
                var addComp = rs.addressComponents;
                start=addComp.province  + addComp.city + addComp.district  + addComp.street
                // alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            });
            // alert('您的位置：'+r.point.lng+','+r.point.lat);
          }
          else {
            alert('failed' + this.getStatus());
          }
        }, { enableHighAccuracy: true })
        map.enableScrollWheelZoom(true);   //启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom(true);    //启用地图惯性拖拽，默认禁用
        // 百度地图API功能
        // var map = new BMap.Map("allmap");
        // map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
      
        // 用经纬度设置地图中心点
        function theLocation() {
          if (lng != "" && lat != "") {
            map.clearOverlays();
            var new_point = new BMap.Point(lng, lat);
            var marker = new BMap.Marker(new_point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(new_point);
          }
        }
        var geoc = new BMap.Geocoder();
      
        map.addEventListener("click", function (e) {
          var pt = e.point;
          // console.log(pt)
          geoc.getLocation(pt, function (rs) {
            var addComp = rs.addressComponents;
            end = addComp.city + addComp.district + addComp.street
      
            //百度地图API功能
            var output ="从"+ start+"   到   "+end;
            var searchComplete = function (results) {
              // console.log(results)
              if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
                return;
              }
              var plan = results.getPlan(0);
              output += plan.getDuration(true) + "\n";                //获取时间
              output += "总路程为：";
              output += plan.getDistance(true) + "\n";             //获取距离
            }
            var transit = new BMap.DrivingRoute(map, {
              renderOptions: { map: map },
              onSearchComplete: searchComplete,
              onPolylinesSet: function () {
                setTimeout(function () { alert(output) }, "1000");
              }
            });
            transit.search(start, end);
            // alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
          });
        });
      
        //驾车线路
        // var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
        //   $("#result").click(function(){
        //       map.clearOverlays(); 
        //       var i=$("#driving_way select").val();
        //       search(start,end,routePolicy[i]); 
        //       function search(start,end,route){ 
        //           var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: route});
        //           driving.search(start,end);
        //       }
        //   });

        
    }
 
    render() {
        return (
            <div id="allmap" style={{ position: "absolute", top: 0, left: 0, width: '100vw', height: '100vh' }}></div>
        );
    }
}
export default Ditu;
