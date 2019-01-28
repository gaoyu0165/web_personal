<template>
  <div class="data">
    <div class="top"></div>
    <div id="circleChart" style="height: 100%;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "help",
  data() {
    return {
      //地点分布图
      // data: [
      //   { name: "海门", value: 139 },
      //   { name: "鄂尔多斯", value: 112 },
      //   { name: "招远", value: 152 }
      // ],
      // geoCoordMap: {
      //   海门: [121.15, 31.89],
      //   鄂尔多斯: [109.781327, 39.608266],
      //   招远: [120.38, 37.35]
      // }
    };
  },
  methods: {
    drawecharts() {
      this.drawCircles = echarts.init(document.getElementById("circleChart"));
      var geoCoordMap = this.geoCoordMap;
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      this.drawCircles.setOption({
        color: [
          "#c23531",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ],
        title: {
          top:"10%",
          left:'10%',
          text: "深圳市公安局南山分局出入境大厅综合分析图(虚拟数据)",
        //   subtext: "这里只是一个小部分展示，很多其他大数据没时间做，见谅",
          textStyle:{
              align:"center",
              textBorderColor:'#e11313',
              },
        },
        grid:{
            top:"15%"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
        top:'9%',
          data: ["客流量", "消费金额"],
          textStyle: {
            color: "#fff"
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: {
          type: "category",
          name: "日",
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          },
          boundaryGap: true, //每天两根柱子的显示方式
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30"
          ]
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          },
          axisLabel: {
            formatter: "{value}"
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.3)",
              type: "dotted"
            }
          }
        },
        series: [
          {
            name: "客流量",
            type: "line",
            data: [
              3464,
              3854,
              3492,
              2935,
              3406,
              4024,
              3254,
              3854,
              3957,
              3828,
              3429,
              2945,
              4354,
              4294,
              5325,
              4930,
              6325,
              6034,
              5846,
              5980,
              6439,
              6328,
              5486,
              5193,
              4839,
              4578,
              4893,
              4298,
              4023,
              3879
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "消费金额",
            type: "line",
            data: [
              6834,
              7734,
              7937,
              7690,
              8392,
              8690,
              6739,
              7897,
              8897,
              9087,
              9655,
              9230,
              8979,
              10827,
              7860,
              6889,
              7870,
              8950,
              9070,
              11279,
              13899,
              11857,
              9867,
              9478,
              8979,
              8965,
              8876,
              7896,
              7789,
              7797
            ],
            markPoint: {
              //自定义最高最低
              // data : [
              //     {name : '年最高', value : 7569, xAxis: 7, yAxis: 1183},
              //     {name : '年最低', value : 1256, xAxis: 20, yAxis: 11234}
              // ]
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]

        // title: {
        //   text: "全国主要城市空气质量 - 百度地图",
        //   subtext: "data from PM25.in",
        //   left: "center"
        // },
        // tooltip: {
        //   trigger: "item"
        // },
        // bmap: {
        //   center: [104.114129, 37.550339],
        //   zoom: 5,
        //   roam: true,
        //   mapStyle: {
        //     styleJson: [
        //       {
        //         featureType: "water",
        //         elementType: "all",
        //         stylers: {
        //           color: "#d1d1d1"
        //         }
        //       },
        //       {
        //         featureType: "land",
        //         elementType: "all",
        //         stylers: {
        //           color: "#f3f3f3"
        //         }
        //       },
        //       {
        //         featureType: "railway",
        //         elementType: "all",
        //         stylers: {
        //           visibility: "off"
        //         }
        //       },
        //       {
        //         featureType: "highway",
        //         elementType: "all",
        //         stylers: {
        //           color: "#fdfdfd"
        //         }
        //       },
        //       {
        //         featureType: "highway",
        //         elementType: "labels",
        //         stylers: {
        //           visibility: "off"
        //         }
        //       },
        //       {
        //         featureType: "arterial",
        //         elementType: "geometry",
        //         stylers: {
        //           color: "#fefefe"
        //         }
        //       },
        //       {
        //         featureType: "arterial",
        //         elementType: "geometry.fill",
        //         stylers: {
        //           color: "#fefefe"
        //         }
        //       },
        //       {
        //         featureType: "poi",
        //         elementType: "all",
        //         stylers: {
        //           visibility: "off"
        //         }
        //       },
        //       {
        //         featureType: "green",
        //         elementType: "all",
        //         stylers: {
        //           visibility: "off"
        //         }
        //       },
        //       {
        //         featureType: "subway",
        //         elementType: "all",
        //         stylers: {
        //           visibility: "off"
        //         }
        //       },
        //       {
        //         featureType: "manmade",
        //         elementType: "all",
        //         stylers: {
        //           color: "#d1d1d1"
        //         }
        //       },
        //       {
        //         featureType: "local",
        //         elementType: "all",
        //         stylers: {
        //           color: "#d1d1d1"
        //         }
        //       },
        //       {
        //         featureType: "arterial",
        //         elementType: "labels",
        //         stylers: {
        //           visibility: "off"
        //         }
        //       },
        //       {
        //         featureType: "boundary",
        //         elementType: "all",
        //         stylers: {
        //           color: "#fefefe"
        //         }
        //       },
        //       {
        //         featureType: "building",
        //         elementType: "all",
        //         stylers: {
        //           color: "#d1d1d1"
        //         }
        //       },
        //       {
        //         featureType: "label",
        //         elementType: "labels.text.fill",
        //         stylers: {
        //           color: "#999999"
        //         }
        //       }
        //     ]
        //   }
        // },
        // series: [
        //   {
        //     name: "pm2.5",
        //     type: "scatter",
        //     coordinateSystem: "bmap",
        //     data: convertData(this.data),
        //     symbolSize: function(val) {
        //       return val[2] / 10;
        //     },
        //     label: {
        //       normal: {
        //         formatter: "{b}",
        //         position: "right",
        //         show: false
        //       },
        //       emphasis: {
        //         show: true
        //       }
        //     },
        //     itemStyle: {
        //       normal: {
        //         color: "purple"
        //       }
        //     }
        //   }
        //   // {
        //   //     name: 'Top 5',
        //   //     type: 'effectScatter',
        //   //     coordinateSystem: 'bmap',
        //   //     data: convertData(this.data.sort(function (a, b) {
        //   //         return b.value - a.value;
        //   //     }).slice(0, 6)),
        //   //     symbolSize: function (val) {
        //   //         return val[2] / 10;
        //   //     },
        //   //     showEffectOn: 'render',
        //   //     rippleEffect: {
        //   //         brushType: 'stroke'
        //   //     },
        //   //     hoverAnimation: true,
        //   //     label: {
        //   //         normal: {
        //   //             formatter: '{b}',
        //   //             position: 'right',
        //   //             show: true
        //   //         }
        //   //     },
        //   //     itemStyle: {
        //   //         normal: {
        //   //             color: 'purple',
        //   //             shadowBlur: 10,
        //   //             shadowColor: '#333'
        //   //         }
        //   //     },
        //   //     zlevel: 1
        //   // }
        // ]
      });
    }
  },
  mounted() {
    this.drawecharts();
  },
  components: {
    // Vheader
  }
};
</script>
<style scoped>
.data {
  background: -webkit-radial-gradient(circle, #819bb4, #5674b6);
  height: 100vh;
}
p {
  font-size: 40px;
  color: #333;
  padding-top: 40px;
}
</style>
