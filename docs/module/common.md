## 基本数据&布局
> 针对整体布局&数据的处理

### [Props](/api/props/common.html)
属性配置：设置`v-model数据源`、控制`初始pageNo&pageSize`、设置`页面滚动`、设置`fixed布局`、设置`底部安全区域适配`、设置`z-paging宽高&背景色`、设置`下拉刷新&加载更多主题色`等
### [Slots](/api/slot/main.html#主体布局slot)
插槽：自定义`z-paging上下左右四个位置插槽`
### [Methods](/api/methods/main.html#数据刷新-处理方法)
方法：触发`重新加载分页`、触发`触发分页加载结束`、触发`清除分页数据`等
### [数据处理Events](/api/events/main.html#数据处理相关事件)
事件：监听并处理`下拉刷新或滚动到底部(@query)`、监听`分页渲染的数组改变`
### [布局-交互Events](/api/events/main.html#布局-交互相关事件)
事件：监听并处理`z-paging中内容高度改变`、监听`监听列表触摸方向改变`

## 本地分页
### [Props](/api/props/local-paging.html)
属性配置：设置`本地分页时上拉加载更多延迟时间`
### [Methods](/api/methods/main.html#本地分页相关方法)
方法：`设置本地分页，将需要本地分页的总数据传给z-paging`

## 数据缓存
### [Props](/api/props/cache.html)
属性配置：设置`是否开启缓存`、设置`缓存模式`
### [Methods](/api/methods/main.html#缓存相关方法)
方法：`手动更新列表缓存数据`

## z-index
### [Props](/api/props/z-index.html)
属性配置：设置`不同容器的z-index`