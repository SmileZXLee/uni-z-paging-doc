<template>
    <div class="items">
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="container">
                <div class="box">
                    <div class="icon">{{ item.icon }}</div>
                    <div class="title">{{ item.title }}</div>
                    <div class="details" v-html="item.details"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
                    icon: '💧',
                    title: '像喝水一样简单！',
                    details: '<span style="font-weight: bold;color: #007aff;">仅需两步</span>即可实现完整下拉刷新和上拉加载更多功能，分页全自动管理！亦可通过<span style="font-weight: bold;color: #007aff;">极少代码</span>轻松完成标准页面容器布局。应用灵活且广泛。'
                },{
                    icon: '⚒️',
                    title: '丰富的自定义配置！',
                    details: '支持自定义下拉刷新、上拉加载更多，支持自动管理空数据图，支持下拉进入二楼，支持聊天分页、本地分页，支持国际化等<span style="font-weight: bold;color: #007aff;">数百项个性化配置</span>。'
                },{
                    icon: '🚀',
                    title: '高性能！',
                    details: '使用wxs+renderjs在视图层实现下拉刷新，<span style="font-weight: bold;color: #007aff;">丝滑流畅零卡顿</span>。强大的兼容各平台的虚拟列表算法，轻松渲染<span style="font-weight: bold;color: #007aff;">百万级列表数据</span>。底层细节优化及兼容处理。'
                },{
                    icon: '🌍',
                    title: '全平台兼容！',
                    details: '支持ios、安卓、鸿蒙Next；h5；微信小程序、QQ小程序、支付宝小程序、抖音小程序、百度小程序、快手小程序、飞书小程序、快应用等<span style="font-weight: bold;color: #007aff;">十几个平台</span>。'
                },{
                    icon: '🔥',
                    title: '热门且流行！',
                    details: '在插件市场+npm中已被开发者下载<span style="font-weight: bold;color: #007aff;">超10万次</span>，质量、扩展性和稳定性经过<span style="font-weight: bold;color: #007aff;">数万个项目</span>检验。在uniapp插件市场热门总榜中稳定<span style="font-weight: bold;color: #007aff;">排名前十</span>。'
                },{
                    icon: '🌟',
                    title: '广受好评且可靠！',
                    details: '由2021年开源至今已迭代<span style="font-weight: bold;color: #007aff;">100+</span>个版本，在插件市场评分<span style="font-weight: bold;color: #007aff;">4.8</span>/5.0分。建有总计容纳近万人的使用答疑QQ群。遵循<span style="font-weight: bold;color: #007aff;">MIT开源协议</span>，商用无需任何授权和费用。'
                }]
			}
		}
	}
</script>

<style scoped>
    .items {
        display: flex;
        flex-wrap: wrap;
        margin: -8px;
        margin-top: 20px;
    }
    @media (min-width: 640px) {
        .item {
            width: 100%;
            box-sizing: border-box;
            padding: 8px;
        }
    }
    @media (min-width: 768px) {
        .item {
            width: calc(100% / 2);
            box-sizing: border-box;
            padding: 8px;
        }
    }
    @media (min-width: 960px) {
        .item {
            width: calc(100% / 3);
            box-sizing: border-box;
            padding: 8px;
        }
    }
    .container {
        background-color: #f6f6f7;
        border-radius: 10px;
        height: 100%;
        transition: box-shadow 0.3s ease-in-out;
    }
    .container:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 20px rgba(0, 0, 0, 0.05);
    }
    .box {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 18px;
        border-radius: 6px;
        background-color: rgba(142, 150, 170, .14);
        width: 48px;
        height: 48px;
        font-size: 24px;
        transition: background-color .25s;
    }
    .title {
        line-height: 23px;
        font-size: 17px;
        font-weight: 600;
    }
    .details {
        flex-grow: 1;
        padding-top: 8px;
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(60, 60, 67, .78);
    }
</style>