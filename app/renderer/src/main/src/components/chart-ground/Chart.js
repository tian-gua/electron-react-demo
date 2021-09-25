import '../../global.css'

import {useEffect} from "react";
import * as echarts from "echarts"
import {Select, Row, Col} from "antd";

function Chart(props) {
    const chartId = 'chart-' + props.chartId
    useEffect(() => {
        console.log('渲染图表:', chartId)
        const chart = echarts.init(document.getElementById(chartId))
        chart.setOption({
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '2015', '2016', '2017'],
                        ['Matcha Latte', 43.3, 85.8, 93.7],
                        ['Milk Tea', 83.1, 73.4, 55.1],
                        ['Cheese Cocoa', 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 72.5, 53.8, 39.1]
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
            }
        )
    })
    return <div style={{width: '100%', height: '400px'}}>
        <Row>
            <Col span={12}>
                <Select placeholder="报表" defaultValue={props.report} style={{width: 100}}>
                    <Select.Option value='zyzb'>主要指标</Select.Option>
                    <Select.Option value='lrb'>利润表</Select.Option>
                    <Select.Option value='zcfzb'>资产负债表</Select.Option>
                    <Select.Option value='xjllb'>现金流量表</Select.Option>
                </Select>
            </Col>
            <Col span={12}>
                <Select placeholder="指标" defaultValue={props.indicator} style={{width: 100}}>
                    <Select.Option>s</Select.Option>
                </Select>
            </Col>
        </Row>
        <div id={chartId} style={{width: '100%', height: '400px'}}/>
    </div>
}

export default Chart

