::: tip 如何下载demo
* 以下基本使用均为选项式api写法，若需要查询组合式api(setup)写法，请查阅demo  
* 👉🏻[(demo)示例项目下载](/start/example-download.html)
:::

## 基本使用
* ①在`<template>` 中使用@query绑定js中分页请求的方法(`z-paging`会将计算好的pageNo和pageSize两个参数传递到此方法中)，然后通过` v-model`绑定列表for循环的list。
* ②在请求结果回调中，通过调用`z-paging`的`complete()`方法，将请求返回的数组传递给`z-paging`处理，如：`this.$refs.paging.complete(服务器返回的数组);`；若请求失败，调用：`this.$refs.paging.complete(false);`即可。
* 当tab切换或搜索时，可以通过`this.$refs.paging.reload()`刷新整个列表。
* 在nvue中，z-paging中插入的列表item(z-paging的直接子view)必须是cell，必须使用cell包住，因为在nvue中，z-paging使用的是nvue的list组件，具体请查阅demo中的`common-demo-n.vue`示例。

```html  
<template>
    <z-paging ref="paging" v-model="dataList" @query="queryList">
		<view class="item" v-for="(item,index) in dataList" :key="index">
			<view class="item-title">{{item.title}}</view>
		</view>
	</z-paging>
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

## 仅使用下拉刷新示例
```html  
<template>
    <z-paging ref="paging" refresher-only @onRefresh="onRefresh">
		<!-- 页面内容 -->
	</z-paging>
</template>

<script>
    export default {
        methods: {
            // 下拉刷新被触发
			onRefresh() {
				// 告知z-paging下拉刷新结束，这样才可以开始下一次的下拉刷新
				setTimeout(() => {
					//1.5秒之后停止刷新动画
					this.$refs.paging.complete();
				}, 1500)
			},
        },
    };
</script>
```


## 设置自定义emptyView组件示例
#### 设置自定义emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理
<code-group>
<code-block title="vue2" active>
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- 设置自己的emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理 -->
    <empty-view slot="empty" />
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
</z-paging>
```
</code-block>

<code-block title="vue2/3">
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- 设置自己的emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理 -->
	<template #empty>
		<empty-view />
	</template>
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
</z-paging>
```
</code-block>
</code-group>

## 自定义加载更多各个状态的描述文字示例

#### 以修改【没有更多了】状态描述文字为例(将默认的"没有更多了"修改为"我也是有底线的！")

```html
<z-paging ref="paging" v-model="dataList" loading-more-no-more-text="我也是有底线的！" @query="queryList">
    <!-- 设置自己的emptyView组件，非必须。空数据时会自动展示空数据组件，不需要自己处理 -->
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
</z-paging>
```

## 自定义下拉刷新view示例

#### `use-custom-refresher`需要设置为true(默认为true)，此时将不会使用uni自带的下拉刷新，转为使用z-paging自定义的下拉刷新，通过slot可以插入开发者自定义的下拉刷新view。

<code-group>
<code-block title="vue2" active>
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- 自定义下拉刷新view -->
    <!-- 此处的custom-refresh为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，下拉刷新就显示什么view -->
    <custom-refresher slot="refresher" slot-scope="{refresherStatus}" :status="refresherStatus"></custom-refresher>
    <!-- list数据，建议像下方这样在item外层套一个view，而非直接for循环item，因为slot插入有数量限制 -->
	<view class="item" v-for="(item,index) in dataList" :key="index">
	    <view class="item-title">{{item.title}}</view>
	</view>
</z-paging>
```
</code-block>

<code-block title="vue2/3">
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- 自定义下拉刷新view -->
    <template #refresher="{refresherStatus}">
		<!-- 此处的custom-refresh为demo中自定义的组件，非z-paging的内置组件，请在实际项目中自行创建。这里插入什么view，下拉刷新就显示什么view -->
		<custom-refresher :status="refresherStatus" />
	</template>
	<view class="item" v-for="(item,index) in dataList" :key="index">
	    <view class="item-title">{{item.title}}</view>
	</view>
</z-paging>
```
</code-block>
</code-group>

## 自定义加载更多各个状态的描述view示例

#### 以修改【没有更多了】状态描述view为例

<code-group>
<code-block title="vue2" active>
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
	<!-- 自定义的没有更多数据view -->
    <view slot="loadingMoreNoMore" style="background-color: red">这是完全自定义的没有更多数据view</view>
</z-paging>
```
</code-block>

