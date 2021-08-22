### scroll-view相关配置

|              参数               |                             说明                             |  类型   | 默认值 | 可选值 |
| :-----------------------------: | :----------------------------------------------------------: | :-----: | :----: | :----: |
|         show-scrollbar          |   控制是否出现滚动条<p style="color:red;">(仅支持nvue)</p>   | Boolean | false  |  true  |
|           scrollable            |        是否可以滚动，使用内置scroll-view和nvue时有效         | Boolean |  true  | false  |
|  scroll-to-top-bounce-enabled   | iOS设备上滚动到顶部时是否允许回弹效果。关闭回弹效果后可使滚动到顶部后立即下拉可立即触发下拉刷新，但是有吸顶view时滚动到顶部时可能出现抖动。<p style="color:red;">(此属性同时会影响iOS和安卓在vue h5和APP平台的下拉事件冒泡，建议保持为false，否则在上述平台中无法阻止下拉事件冒泡)</p> | Boolean | false  |  true  |
| scroll-to-bottom-bounce-enabled | iOS设备上滚动到底部时是否允许回弹效果<p style="color:red;">(可能会导致使用scroll-view滚动时无法顺利滚动到底部)</p> | Boolean |  true  | false  |
|      scroll-with-animation      |                在设置滚动条位置时使用动画过渡                | Boolean | false  |  true  |
|        scroll-into-view         | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 | String  |   -    |   -    |
|       enable-back-to-top        | iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部<p style="color:red;">(仅支持app-nvue，微信小程序，如果在其他平台上需要此功能，请使用页面滚动！)</p> | Boolean |  true  | false  |
