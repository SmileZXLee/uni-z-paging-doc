## 基本数据&布局

### [基本数据&布局Props](/api/props/common.html)
属性配置：设置`v-model数据源`、控制`初始pageNo&pageSize`、设置`页面滚动`、设置`fixed布局`、设置`底部安全区域适配`、设置`z-paging宽高&背景色`、设置`下拉刷新&加载更多主题色`等
### [reload方法相关Props](/api/props/reload.html)
属性配置：设置`mounted后自动调用reload方法`、设置`reload时是否自动滚动到顶部`、设置`reload时是否立即自动清空原list`、设置`reload时是否自动显示下拉刷新view`等
### [Slots](/api/slot/main.html#主体布局slot)
插槽：自定义`z-paging上下左右四个位置插槽`  
> 上下左右四个插槽位置草图   
<img src="/img/pic_surround.png" width="200"/> 

### [Methods](/api/methods/main.html#数据刷新-处理方法)
方法：触发`重新加载分页`、触发`触发分页加载结束`、触发`清除分页数据`等
### [数据处理Events](/api/events/main.html#数据处理相关事件)
事件：监听并处理`下拉刷新或滚动到底部(@query)`、监听`分页渲染的数组改变`
### [布局-交互Events](/api/events/main.html#布局-交互相关事件)
事件：监听并处理`z-paging中内容高度改变`、监听`监听列表触摸方向改变`

### 示例
* [基本使用](/start/use.html#基本使用)

### 关于z-paging布局模式
 z-paging布局默认有`固定布局`、`非固定布局`和`页面滚动`三种👇🏻
 |                       | 设置                                                       | 特点                                                         | 图示                                  |
| --------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------- |
| 固定布局`(默认)` | :fixed="true"                                              | 默认配置，z-paging为`position: fixed`并`铺满整个页面`，`脱离页面文档流`。z-paging标签外的view`都会被它盖住或盖住它`。建议：页面中所有元素写在z-paging标签内(包括自定义的导航栏或者自定义的tabbar)，如果需要固定在顶部的则放在`slot="top"`中，固定在底部的放在`slot="bottom"`，此时z-paging是`局部滚动`的。<br />适用场景：一般的页面列表分页 | <img src="/img/pic_fixed.png" style="width: 200"/>       |
| 非固定布局 | :fixed="false"                                             | 可选配置，z-paging不再是`position: fixed`；但z-paging依然是局部滚动，可以将z-paging标签想象成`scroll-view`，因此您`必须给它(或给它的父view)确定的高度`，因为局部滚动必须确定滚动的范围。<br />适用场景：在`弹窗内部`、`swiper内部`等需要局部滚动的场景 | <img src="/img/pic_not_fixed.png"/>   |
| 页面滚动 | :use-page-scroll="true"`(注意引入mixins，详见props中的说明)` | 可选配置，z-paging`不再是局部滚动的`，也就是z-paging内部相当于不再存在`scroll-view`，可以将z-paging想象成普通的view容器，列表内容会将其撑高，z-paging的`高度由列表内容决定`。<br />适用场景：下拉刷新需要从页面的某个view下方开始；或者一些需要使用到页面滚动默认行为的场景 | <img src="/img/pic_page_scroll.png"/> |

#### 关于页面滚动模式，为什么要引入mixins的解释
在页面滚动模式下，z-paging无法得知当前页面滚动的scrollTop和页面是否滚动到底部了，因此必须监听页面滚动相关事件并将其通知给z-paging；使得z-paging可以作出相应的响应




## 本地分页
> 通常用于服务端一次性返回大量数据的情况，若一次性渲染可能会导致渲染时间较长，此时适合使用本地分页，将大量数据一次性给z-paging，z-paging将在本地自动进行分页处理
### [Props](/api/props/local-paging.html)
属性配置：设置`本地分页时上拉加载更多延迟时间`
### [Methods](/api/methods/main.html#本地分页相关方法)
方法：`设置本地分页，将需要本地分页的总数据传给z-paging`

### 示例
* [本地分页示例](/start/use.html#本地分页示例)

## 数据缓存
> 用户首次进入页面先自动加载缓存中的列表数据，再从服务端获取最新数据刷新列表与缓存。  
ps:如果您希望tabs切换各个z-paging数据独立，请下载示例项目并参照swiper-demo的写法
### [Props](/api/props/cache.html)
属性配置：设置`是否开启缓存`、设置`缓存模式`
### [Methods](/api/methods/main.html#缓存相关方法)
方法：`手动更新列表缓存数据`

### 示例
* [数据缓存示例](/start/use.html#数据缓存示例)

## z-index
### [Props](/api/props/z-index.html)
属性配置：设置`不同容器的z-index`