const indicatorMap = {
    'zyzb': [
        {
            indicatorCode: '营业收入',
            indicatorName: 'Yysr',
            unit: '亿'
        }, {
            indicatorCode: '营业收入同比增长',
            indicatorName: 'Yysrtbzz',
            unit: '亿'
        },
        {
            indicatorCode: '净利润',
            indicatorName: 'Jlr',
            unit: '亿'
        },
        {
            indicatorCode: '净利润同比增长',
            indicatorName: 'Jlrtbzz',
            unit: '亿'
        },
        {
            indicatorCode: '扣非净利润',
            indicatorName: 'Kfjlr',
            unit: '亿'
        },
        {
            indicatorCode: '扣非净利润同比增长',
            indicatorName: 'Kfjlrtbzz',
            unit: '亿'
        },
        {
            indicatorCode: '每股收益',
            indicatorName: 'Mgsy',
            unit: '亿'
        },
        {
            indicatorCode: '每股净资产',
            indicatorName: 'Mgjzc',
            unit: '亿'
        },
        {
            indicatorCode: '每股资本公积金',
            indicatorName: 'Mgzbgjj',
            unit: '亿'
        },
        {
            indicatorCode: '每股未分配利润',
            indicatorName: 'Mgwfplr',
            unit: '亿'
        },
        {
            indicatorCode: '每股经营现金流',
            indicatorName: 'Mgjyxjl',
            unit: '亿'
        },
        {
            indicatorCode: '净资产收益率',
            indicatorName: 'Jzcsyl',
            unit: '亿'
        },
        {
            indicatorCode: '净资产收益率-摊薄',
            indicatorName: 'Jzcsyltb',
            unit: '亿'
        },
        {
            indicatorCode: '总资产报酬率',
            indicatorName: 'Zzcbcl',
            unit: '亿'
        },
        {
            indicatorCode: '人力投入回报率',
            indicatorName: 'Rltrhbl',
            unit: '亿'
        },
        {
            indicatorCode: '销售毛利率',
            indicatorName: 'Xsmll',
            unit: '亿'
        },
        {
            indicatorCode: '销售净利率',
            indicatorName: 'Xsjll',
            unit: '亿'
        },
        {
            indicatorCode: '资产负债率',
            indicatorName: 'Zcfzl',
            unit: '亿'
        },
        {
            indicatorCode: '流动比率',
            indicatorName: 'Ldbl',
            unit: '亿'
        },
        {
            indicatorCode: '速动比率',
            indicatorName: 'Sdbl',
            unit: '亿'
        },
        {
            indicatorCode: '权益乘数',
            indicatorName: 'Qycs',
            unit: '亿'
        },
        {
            indicatorCode: '产权比率',
            indicatorName: 'Cqbl',
            unit: '亿'
        },
        {
            indicatorCode: '股东权益比率',
            indicatorName: 'Gdqybl',
            unit: '亿'
        },
        {
            indicatorCode: '现金流量比率',
            indicatorName: 'Xjllbl',
            unit: '亿'
        },
        {
            indicatorCode: '存货周转天数',
            indicatorName: 'Chzzts',
            unit: '亿'
        },
        {
            indicatorCode: '应收账款周转天数',
            indicatorName: 'Yszkzzts',
            unit: '亿'
        },
        {
            indicatorCode: '应付账款周转天数',
            indicatorName: 'Yfzkzzts',
            unit: '亿'
        },
        {
            indicatorCode: '现金循环周期',
            indicatorName: 'Xjxhzq',
            unit: '亿'
        },
        {
            indicatorCode: '营业周期',
            indicatorName: 'Yyzq',
            unit: '亿'
        },
        {
            indicatorCode: '总资产周转率',
            indicatorName: 'Zzczzl',
            unit: '亿'
        },
        {
            indicatorCode: '存货周转率',
            indicatorName: 'Chzzl',
            unit: '亿'
        },
        {
            indicatorCode: '应收账款周转率',
            indicatorName: 'Yszkzzl',
            unit: '亿'
        },
        {
            indicatorCode: '应付账款周转率',
            indicatorName: 'Yfzkzzl',
            unit: '亿'
        },
        {
            indicatorCode: '流动资产周转率',
            indicatorName: 'Ldzczzl',
            unit: '亿'
        },
        {
            indicatorCode: '固定资产周转率',
            indicatorName: 'Gdzczzl',
            unit: '亿'
        }
    ],
    'lrb': [
        {
            indicatorCode: '营业总收入',
            indicatorName: 'Yyzsr',
            unit: '亿'
        },
        {
            indicatorCode: '其中：营业收入',
            indicatorName: 'Yysr',
            unit: '亿'
        },
        {
            indicatorCode: '营业总成本',
            indicatorName: 'Yyzcb',
            unit: '亿'
        },
        {
            indicatorCode: '其中：营业成本',
            indicatorName: 'Yycb',
            unit: '亿'
        },
        {
            indicatorCode: '营业税金及附加',
            indicatorName: 'Yysjjfj',
            unit: '亿'
        },
        {
            indicatorCode: '销售费用',
            indicatorName: 'Xsfy',
            unit: '亿'
        },
        {
            indicatorCode: '管理费用',
            indicatorName: 'Glfy',
            unit: '亿'
        },
        {
            indicatorCode: '研发费用',
            indicatorName: 'Yffy',
            unit: '亿'
        },
        {
            indicatorCode: '财务费用',
            indicatorName: 'Cwfy',
            unit: '亿'
        },
        {
            indicatorCode: '其中：利息费用',
            indicatorName: 'Lxfy',
            unit: '亿'
        },
        {
            indicatorCode: '利息收入',
            indicatorName: 'Lxsr',
            unit: '亿'
        },
        {
            indicatorCode: '资产减值损失',
            indicatorName: 'Zcjzss',
            unit: '亿'
        },
        {
            indicatorCode: '信用减值损失',
            indicatorName: 'Xyjzss',
            unit: '亿'
        },
        {
            indicatorCode: '加：公允价值变动收益',
            indicatorName: 'Gyjzbdsy',
            unit: '亿'
        },
        {
            indicatorCode: '投资收益',
            indicatorName: 'Tzsy',
            unit: '亿'
        },
        {
            indicatorCode: '其中：对联营企业和合营企业的投资收益',
            indicatorName: 'Dlyqyhhyqydtzsy',
            unit: '亿'
        },
        {
            indicatorCode: '资产处置收益',
            indicatorName: 'Zcczsy',
            unit: '亿'
        },
        {
            indicatorCode: '其他收益',
            indicatorName: 'Qtsy',
            unit: '亿'
        },
        {
            indicatorCode: '营业利润',
            indicatorName: 'Yylr',
            unit: '亿'
        },
        {
            indicatorCode: '加：营业外收入',
            indicatorName: 'Yywsr',
            unit: '亿'
        },
        {
            indicatorCode: '其中：非流动资产处置利得',
            indicatorName: 'Fldzcczld',
            unit: '亿'
        },
        {
            indicatorCode: '减：营业外支出',
            indicatorName: 'Yywzc',
            unit: '亿'
        },
        {
            indicatorCode: '其中：非流动资产处置损失',
            indicatorName: 'Fldzcczss',
            unit: '亿'
        },
        {
            indicatorCode: '利润总额',
            indicatorName: 'Lrze',
            unit: '亿'
        },
        {
            indicatorCode: '减：所得税费用',
            indicatorName: 'Sdsfy',
            unit: '亿'
        },
        {
            indicatorCode: '净利润差额(合计平衡项目)',
            indicatorName: 'Jlrcehjphxm',
            unit: '亿'
        },
        {
            indicatorCode: '净利润',
            indicatorName: 'Jlr',
            unit: '亿'
        },
        {
            indicatorCode: '（一）持续经营净利润',
            indicatorName: 'Cxjyjlr',
            unit: '亿'
        },
        {
            indicatorCode: '归属于母公司所有者的净利润',
            indicatorName: 'Gsymgssdzdjlr',
            unit: '亿'
        },
        {
            indicatorCode: '少数股东损益',
            indicatorName: 'Ssgdsy',
            unit: '亿'
        },
        {
            indicatorCode: '扣除非经常性损益后的净利润',
            indicatorName: 'Kcfjyxsyhdjlr',
            unit: '亿'
        },
        {
            indicatorCode: '每股收益',
            indicatorName: 'Mgsy',
            unit: '亿'
        },
        {
            indicatorCode: '基本每股收益',
            indicatorName: 'Jbmgsy',
            unit: '亿'
        },
        {
            indicatorCode: '稀释每股收益',
            indicatorName: 'Xsmgsy',
            unit: '亿'
        },
        {
            indicatorCode: '其他综合收益',
            indicatorName: 'Qtzhsy',
            unit: '亿'
        },
        {
            indicatorCode: '归属母公司所有者的其他综合收益',
            indicatorName: 'Gsmgssyzdqtzhsy',
            unit: '亿'
        },
        {
            indicatorCode: '综合收益总额',
            indicatorName: 'Zhsyze',
            unit: '亿'
        },
        {
            indicatorCode: '归属于母公司股东的综合收益总额',
            indicatorName: 'Gsymgsgddzhsyze',
            unit: '亿'
        },
        {
            indicatorCode: '归属于少数股东的综合收益总额',
            indicatorName: 'Gsyssgddzhsyze',
            unit: '亿'
        },
    ],
    'zcfzb': [
        {
            indicatorCode: '货币资金',
            indicatorName: 'Hbzj',
            unit: '亿'
        },
        {
            indicatorCode: '交易性金融资产',
            indicatorName: 'Jyxjrzc',
            unit: '亿'
        },
        {
            indicatorCode: '应收票据及应收账款',
            indicatorName: 'Yspjjyszk',
            unit: '亿'
        },
        {
            indicatorCode: '其中：应收票据',
            indicatorName: 'Yspj',
            unit: '亿'
        },
        {
            indicatorCode: '应收账款',
            indicatorName: 'Yszk',
            unit: '亿'
        },
        {
            indicatorCode: '预付款项',
            indicatorName: 'Yfkx',
            unit: '亿'
        },
        {
            indicatorCode: '应收利息',
            indicatorName: 'Yslx',
            unit: '亿'
        },
        {
            indicatorCode: '其他应收款',
            indicatorName: 'Qtysk',
            unit: '亿'
        },
        {
            indicatorCode: '存货',
            indicatorName: 'Ch',
            unit: '亿'
        },
        {
            indicatorCode: '其他流动资产',
            indicatorName: 'Qtldzc',
            unit: '亿'
        },
        {
            indicatorCode: '流动资产合计',
            indicatorName: 'Ldzchj',
            unit: '亿'
        },
        {
            indicatorCode: '长期应收款',
            indicatorName: 'Cqysk',
            unit: '亿'
        },
        {
            indicatorCode: '长期股权投资',
            indicatorName: 'Cqgqtz',
            unit: '亿'
        },
        {
            indicatorCode: '其他权益工具投资',
            indicatorName: 'Qtqygjtz',
            unit: '亿'
        },
        {
            indicatorCode: '其他非流动金融资产',
            indicatorName: 'Qtfldjrzc',
            unit: '亿'
        },
        {
            indicatorCode: '投资性房地产',
            indicatorName: 'Tzxfdc',
            unit: '亿'
        },
        {
            indicatorCode: '固定资产合计',
            indicatorName: 'Gdzchj',
            unit: '亿'
        },
        {
            indicatorCode: '在建工程合计',
            indicatorName: 'Zjgchj',
            unit: '亿'
        },
        {
            indicatorCode: '无形资产',
            indicatorName: 'Wxzc',
            unit: '亿'
        },
        {
            indicatorCode: '商誉',
            indicatorName: 'Sy',
            unit: '亿'
        },
        {
            indicatorCode: '长期待摊费用',
            indicatorName: 'Cqdtfy',
            unit: '亿'
        },
        {
            indicatorCode: '其他非流动资产',
            indicatorName: 'Qtfldzc',
            unit: '亿'
        },
        {
            indicatorCode: '非流动资产合计',
            indicatorName: 'Fldzchj',
            unit: '亿'
        },
        {
            indicatorCode: '资产合计',
            indicatorName: 'Zchj',
            unit: '亿'
        },
        {
            indicatorCode: '短期借款',
            indicatorName: 'Dqjk',
            unit: '亿'
        },
        {
            indicatorCode: '应付票据及应付账款',
            indicatorName: 'Yfpjjyfzk',
            unit: '亿'
        },
        {
            indicatorCode: '应付票据',
            indicatorName: 'Yfpj',
            unit: '亿'
        },
        {
            indicatorCode: '应付账款',
            indicatorName: 'Yfzk',
            unit: '亿'
        },
        {
            indicatorCode: '预收款项',
            indicatorName: 'Yskx',
            unit: '亿'
        },
        {
            indicatorCode: '合同负债',
            indicatorName: 'Htfz',
            unit: '亿'
        },
        {
            indicatorCode: '应付职工薪酬',
            indicatorName: 'Yfzgxc',
            unit: '亿'
        },
        {
            indicatorCode: '应交税费',
            indicatorName: 'Yjsf',
            unit: '亿'
        },
        {
            indicatorCode: '应付利息',
            indicatorName: 'Yflx',
            unit: '亿'
        },
        {
            indicatorCode: '其他应付款',
            indicatorName: 'Qtyfk',
            unit: '亿'
        },
        {
            indicatorCode: '其他流动负债',
            indicatorName: 'Qtldfz',
            unit: '亿'
        },
        {
            indicatorCode: '流动负债合计',
            indicatorName: 'Ldfzhj',
            unit: '亿'
        },
        {
            indicatorCode: '长期借款',
            indicatorName: 'Cqjk',
            unit: '亿'
        },
        {
            indicatorCode: '应付债券',
            indicatorName: 'Yfzq',
            unit: '亿'
        },
        {
            indicatorCode: '长期应付款合计',
            indicatorName: 'Cqyfkhj',
            unit: '亿'
        },
        {
            indicatorCode: '长期应付款',
            indicatorName: 'Cqyfk',
            unit: '亿'
        },
        {
            indicatorCode: '专项应付款',
            indicatorName: 'Zxyfk',
            unit: '亿'
        },
        {
            indicatorCode: '其他非流动负债',
            indicatorName: 'Qtfldfz',
            unit: '亿'
        },
        {
            indicatorCode: '非流动负债合计',
            indicatorName: 'Fldfzhj',
            unit: '亿'
        },
        {
            indicatorCode: '负债合计',
            indicatorName: 'Fzhj',
            unit: '亿'
        },
        {
            indicatorCode: '实收资本(或股本)',
            indicatorName: 'Sszb',
            unit: '亿'
        },
        {
            indicatorCode: '资本公积',
            indicatorName: 'Zbgj',
            unit: '亿'
        },
        {
            indicatorCode: '其他综合收益',
            indicatorName: 'Qtzhsy',
            unit: '亿'
        },
        {
            indicatorCode: '盈余公积',
            indicatorName: 'Yygj',
            unit: '亿'
        },
        {
            indicatorCode: '未分配利润',
            indicatorName: 'Wfplr',
            unit: '亿'
        },
        {
            indicatorCode: '归属于母公司股东权益合计',
            indicatorName: 'Gsymgsgdqyhj',
            unit: '亿'
        },
        {
            indicatorCode: '少数股东权益',
            indicatorName: 'Ssgdqy',
            unit: '亿'
        },
        {
            indicatorCode: '股东权益合计',
            indicatorName: 'Gdqyhj',
            unit: '亿'
        },
        {
            indicatorCode: '负债和股东权益总计',
            indicatorName: 'Fzhgdqyzj',
            unit: '亿'
        }
    ],
    'xjllb': [
        {
            indicatorCode: '销售商品、提供劳务收到的现金',
            indicatorName: 'Xsspsddxj',
            unit: '亿'
        },
        {
            indicatorCode: '收到的税费返还',
            indicatorName: 'Sffh',
            unit: '亿'
        },
        {
            indicatorCode: '收到其他与经营活动有关的现金',
            indicatorName: 'Qtjyhd',
            unit: '亿'
        },
        {
            indicatorCode: '经营活动现金流入小计',
            indicatorName: 'Jyhdxjlrxj',
            unit: '亿'
        },
        {
            indicatorCode: '购买商品、接受劳务支付的现金',
            indicatorName: 'Gmspzfdxj',
            unit: '亿'
        },
        {
            indicatorCode: '支付给职工以及为职工支付的现金',
            indicatorName: 'Zgzfdxj',
            unit: '亿'
        },
        {
            indicatorCode: '支付的各项税费',
            indicatorName: 'Zfdgxsf',
            unit: '亿'
        },
        {
            indicatorCode: '支付其他与经营活动有关的现金',
            indicatorName: 'Zfqtyjjhdygdxj',
            unit: '亿'
        },
        {
            indicatorCode: '经营活动现金流出小计',
            indicatorName: 'Jyhdxjlcxj',
            unit: '亿'
        },
        {
            indicatorCode: '经营活动产生的现金流量净额',
            indicatorName: 'Jyhdcsdxjllje',
            unit: '亿'
        },
        {
            indicatorCode: '收回投资收到的现金',
            indicatorName: 'Shtzsddxj',
            unit: '亿'
        },
        {
            indicatorCode: '取得投资收益收到的现金',
            indicatorName: 'Qdtzsysddxj',
            unit: '亿'
        },
        {
            indicatorCode: '处置固定资产、无形资产和其他长期资产收回的现金净额',
            indicatorName: 'Qtcqzcshdxjje',
            unit: '亿'
        },
        {
            indicatorCode: '处置子公司及其他营业单位收到的现金净额',
            indicatorName: 'Qtyydwsddxjje',
            unit: '亿'
        },
        {
            indicatorCode: '收到其他与投资活动有关的现金',
            indicatorName: 'Sdqtytzhdygdxj',
            unit: '亿'
        },
        {
            indicatorCode: '投资活动现金流入小计',
            indicatorName: 'Tzhdxjlrxj',
            unit: '亿'
        },
        {
            indicatorCode: '购建固定资产、无形资产和其他长期资产支付的现金',
            indicatorName: 'Cqzczfdxj',
            unit: '亿'
        },
        {
            indicatorCode: '投资支付的现金',
            indicatorName: 'Tzzfdxj',
            unit: '亿'
        },
        {
            indicatorCode: '取得子公司及其他营业单位支付的现金净额',
            indicatorName: 'Qtyydwzfdxjje',
            unit: '亿'
        },
        {
            indicatorCode: '支付其他与投资活动有关的现金',
            indicatorName: 'Zfqtytzhdygdxj',
            unit: '亿'
        },
        {
            indicatorCode: '投资活动现金流出小计',
            indicatorName: 'Tzhdxjlcxj',
            unit: '亿'
        },
        {
            indicatorCode: '投资活动产生的现金流量净额',
            indicatorName: 'Tzhdcsdxjllje',
            unit: '亿'
        },
        {
            indicatorCode: '吸收投资收到的现金',
            indicatorName: 'Xstzsddxj',
            unit: '亿'
        },
        {
            indicatorCode: '取得借款收到的现金',
            indicatorName: 'Qdjksddxj',
            unit: '亿'
        },
        {
            indicatorCode: '发行债券收到的现金',
            indicatorName: 'Fxzqsddxj',
            unit: '亿'
        },
        {
            indicatorCode: '收到其他与筹资活动有关的现金',
            indicatorName: 'Sdqtyczhdygdxj',
            unit: '亿'
        },
        {
            indicatorCode: '筹资活动现金流入小计',
            indicatorName: 'Czhdxjlrxj',
            unit: '亿'
        },
        {
            indicatorCode: '偿还债务支付的现金',
            indicatorName: 'Chzwzfdxj',
            unit: '亿'
        },
        {
            indicatorCode: '分配股利、利润或偿付利息支付的现金',
            indicatorName: 'Cflxzfdxj',
            unit: '亿'
        },
        {
            indicatorCode: '支付其他与筹资活动有关的现金',
            indicatorName: 'Zfqtyczhdygdxj',
            unit: '亿'
        },
        {
            indicatorCode: '筹资活动现金流出小计',
            indicatorName: 'Czhdxjlcxj',
            unit: '亿'
        },
        {
            indicatorCode: '筹资活动产生的现金流量净额',
            indicatorName: 'Czhdcsdxjlje',
            unit: '亿'
        },
        {
            indicatorCode: '汇率变动对现金及现金等价物的影响',
            indicatorName: 'Hlbddxjjxjdjwdyx',
            unit: '亿'
        },
        {
            indicatorCode: '现金及现金等价物净增加额',
            indicatorName: 'Xjjxjdjwjezj',
            unit: '亿'
        },
        {
            indicatorCode: '加：期初现金及现金等价物余额',
            indicatorName: 'Qcxjjxjdjwye',
            unit: '亿'
        },
        {
            indicatorCode: '期末现金及现金等价物余额',
            indicatorName: 'Qmxjjxjdjwye',
            unit: '亿'
        }
    ]
}
