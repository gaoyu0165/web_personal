<template>
  <div class="web">

<div class="data-show">
<p class="main-inner-p">深圳出入境智慧大厅大数据分析项目</p>
  <el-carousel :interval="4000" type="card" height="28rem" class="main-inner-item">
    <el-carousel-item v-for="item in items" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      <img :src="item" alt="猪东东">
    </el-carousel-item>
  </el-carousel>    
  </div>

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
      items:[
          "/static/bigimg/data5.jpg",
          "/static/bigimg/data1.jpg",
          "/static/bigimg/data2.jpg",
          "/static/bigimg/data3.jpg",
          "/static/bigimg/data4.jpg",
      ]    
      
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
    title:{
        text:"自身主要技术参考值(请多包涵)",
        left:"30%",
        top:"3%",
        textStyle:{
            align:"center",
            textBorderColor:'#e11313',
            },    
    },    
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            axisLine:{
                lineStyle:{
                    width:2
                }
            },     
            axisLabel:{
                interval:0  //横轴各个技术点的最小间隔
            },       
            data: ['HTML5','css3','JavaScript','VUE','echarts','Photoshop','SEO','小程序','大数据','git','Flash','After Effects','canvas','VUEX','axios','微信公众号','Python在学'],
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
            max: null,
            interval: 20,
            axisLine:{
                lineStyle:{
                    width:2
                }
            },
            axisLabel: {
                formatter: '{value} %',
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
            barMaxWidth:13,
            data:[88, 90,73,87,86, 66,66, 86,89,77, 59,53,40,88,86,82,13]
        },
        {
            name:'项目熟练度',
            type:'bar',
            barMaxWidth:13,
            data:[90,86,81,88, 88,82, 47, 80,88,83, 39, 35,45,82,88,54,9]
        },
        {
            name:'使用年限',
            type:'line',
            yAxisIndex: 1,
            data:[5, 5, 3, 2, 2,6, 4,1,2,4, 6, 2,1,2,2,1,0.5]
        }
    ],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 20,
                color: '#A6F28E'
            }, {
                gt: 20,
                lte: 40,
                color: '#62B8F9'
            }, {
                gt: 40,
                lte: 60,
                color: '#3BA500'
            }, {
                gt: 60,
                lte: 80,
                color: '#0000FE'
            }, {
                gt: 80,
                lte: 100,
                color: '#d53a35'
            },],
            outOfRange: {
                color: '#999'
            }
        }    
    
    });
    }
  },
  mounted() {
    this.drawecharts();
  }
  }
</script>
<style scoped>
@media screen and (max-width: 801px) {
.el-carousel{margin: 1.5rem 0 0rem!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 


#circleChart{height: 100vh;}
.data-show{height: 100vh;}
#app .main-inner-p{text-align: center;font-size: 2rem;padding: 5rem 0 3rem}
.el-carousel{margin: 1rem 0 3rem}
.el-carousel__item  img{width: 100%}
</style>
