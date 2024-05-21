::: tip 如何下载demo
* 以下基本使用均为选项式api写法，若需要查询组合式api(setup)写法，请查阅demo  
* 👉🏻[(demo)示例项目下载](/start/example-download.html)
:::

## 基本使用
* ①在`<template>` 中使用@query绑定js中分页请求的方法(`z-paging`会将计算好的pageNo和pageSize两个参数传递到此方法中)，然后通过` v-model`绑定列表for循环的list。
* ②在请求结果回调中，通过调用`z-paging`的`complete()`方法，将请求返回的数组传递给`z-paging`处理，如：`this.$refs.paging.complete(服务器返回的数组);`；若请求失败，调用：`this.$refs.paging.complete(false);`即可。
* 当tab切换或搜索时，可以通过`this.$refs.paging.reload()`刷新整个列表。
* 在nvue中，z-paging中插入的列表item(z-paging的直接子view)必须是cell，必须使用cell包住，因为在nvue中，z-paging使用的是nvue的list组件，具体请查阅demo中的`common-demo-n.vue`示例。

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

## 仅使用下拉刷新示例 <Badge text="1.6.6"/>
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
					// 1.5秒之后停止刷新动画
					this.$refs.paging.complete();
				}, 1500)
			},
        },
    };
</script>
```

## 下拉进入二楼示例 <Badge text="2.7.7"/>
```html  
<template>
  <!-- 下楼进入二楼建议在pages.json中隐藏系统导航栏，使用自定义导航栏，避免二楼被系统导航栏盖住 -->
	<z-paging ref="paging" v-model="dataList" refresher-f2-enabled @query="queryList">
		<!-- 自定义松手显示二楼view（非必须，可根据具体需求定制） -->
		<template #refresherF2>
			<view class="refresher-f2-view">
				<text class="refresher-f2-view-text">松手可以进入二楼哦 (*╹▽╹*)</text>
			</view>
		</template>
		<!-- 自定义需要插入二楼的view，建议将插入二楼的view设置高度100%以铺满容器高度 -->
		<template #f2>
			<custom-f2 @closeF2="onCloseF2"/>
		</template>
		<!-- 页面内容 -->
	</z-paging>
</template>

<script>
	export default {
		methods: {
			// 点击了关闭二楼
			onCloseF2() {
				this.$refs.paging.closeF2();
			}
		}
	}
</script>
```

## 延迟加载列表示例
#### 自行控制z-paging列表加载时机，例如先获取tabs数据然后再触发列表加载
```html  
<template>
	<!-- 通过:auto="false"禁止默认的自动加载列表行为 -->
	<z-paging ref="paging" v-model="dataList" :auto="false" @query="queryList">
		<!-- 页面内容 -->
	</z-paging>
</template>

