::: warning 请注意
① z-paging由 <Badge text="2.1.4"/> 起兼容vue3，请确保已将z-paging更新至`v2.1.4`或以上版本  
② 请将HbuilderX升级到`3.3.13.20220314`或以上版本
:::


### 从vue2目迁移到vue3，必须适配的部分

#### ① `slot="xxx"` 需要修改为 `v-slot:xxx`，并使用`template`包住：

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

#### ② `slot-scope`写法调整：

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

#### ③ 模块导出写法调整：
* `vue2`
```js
module.exports.X = X;
```
* `vue3`
```js
export default { X };
```

#### 其他详见uni-app官方文档：[vue2 项目迁移 vue3](https://uniapp.dcloud.io/migration-to-vue3)  
#### 
***
### 支持vue3的setup写法
```html  
<template>
    <view class="content">
        <z-paging ref="paging" v-model="dataList" @query="queryList">
            <view class="item" v-for="(item,index) in dataList">
                <view class="item-title">{{item.title}}</view>
            </view>
        </z-paging>
    </view>
</template>

<script>
    import { ref } from 'vue';
    export default {
    	setup() {
    		const paging = ref(null)
    		let dataList = ref([])
            
    		const queryList = (pageNo, pageSize) => {
                //这里的pageNo和pageSize会自动计算好，直接传给服务器即可
                //这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过paging.value.complete(请求回来的数组)将请求结果传给z-paging
                request.queryList({ pageNo,pageSize }).then(res => {
                	//请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
                    paging.value.complete(res.data.list);
                }).catch(res => {
                	//如果请求失败写paging.value.complete(false)，会自动展示错误页面
                	//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
                	//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
                	paging.value.complete(false);
                })
    			
    		}
    		return {
    			dataList,
    			paging,
    			queryList
    		}
    	}
    };
</script>

<style scoped>
    
</style>
```
