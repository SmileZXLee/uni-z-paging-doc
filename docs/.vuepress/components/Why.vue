<template>
    <div class="items">
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="container">
                <div class="box">
                    <div class="icon">{{ item.icon }}</div>
                    <div class="title">{{ item.title }}</div>
                    <div class="details">{{ item.details }}</div>
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
                    details: '仅需两步轻松完成完整下拉刷新和上拉加载更多功能，分页全自动管理！亦可通过极少代码轻松完成标准页面容器布局。'
                },{
                    icon: '⚒️',
                    title: '丰富的自定义配置！',
                    details: '支持自定义下拉刷新、上拉加载更多，支持自动管理空数据图、支持聊天分页、本地分页，支持国际化等数百项个性化配置。'
                },{
                    icon: '🚀',
                    title: '高性能！',
                    details: '使用wxs+renderjs在视图层实现下拉刷新，丝滑流畅零卡顿；强大的兼容各平台的虚拟列表算法，轻松渲染百万级列表数据。'
                },{
                    icon: '🌍',
                    title: '全平台兼容！',
                    details: '支持ios、安卓、鸿蒙next；h5；微信小程序、QQ小程序、支付宝小程序、抖音小程序、百度小程序、飞书小程序、快应用等平台。'
                },{
                    icon: '🔥',
                    title: '热门且流行！',
                    details: '在插件市场+npm中已被开发者下载超10万次，质量、扩展性和稳定性经过数万个项目检验。在uniapp插件市场热门总榜中排名前十。'
                },{
                    icon: '🌟',
                    title: '广受好评且可靠！',
                    details: '由2021年开源至今已迭代近200个版本，在插件市场评分为4.8/5分。建有总计容纳7000人的QQ群，使用问题、bug及需求解答及时。'
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
        background-color: rgba(179, 229, 252, 0.2);
        border-radius: 10px;
        height: 100%;
        transition: box-shadow 0.3s ease-in-out;
    }
    .container:hover {
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1), 0 12px 20px rgba(0, 0, 0, 0.05);
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