<script>
	export default {
		onLoad() {
			// 在页面加载时请求tabs数据
			this.$request.queryTabs().then(tabs => {
				this.tabList = tabs;
				// 获取tabs数据后触发加载z-paging列表
				this.$refs.paging.reload();
			})
		},
		// 其他部分与普通模式一致，略
	}
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
	// 使用页面滚动时引入此mixin，用于监听和处理onPullDownRefresh等页面生命周期方法(如果全局引入了，就不要这一步，全局引入示例见main.js)
	import ZPMixin from '@/uni_modules/z-paging/components/z-paging/js/z-paging-mixin'
	export default {
		// 注意这一步不要漏掉，必须注册mixins(如果全局引入了，就不要这一步，全局引入示例见main.js)
		mixins: [ZPMixin],
		data() {
			// 参见demo
		},
		methods: {
			// 参见demo
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
	// 必须导入需要用到的页面生命周期（即使在当前页面上没有直接使用到）
	import { onPageScroll, onReachBottom } from '@dcloudio/uni-app';
	import useZPaging from "@/uni_modules/z-paging/components/z-paging/js/hooks/useZPaging.js";
	
    const paging = ref(null)
	
    let dataList = ref([])
	
	// 类似mixins，如果是页面滚动务必要写这一行，并传入当前ref绑定的paging，注意此处是paging，而非paging.value
	useZPaging(paging)
	
	// 其他省略
</script>
```
</code-block>
</code-group>

## 虚拟列表示例 <Badge text="2.2.5"/>

不同写法在不同平台兼容性有差异，详见[虚拟列表&内置列表模块](/module/virtual-list.html)

<code-group>
<code-block title="一般写法(内置列表写法)" active>
```html
<!-- 虚拟列表演示(一般写法) -->
<!-- 写法简单，通过slot=cell插入所需cell，页面中无直接的for循环，在vue2中兼容性良好 -->
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
              	// 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
              	// 这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过this.$refs.paging.complete(请求回来的数组)将请求结果传给z-paging
                this.$request.queryList({ pageNo,pageSize }).then(res => {
                	// 请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
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

<style scoped>
    
</style>
```
</code-block>

<code-block title="非内置列表写法">
```html
<!-- 虚拟列表演示(非内置列表写法) -->
<!-- 写法较简单，在页面中对当前需要渲染的虚拟列表数据进行for循环，在vue3中兼容性良好 -->
<template>
<!-- 如果页面中的cell高度是固定不变的，则不需要设置cell-height-mode，如果页面中高度是动态改变的，则设置cell-height-mode="dynamic" -->
	<z-paging ref="paging" use-virtual-list :force-close-inner-list="true" @virtualListChange="virtualListChange" @query="queryList">
		<!-- :id="`zp-id-${item.zp_index}`"和:key="item.zp_index" 必须写，必须写！！！！ -->
		<!-- 这里for循环的index不是数组中真实的index了，请使用item.zp_index获取真实的index -->
		<view class="item" :id="`zp-id-${item.zp_index}`" :key="item.zp_index" v-for="(item,index) in virtualList">
			<view class="item-title">{{item.title}}</view>
		</view>
	</z-paging>
</template>

<script>
	export default {
		data() {
			return {
				// 虚拟列表数组，通过@virtualListChange监听获得最新数组
				virtualList: [],
			}
		},
		methods: {
			// 监听虚拟列表数组改变并赋值给virtualList进行重新渲染
			virtualListChange(vList) {
				this.virtualList = vList;
			},
			queryList(pageNo, pageSize) {
				// 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				// 这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过this.$refs.paging.complete(请求回来的数组)将请求结果传给z-paging
				this.$request.queryListLong({ pageNo,pageSize }).then(res => {
					// 请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
					this.$refs.paging.complete(res.data.list);
				}).catch(res => {
					// 如果请求失败写this.$refs.paging.complete(false);
					// 注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					// 在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				})
			}
		}
	}
</script>

<style scoped>
    
</style>
```
</code-block>

<code-block title="兼容写法">
```html
<!-- 虚拟列表演示(兼容写法) -->
<!-- 写法麻烦，而且需要手动修改z-paging源码，所有渲染cell写在相同组件内，不易维护，在vue2中兼容性很好，但非必须不建议使用 -->
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
              	// 代码同虚拟列表(一般写法)
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

## 使用fetch的极简写法示例 <Badge text="2.7.8"/>
```html
<!-- 使用fetch的极简写法示例 -->
<template>
	<!-- 通过:fetch直接传入列表请求函数即可，默认会调用对应请求参数并且给它传{pageNo, pageSize}两个参数 -->
	<!-- :fetch的请求函数附加参数可通过:fetch-params传入 -->
	<z-paging ref="paging" v-model="dataList" :fetch="queryList" :fetch-params="{ type: tabIndex + 1 }">
		<view class="item" v-for="(item,index) in dataList">
			<view class="item-title">{{item.title}}</view>
		</view>
	</z-paging>
</template>

<script>
	import { queryList } from '../../http/request.js'
	export default {
		data() {
			return {
				queryList,
				dataList: [],
			}
		},
		methods: {
			// 也支持自行实现fetch函数，例如在props中添加 :fetch="fetchFunc"，然后实现：
			/* 
			async fetchFunc(params) {
				const res = await this.$request.queryList({ pageNo: params.pageNo, pageSize: params.pageSize, type: this.tabIndex + 1 });
				return res.data.list;
			}
			*/
			
			// 在main.js中可以对全局:fetch的请求参数和响应进行拦截和统一处理，默认请求参数为{ pageNo, pageSize }，将响应结果直接当作分页数组。如非默认情况，请使用下方示例处理
			/*
			// 处理z-paging fetch写法拦截，handleFetchParams用于拦截请求入参，返回最终入参对象。handleFetchResult用于拦截请求结果，自行处理请求结束后操作，务必调用complete或complete相关方法
			// 支持链式调用
			ZPInterceptor.handleFetchParams((parmas, extraParams) => {
				return {pageNo: parmas.pageNo, pageSize: parmas.pageSize, ...extraParams};
			}).handleFetchResult((fetchResult, paging) => {
				fetchResult.then(res => {
					paging.complete(res.data.list);
				}).catch(err => {
					paging.complete(false);
				})
			})
			*/
		   
		}
	}
</script>
```
* 针对fetch的全局拦截写法请参照：[拦截器](/api/props/global-config.html#拦截器)

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
              	// 这里的请求只是演示，请替换成自己的项目的网络请求
                this.$request.queryAllList().then(res => {
                	// 设置本地分页并将服务端返回的完整列表数据传给z-paging，滚动到底部会在本地进行分页数据拼接，不会触发分页请求。下拉刷新或reload时会重新触发queryList
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
