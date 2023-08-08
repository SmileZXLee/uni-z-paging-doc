# 常见问题

## 为什么z-paging盖住了我页面上的其他view或下拉刷新被其他view盖住？
在默认情况下，z-paging是铺满全屏的，它会盖住z-paging标签外的其他view。因此您可以将页面中的所有view放在z-paging标签内，需要固定在页面顶部不跟着列表滚动的view(包括自定义导航栏)放在`slot="top"`内，固定底部的放在`slot="bottom"`内，注意放在`slot="top"`和`slot="bottom"`内的view不要设置style：`position: fixed`；  
如果您希望z-paging不铺满屏幕，高度跟随内容高度，可以设置页面滚动`use-page-scroll`，注意页面滚动时要引入mixins，详情请[点击这里](./use.html#使用页面滚动示例)；  
您也可以设置`:fixed="false"`来取消z-paging铺满全屏，但是这时候z-paging依然是局部滚动，和`scroll-view`一样，您必须为z-paging或z-paging的父容器指定确定的高度，设置z-paging高度时可以通过`height="100px"`或`:paging-style="{height: '100px'}"`，不要直接通过class或style设置高度，因为在微信小程序中，这样给组件设置样式是无效的。

## 为什么我无法进行下拉刷新？
在默认情况下，z-paging组件加载时会自动触发`queryList`，请确保您在`queryList`中调用了z-paging的`complete`方法，因为为了避免数据错乱，每次触发`queryList`后都必须调用`complete`才允许下次的分页（下拉刷新、滚动到底部加载更多）操作。

## 为什么页面滚动(use-page-scroll)的时候，滚动到底部不会加载更多，并且在任何位置下拉都触发了下拉刷新？
必须引入`mixins`，详情请[点击这里](./use.html#使用页面滚动示例)

## 为什么我复制demo中的代码在我的项目中提示TypeError: Cannot read properties of undefined (reading 'queryList')？
因为demo中的`this.$request.queryList`中的`this.$request`，这个是demo中测试用的请求，您的项目中不存在它，请更换为您项目中的请求。

## 为什么slot="top"内的picker、popup、dropdown会被z-paging列表的cell盖住？
因为z-paging中的内容z-index默认为10，如果其他弹窗遮罩的z-index小于这个值则会被盖住，可以通过`:content-z-index="1"`来降低列表内容的z-index以解决此问题。

## 为什么z-paging在我的项目中无法下拉刷新？
因为z-paging的`complete`方法没有调用，z-paging组件加载时会自动触发刷新，`complete`方法代表刷新结束，因此必须在`@query`的函数中调用`complete`，才允许进行下次的下拉刷新。

## 为什么在nvue中，`v-model`绑定的数据源有数据，但是列表却空白，没有渲染？
因为在nvue中，z-paging内置默认使用的是`list`组件，因此z-paging的子组件必须是`<cell />`或`<z-paging-cell />`

## 为什么z-paging列表在h5和app平台中可以显示，但是在微信小程序中一片空白？
可能是因为给z-paging设置了`:fixed="false"`，此时z-paging不是铺满全屏的，这时候它需要有确定的高度。您可能是通过style或者class设置了高度，这在微信小程序中是无效的，请通过`height="100px"`或`:paging-style="{height: '100px'}"`进行设置，或给z-paging的父容器设置确定的高度。

## 为什么z-paging看不到底部的正在加载和没有更多了？
可能是因为自定义了tabbar，如果是自定义tabbar则需要将自定义的tabbar放在z-paging标签内并且设置`slot="bottom"`，如果不想放进去，也可以在`slot="bottom"`放一个和tabbar等高的占位view。

## 在支付宝或钉钉小程序中，为什么有时候无法进行下拉刷新，在其他平台正常？
在支付宝和钉钉小程序中，必须在`pages.json`中进行如下设置：  
```json
//以下代码可以写在globalStyle中或特定页面的style中
//支付宝和钉钉小程序需要取消回弹效果
"mp-alipay": {
  "allowsBounceVertical": "NO"
}
```
## 为什么在iOS中有时候若列表滚动到最底部后继续往上拉，列表会被锁住3-5秒无法滚动？
这是因为系统内置的bounce导致的，请在`pages.json`中进行如下设置：  
```json
//以下代码可以写在globalStyle中或特定页面的style中
"app-plus": {
	//禁用bounce
	"bounce": "none"
}
```
## 为什么监听页面事件：onPageScroll、onReachBottom等无效？
默认情况下，z-paging铺满全屏并局部滚动的，因此不会触发相关页面事件，可以通过`@scroll`监听滚动事件，通过`@scrolltolower`监听滚动到底部事件。

## 为什么滚动到底部加载更多时，数据没有拼接在一起，而是覆盖了？
在queryList中，请求结束后请勿给z-paging中`v-model`绑定的list赋值，直接`this.$refs.paging.complete(求结果数组)`即可，`v-model`绑定的list请不要在`queryList`中自己赋值。

## 为什么当列表总数据长度是10的倍数，比如10、20、30时，最后会请求一次返回了空数组才显示没有更多数据？
z-paging中`complete`方法中默认判断有无更多数据的规则是：当`complete`中参数的数组长度小于`pageSize`即判断为没有更多数据，当列表总数为10是，因为第一页请求返回的数组长度为10，不小于`pageSize`，则允许加载更多，第二页请求返回0条数据，才展示没有更多。  
您可以通过`completeByTotal(请求结果数组，列表总长度)`来代替`complete`，则可以通过total来判断有无更多数据。

## 为什么滚动到底部加载更多可以不断触发，后面每页数据都是重复的？
z-paging中`complete`方法中默认判断有无更多数据的规则是：当`complete`中参数的数组长度小于`pageSize`即判断为没有更多数据，当列表总数为10是，因为第一页请求返回的数组长度为10，不小于`pageSize`，则允许加载更多，第二页请求返回0条数据，才展示没有更多。  
有些后端返回分页数据规则是没有对应页面的数据时返回第一页数据，因此无法自动判断是否已经没有更多数据了。  
您可以通过`completeByTotal(请求结果数组，列表总长度)`来代替`complete`，则可以通过total来判断有无更多数据。

## 为什么我给z-paging的父容器设置背景色无效？
默认情况下，z-paging使用的是`position: fixed`，脱离了文档流，因此它的父容器高度为0，不会被z-paging撑开，此时给它设置背景色是无效的。  
请设置page的背景色或使用`:paging-style="{'background-color':'red'}"`或`bg-color="red"`

## 为什么我使用uview1.x的u-waterfall，下拉刷新时候之前滚动底部加载更多的数据没有被重置？
在`u-waterfall`中，如果是下拉刷新等重置列表的行为，需要调用`u-waterfall`的`clear`方法对其内部旧数据进行重置
```js
queryList(pageNo, pageSize) {
	if (pageNo === 1) {
		//如果是第一页，则调用u-waterfall的clear方法，注意这里不一定是pageNo === 1，需要根据具体起始pageNo进行修改
		//u-waterfall组件需要添加ref="uWaterfall"
		this.$refs.uWaterfall.clear();
	}
}
```

## 为什么z-paging的queryList会触发两次？
您可能在`onLoad`或`onShow`中调用了`this.$refs.paging.reload()`，因为z-paging默认会在组件加载时触发`queryList`，同时在`reload()`方法被调用时也会触发`queryList`，此时您需要通过`:auto="false"`关闭默认的`queryList`触发即可。

## 为什么在微信小程序中我将dataList赋值内子组件，子组件内的列表无法渲染？
可能是传给子组件的props为使用驼峰命名，例如`<list :data-list="dataList" />`，请修改为`<list :dataList="dataList" />`。