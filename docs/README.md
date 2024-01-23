::: danger 2024新年快乐！！🎉🧨🎉🧨
感谢大家这一年来对`z-paging`的支持，祝大家在新的一年里工作顺利，事事顺心 ❤️❤️  
<span style="font-size: 14px;font-weight: bold;">工作再忙，也要记得照顾好自己･◡･</span>
:::

::: tip z-paging-x
`z-paging-x`现已支持uniapp x，持续完善中，插件地址👉🏻 [https://ext.dcloud.net.cn/plugin?name=z-paging-x](https://ext.dcloud.net.cn/plugin?name=z-paging-x)  
什么是uniapp x？  
uni-app x是下一代 uni-app，是一个跨平台应用开发引擎，它没有使用js和webview，它基于 uts 语言。在App端，uts在iOS编译为swift、在Android编译为kotlin，完全达到了原生应用的功能、性能。  
这是一个uniapp首创的跨平台开发方式，可以使用vue的写法构造原生性能的应用，性能超越flutter、rn等，详情可参见 [https://doc.dcloud.net.cn/uni-app-x](https://doc.dcloud.net.cn/uni-app-x)
:::

```html                                  
  ____     _ __   __ _  __ _(_)_ __   __ _ 
 |_  /____| '_ \ / _` |/ _` | | '_ \ / _` |
  / /_____| |_) | (_| | (_| | | | | | (_| |
 /___|    | .__/ \__,_|\__, |_|_| |_|\__, |
          |_|          |___/         |___/   文档
—————————————————————————————————————————————————
v2.7.5 (2024-01-23)
- by ZXLee 
感谢使用^_^
```
###  ⭐️ 开源不易~ 如果您觉得`z-paging`还不错的话，可以点一个star鼓励一下(＾ω＾)👉🏻  [![Github stars](https://img.shields.io/github/stars/smilezxlee/uni-z-paging?logo=GitHub&style=flat)](https://github.com/SmileZXLee/uni-z-paging)
## 基本使用  

<code-group>
<code-block title="选项式api(vue2/3)" active>
```html
<template>
    <z-paging ref="paging" v-model="dataList" @query="queryList">
		<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
		<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
        <view class="item" v-for="(item,index) in dataList" :key="index">
            <view class="item-title">{{item.title}}</view>
        </view>
    </z-paging>
</template>

<script>
    export default {
        data() {
            return {
				// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
                dataList: []
            };
        },
        methods: {
			// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用this.$refs.paging.reload()即可
            queryList(pageNo, pageSize) {
				// 此处请求仅为演示，请替换为自己项目中的请求
                this.$request.queryList({ pageNo,pageSize }).then(res => {
					// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
                	this.$refs.paging.complete(res.data.list);
                }).catch(res => {
                	// 如果请求失败写this.$refs.paging.complete(false)，会自动展示错误页面
                	// 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
                	// 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
                	this.$refs.paging.complete(false);
                })
            }
        },
    };
</script>
```
</code-block>

<code-block title="组合式api(vue3)">
```html  
<template>
    <z-paging ref="paging" v-model="dataList" @query="queryList">
    	<!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
    	<!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
        <view class="item" v-for="(item,index) in dataList" :key="index">
            <view class="item-title">{{item.title}}</view>
        </view>
    </z-paging>
</template>

<script setup>
    import { ref } from 'vue';
    const paging = ref(null)
	// v-model绑定的这个变量不要在分页请求结束中自己赋值，直接使用即可
    const dataList = ref([])
    
	// @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用paging.value.reload()即可
    const queryList = (pageNo, pageSize) => {
		// 此处请求仅为演示，请替换为自己项目中的请求
        request.queryList({ pageNo,pageSize }).then(res => {
			// 将请求结果通过complete传给z-paging处理，同时也代表请求结束，这一行必须调用
            paging.value.complete(res.data.list);
        }).catch(res => {
			// 如果请求失败写paging.value.complete(false);
			// 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
			// 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
			paging.value.complete(false);
		})
    }
</script>
```
</code-block>
</code-group>



<!-- <center style="margin-bottom:10px;"><img src="https://visitor-badge.glitch.me/badge?page_id=smilezxlee.z-paging" /></center> -->
<!-- <center style="margin-bottom:10px;"><img src="https://api.z-notify.zxlee.cn/v1/public/statistics/8293556910106066944/badge?title=访问人次&style=flat" /></center> -->
<div style="margin-bottom:-80px; display:flex;justify-content: center;font-size:13px;">Copyright 2021-2023 z-paging | <a style="color: #014084;margin-left:5px;" href="https://beian.miit.gov.cn/" target="_blank">闽ICP备17015849号-1</a></div>
