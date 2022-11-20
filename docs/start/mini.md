### z-paging mini版
::: tip 说明
① z-paging mini版在z-paging完全版基础上删除了部分非核心功能，体积缩减了`40%`左右。  
② z-paging mini版的组件名为`z-paging-mini`。
:::

#### 下载
* [z-paging-mini-2.4.8.zip](https://z-paging.zxlee.cn/public/releases/z-paging-mini-2.4.8.zip)

#### 安装&注意事项
* 下载后将zip文件解压，将代码复制至`/uni_modules/`目录下即可(如果是npm安装可放到`/node_modules/`目录下)。  
* 若项目中原来有`z-paging`，则必须删除旧的`z-paging`。新的组件名为`z-paging-mini`。  
* 请注意：引入`z-paging`的mixins等情况下，mixins的路径中的`z-paging`也需要修改为`z-paging-mini`。

#### mini版中删除的功能
`【属性】refresherImgStyle`  
`【属性】refresherEndBounceEnabled`  
`【属性】refresherCompleteScrollable`  
`【属性】refresherDefaultImg`  
`【属性】refresherPullingImg`  
`【属性】refresherRefreshingImg`  
`【属性】refresherVibrate`  
`【属性】refresherOutRate`  
`【属性】refresherPullRate`  
`【属性】refresherTitleStyle`  
`【属性】refresherFixedBackground`  
`【属性】refresherFixedBacHeight`  
`【属性】refresherMaxAngle`  
`【属性】refresherFps`  
`【属性】watchTouchDirectionChange`  

`【属性】loadingMoreNoMoreLineCustomStyle`  
`【属性】loadingMoreCustomStyle`  
`【属性】loadingMoreLoadingIconCustomStyle`  
`【属性】loadingMoreLoadingIconType`  
`【属性】loadingMoreTitleCustomStyle`  
`【属性】showLoadingMoreNoMoreLine`  
`【属性】hideNoMoreByLimit`  
`【属性】hideNoMoreInside`  
`【属性】insideMore`  

`【属性】emptyViewSuperStyle`  
`【属性】showEmptyViewReload`  
`【属性】scrollToTopBounceEnabled`  
`【属性】scrollToBottomBounceEnabled`  
`【属性】scrollWithAnimation`  
`【属性】scrollIntoView`  
`【属性】autowireListName`  
`【属性】autowireQueryName`  
`【属性】createdReload`   

`【方法】completeByKey()`  
`【方法】endxxx()`  
`【方法】resetTotalData()`  
`【方法】addDataFromTop()`  
`【事件】@touchDirectionChange`  
`【模块】虚拟列表`  
`【模块】聊天记录模式`  
`【模块】i18n国际化`  
`【功能】全局complete`  
`【功能】interceptor拦截器`  
`【功能】列表缓存`  
`【组件】z-paging-swiper-item`  