<code-block title="vue2/3">
```html
<z-paging ref="paging" v-model="dataList" @query="queryList">
    <view class="item" v-for="(item,index) in dataList" :key="index">
        <view class="item-title">{{item.title}}</view>
    </view>
	<!-- 自定义的没有更多数据view -->
	<template #loadingMoreNoMore>
		<view style="background-color: red">这是完全自定义的没有更多数据view</view>
	</template>
</z-paging>
```
</code-block>
</code-group>

## 使用页面滚动示例

<code-group>
<code-block title="选项式api(vue2/3)" active>
```html
<!-- 使用页面滚动示例(无需设置z-paging的高度) -->
<template>
	<!-- 此时使用了页面的滚动，z-paging不需要有确定的高度，use-page-scroll需要设置为true -->
	<!-- 注意注意！！这里的ref必须设置且必须等于"paging"，否则mixin方法无效 -->
	<z-paging ref="paging" v-model="dataList" use-page-scroll @query="queryList">
		<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
		<view class="item" v-for="(item,index) in dataList" :key="index">
			<view class="item-title">{{item.title}}</view>
		</view>
	</z-paging>
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
</code-block>

<code-block title="组合式api(vue3+hooks)">
```html
<!-- 使用页面滚动示例 -->
<template>
	<!-- 此时使用了页面的滚动，z-paging不需要有确定的高度，use-page-scroll需要设置为true -->
	<z-paging ref="paging" v-model="dataList" use-page-scroll @query="queryList">
		<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
		<view class="item" v-for="(item,index) in dataList" :key="index">
			<view class="item-title">{{item.title}}</view>
		</view>
	</z-paging>
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
</code-block>
</code-group>

## 虚拟列表示例

<code-group>
<code-block title="一般写法" active>
```html
<!-- 虚拟列表演示(一般写法) -->
<template>
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
</code-block>

<code-block title="兼容写法">
```html
<!-- 虚拟列表演示(兼容写法) -->
<!-- 在微信小程序中若使用虚拟列表推荐使用兼容写法，具体写法参见demo中的virtual-list-compatibility-demo -->
<!-- 使用虚拟列表兼容写法时必须手动在z-paging的源代码z-paging.vue中搜索zp-public-virtual-cell并打开相关注释 -->
<template>
	<!-- 如果页面中的cell高度是固定不变的，则不需要设置cell-height-mode，如果页面中高度是动态改变的，则设置cell-height-mode="dynamic" -->
	<z-paging ref="paging" use-virtual-list use-compatibility-mode :extra-data="{id:'test1'}" @query="queryList">
		<!-- 以下内容极为重要！！！！！！！！ -->
		<!-- cell中的内容必须写在zp-public-virtual-cell组件中，必须在项目的components目录下创建名为zp-public-virtual-cell的组件 -->
	</z-paging>
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



<!-- ******************************************************************************************************* -->
<!-- 在`/components/zp-public-virtual-cell/zp-public-virtual-cell.vue`文件中 -->
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
</code-block>
</code-group>

## i18n示例

* 请参照demo：`i18n-demo.vue`

## 本地分页示例
```html
<!-- 本地分页示例 -->
<template>
    <z-paging ref="paging" v-model="dataList" @query="queryList">
        <view class="item" v-for="(item,index) in dataList">
            <view class="item-title">{{item.title}}</view>
        </view>
    </z-paging>
</template>

<script>
    export default {
        data() {
            return {
                dataList: []
            };
        },
        methods: {
            queryList() {
              	//这里的请求只是演示，请替换成自己的项目的网络请求
                this.$request.queryList({ pageNo,pageSize }).then(res => {
                	//设置本地分页并将数据传给z-paging
                	this.$refs.paging.setLocalPaging(res.data.list);
                })
            }
        },
    };
</script>
```

## 数据缓存示例
```html
<!-- 设置数据缓存示例 -->
<template>
    <z-paging ref="paging" v-model="dataList" use-cache cache-key="goodsList" @query="queryList">
        <view class="item" v-for="(item,index) in dataList">
            <view class="item-title">{{item.title}}</view>
        </view>
    </z-paging>
</template>

<script>
    // 与普通模式一致，略
</script>
```
