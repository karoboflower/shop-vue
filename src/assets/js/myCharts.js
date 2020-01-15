/**
 * 各种画echarts图表的方法都封装在这里
 * 注意：这里echarts没有采用按需引入的方式，只是为了方便学习
 */

import echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //首页折线图
                    indexEchart: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = { 
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data:['成交量','成交额']
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: ['2019-07-12','2019-07-13','2019-07-14','2019-07-15','2019-07-16','2019-07-17','2019-07-18']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            color:[	'#8A2BE2','#7FFFAA'],
                            series: [
                                {
                                    name:'成交量',
                                    type:'line',
                                    stack: '总量',
                                    data:[120, 132, 101, 134, 90, 230, 210]
                                },
                                {
                                    name:'成交额',
                                    type:'line',
                                    stack: '总量',
                                    data:[220, 182, 191, 234, 290, 330, 310]
                                },
                               
                            ]
                        };

                        this.chart.setOption(optionData);
                    },
                }
            }
        }
    })
}

export default {
    install
}