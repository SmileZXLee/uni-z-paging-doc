::: tip 如何下载demo
① 在[插件市场](https://ext.dcloud.net.cn/plugin?id=3935)中访问z-paging。<br>
② 点击【使用HbuilderX导入示例项目】或【下载示例项目ZIP】。
:::

::: warning 提示
`slot`的写法在`vue2`和`vue3`中写法不同（其他一致），以下示例为`vue2`写法，若需要查看`vue3`中的写法，请[点击这里](../../start/migration-to-vue3.html)
:::

## 基本使用
* ①在`<template>` 中使用@query绑定js中分页请求的方法(`z-paging`会将计算好的pageNo和pageSize两个参数传递到此方法中)，然后通过` v-model`绑定列表for循环的list。
* ②在请求结果回调中，通过调用`z-paging`的`complete()`方法，将请求返回的数组传递给`z-paging`处理，如：`this.$refs.paging.complete(服务器返回的数组);`；若请求失败，调用：`this.$refs.paging.complete(false);`即可。
* 当tab切换或搜索时，可以通过`this.$refs.paging.reload()`刷新整个列表。
* 在nvue中，z-paging中插入的列表item(z-paging的直接子view)必须是cell，必须使用cell包住，因为在nvue中，z-paging使用的是nvue的list组件，具体请查阅demo中的`common-demo-n.vue`示例。

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
    export default {
        data() {
            return {
                dataList: []
            };
        },
        methods: {
            queryList(pageNo, pageSize) {
              	//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
              	//这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过this.$refs.paging.complete(请求回来的数组)将请求结果传给z-paging
                this.$request.queryList({ pageNo,pageSize }).then(res => {
                	//请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
                	this.$refs.paging.complete(res.data.list);
                }).catch(res => {
                	//如果请求失败写this.$refs.paging.complete(false)，会自动展示错误页面
                	//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
                	//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
                	this.$refs.paging.complete(false);
                })
            }
        },
    };
</script>

<style scoped>
    
</style>
```

## 设置自定义emptyView组件示例

* 设置自定义emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理

```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- 设置自己的emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理 -->
    <empty-view slot="empty"></empty-view>
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
</z-paging>
```

## 自定义加载更多各个状态的描述文字示例

* 以修改【没有更多了】状态描述文字为例(将默认的"没有更多了"修改为"我也是有底线的！")

```html
<z-paging ref="paging" v-model="dataList" loading-more-no-more-text="我也是有底线的！" @query="queryList">
    <!-- 设置自己的emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理 -->
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
</z-paging>
```

## 自定义下拉刷新view示例

* `use-custom-refresher`需要设置为true(默认为true)，此时将不会使用uni自带的下拉刷新，转为使用z-paging自定义的下拉刷新，通过slot可以插入开发者自定义的下拉刷新view。

```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- 自定义下拉刷新view -->
    <!-- 注意注意注意！！QQ小程序或字节跳动小程序中自定义下拉刷新不支持slot-scope，将导致custom-refresher无法显示 -->
    <!-- 如果是QQ小程序或字节跳动小程序，请参照demo中的sticky-demo.vue中的写法，此处使用slot-scope是为了减少data中无关变量声明，降低依赖 -->
    <custom-refresher slot="refresher" slot-scope="{refresherStatus}" :status="refresherStatus"></custom-refresher>
    <!-- list数据，建议像下方这样在item外层套一个view，而非直接for循环item，因为slot插入有数量限制 -->
	<view class="item" v-for="(item,index) in dataList" :key="index">
	    <view class="item-title">{{item.title}}</view>
	</view>
</z-paging>
```

## 自定义加载更多各个状态的描述view示例

* 以修改【没有更多了】状态描述view为例

```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
    <view style="background-color: red" slot="loadingMoreNoMore">这是完全自定义的没有更多数据view</view>
</z-paging>
```

## 使用页面滚动示例

### `选项式api写法(vue2/vue3)`
```html
<!-- 使用页面滚动示例(无需设置z-paging的高度) -->
<template>
	<view class="content">
		<!-- 此时使用了页面的滚动，z-paging不需要有确定的高度，use-page-scroll需要设置为true -->
		<!-- 注意注意！！这里的ref必须设置且必须等于"paging"，否则mixin方法无效 -->
		<z-paging ref="paging" v-model="dataList" use-page-scroll @query="queryList">
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<view class="item" v-for="(item,index) in dataList" :key="index">
				<view class="item-title">{{item.title}}</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	//使用页面滚动时引入此mixin，用于监听和处理onPullDownRefresh等页面生命周期方法(如果全局引入了，就不要这一步，全局引入示例见main.js)
	import ZPMixin from '@/uni_modules/z-paging/components/z-paging/js/z-paging-mixin'
	export default {
		//注意这一步不要漏掉，必须注册mixins(如果全局引入了，就不要这一步，全局引入示例见main.js)
		mixins: [ZPMixin],
		data() {
			//参见demo
		},
		methods: {
			//参见demo
		}
	}
</script>
```

### `组合式api写法(vue3+hooks)`
```html
<!-- 使用页面滚动示例 -->
<template>
	<view class="content">
		<!-- 此时使用了页面的滚动，z-paging不需要有确定的高度，use-page-scroll需要设置为true -->
		<z-paging ref="paging" v-model="dataList" use-page-scroll @query="queryList">
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<view class="item" v-for="(item,index) in dataList" :key="index">
				<view class="item-title">{{item.title}}</view>
			</view>
		</z-paging>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	//必须导入需要用到的页面生命周期（即使在当前页面上没有直接使用到）
	import { onPageScroll, onReachBottom } from '@dcloudio/uni-app';
	import useZPaging from "@/uni_modules/z-paging/components/z-paging/js/hooks/useZPaging.js";
	
    const paging = ref(null)
	
    let dataList = ref([])
	
	//类似mixins，如果是页面滚动务必要写这一行，并传入当前ref绑定的paging，注意此处是paging，而非paging.value
	useZPaging(paging)
	
	//其他省略
</script>
```

## 虚拟列表示例

* 一般写法
```html
<!-- 虚拟列表演示(一般写法) -->
<template>
	<view class="content">
		<!-- 如果页面中的cell高度是固定不变的，则不需要设置cell-height-mode，如果页面中高度是动态改变的，则设置cell-height-mode="dynamic" -->
		<z-paging ref="paging" use-virtual-list @query="queryList">
			<!-- 通过slot="cell"插入列表for循环的cell，slot-scope中提供当前for循环的item和index -->
			<!-- 因字节跳动小程序不支持slot-scope，因此不支持字节跳动小程序 -->
			<view slot="cell" slot-scope="{item,index}">
				<view class="item-title">{{item.title}}</view>
			</view>
			<!-- vue3中写法如下 -->
			<!-- 
			<template v-slot:cell="{item,index}">
				<view class="item-title">{{item.title}}</view>
			</template> 
			-->
		</z-paging>
	</view>
</template>

<script>
    export default {
        methods: {
            queryList(pageNo, pageSize) {
              	//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
              	//这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过this.$refs.paging.complete(请求回来的数组)将请求结果传给z-paging
                this.$request.queryList({ pageNo,pageSize }).then(res => {
                	//请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
                	this.$refs.paging.complete(res.data.list);
                }).catch(res => {
                	//如果请求失败写this.$refs.paging.complete(false)，会自动展示错误页面
                	//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
                	//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
                	this.$refs.paging.complete(false);
                })
            }
        },
    };
</script>

<style scoped>
    
</style>
```
* 兼容写法
```html
<!-- 虚拟列表演示(兼容写法) -->
<!-- 在微信小程序中若使用虚拟列表推荐使用兼容写法，具体写法参见demo中的virtual-list-compatibility-demo -->
<!-- 使用虚拟列表兼容写法时必须手动在z-paging的源代码z-paging.vue中搜索zp-public-virtual-cell并打开相关注释 -->
<template>
	<view class="content">
		<!-- 如果页面中的cell高度是固定不变的，则不需要设置cell-height-mode，如果页面中高度是动态改变的，则设置cell-height-mode="dynamic" -->
		<z-paging ref="paging" use-virtual-list use-compatibility-mode :extra-data="{id:'test1'}" @query="queryList">
			<!-- 以下内容极为重要！！！！！！！！ -->
			<!-- cell中的内容必须写在zp-public-virtual-cell组件中，必须在项目的components目录下创建名为zp-public-virtual-cell的组件 -->
		</z-paging>
	</view>
</template>

<script>
    export default {
        methods: {
            queryList(pageNo, pageSize) {
              	//代码同虚拟列表(一般写法)
            }
        },
    };
</script>
```
在`/components/zp-public-virtual-cell/zp-public-virtual-cell.vue`文件中
```html
<!-- 当虚拟列表兼容模式渲染的时候，列表中实际上渲染的是这个组件，并且会把当前的item，index和extraData(附加数据)通过props传给这个组件 -->
<!-- 如果有多个不同的虚拟列表，它们会共用这个组件，这时候可以通过extraData来区分不同的页面 -->
<template>
	<view>
		<!-- 这里的extraData.id在virtual-list-compatibility-demo设置的是test1 -->
		<!-- virtual-list-test-cell是自定义的虚拟列表cell内容组件 -->
		<virtual-list-test-cell v-if="extraData.id==='test1'" :item="item" :index="index" :extraData="extraData" />
	</view>
</template>

<script>
	export default {
		name: "zp-public-virtual-cell",
		props: {
			item: null,
			index: 0,
			// 这里的extraData是在页面中通过:extraData给z-paging组件传的对象
			extraData: null
		},
		data() {
			return {
				
			};
		}
	}
</script>
```

## i18n示例

* 请参照demo：`i18n-demo.vue`
