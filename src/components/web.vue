<template>
  <div class="web">
    <div id="circleChart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: 'web',
  data () {
    return {
      msg: 'web',
    }
  },
  methods: {
    drawecharts() {
      this.drawCircles = echarts.init(document.getElementById("circleChart"));
      this.drawCircles.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['HTML5','css3','JavaScript','VUE','Photoshop','SEO','小程序','大数据展示','git','Flash','After Effects','Python在学'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '技术熟练度',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            name: '年',
            min: 0,
            max: 6,
            interval: 1,
            axisLabel: {
                formatter: '{value} 年'
            }
        }
    ],
    series: [
        {
            name:'技术熟练度',
            type:'bar',
            data:[88, 90,73,87, 80,66, 86,89,77, 59,55,13]
        },
        {
            name:'项目熟练度',
            type:'bar',
            data:[90,86,75,88, 80, 63, 80,88,83, 59, 55,9]
        },
        {
            name:'使用年限',
            type:'line',
            yAxisIndex: 1,
            data:[5, 5, 3, 2, 6, 4,1,2,4, 6, 2,0.5]
        }
    ]
    
    
    });
    }
  },
  mounted() {
    this.drawecharts();
  }
  }
</script>
<style scoped>
#circleChart{height: 100vh;}
</style>
