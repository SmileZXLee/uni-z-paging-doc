### vue2 项目迁移 vue3，必须适配的部分

::: danger 注意
目前尚不建议您在vue3中使用`z-paging`，在vue3中存在以下bug，需等uni-app官方修复：   
① 在微信小程序中，下拉刷新后无法结束下拉刷新状态。[详情](https://ask.dcloud.net.cn/question/137684)  
② 在h5中，导航栏会遮挡住z-paging列表。[详情](https://ask.dcloud.net.cn/question/139069)  
③ 聊天记录模式无法立即滚动到底部，同时分页滚动也异常。[详情](https://ask.dcloud.net.cn/question/139432)
:::

::: tip 提示
z-paging由 <Badge text="2.1.4"/> 起兼容vue3，请确保已将z-paging更新至`v2.1.4`或以上版本
:::

### ① `slot="xxx"` 需要修改为 `v-slot:xxx`，并使用`template`包住：

* `vue2`
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
	<view slot="top">我是固定在顶部的view</view>
</z-paging>
```
* `vue3`
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
	<template v-slot:top>
	    <view>我是固定在顶部的view</view>
	</template>
</z-paging>
```

### ② `slot-scope`写法调整：

* `vue2`
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
	<custom-refresher slot="refresher" slot-scope="{refresherStatus}" :status="refresherStatus">
</z-paging>
```
* `vue3`
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
	<template v-slot:refresher="slotProps">
		<custom-refresher :status="slotProps.refresherStatus" />
	</template>
</z-paging>
```

### ③ 模块导出写法调整：
* `vue2`
```js
module.exports.X = X;
```
* `vue3`
```js
export default { X };
```

### 其他详见uni-app官方文档：[vue2 项目迁移 vue3](https://uniapp.dcloud.io/migration-to-vue3)