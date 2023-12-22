### 全局配置 <Badge text="1.5.8"/>

::: tip 说明
① 支持统一配置z-paging的所有属性，以下配置不是必须的！  
② 在z-paging标签上的局部配置优先级高于全局配置。  
③ 这里的全局配置不是全局引入组件，全局配置是指统一配置z-paging默认的属性值，z-paging遵循easycom组件规范，无需注册即可使用。  
[点击查看easycom组件规范](https://uniapp.dcloud.io/component/README?id=easycom组件规范)
:::

* `(推荐)`【方案1】<Badge text="2.6.5"/> 在路径`main.js`中添加`z-paging`配置`(具体位置没有要求，确保初始化项目执行到即可)`

::: danger 注意
此方案不支持`vue3+appVue`！！  
此方案兼容`vue2/3`、`vue/nvue`；但是由于在`vue3+appVue`端，props默认值读取在main.js之前执行，因此在`vue3+appVue`端，`此方案无效`，请使用【方案2】！
:::
```js
// mian.js
uni.$zp = {
	config: {
		//配置分页默认pageSize为15
		'default-page-size': '15',
		//配置空数据图默认描述文字为：空空如也~~
		'empty-view-text': '空空如也~~',
		//...
	}
}
```

* 【方案二】<Badge text="2.0.4"/> 在文件 `z-paging/config/index.js`中进行配置，`此方案所有平台兼容`，但是需要注意更新插件时要避免被覆盖。
> 此配置生效优先级高于【方案1】
```js
// z-paging/config/index.js
module.exports = {
	//配置分页默认pageSize为15
	'default-page-size': '15',
	//配置空数据图默认描述文字为：空空如也~~
	'empty-view-text': '空空如也~~',
	//...
}
```

* 【已废弃】在路径`@/uni_modules/z-paging`下创建`z-paging-config.js`(与z-paging目录下的readme.md同级)，`z-paging-config.js`中的内容如下所示。<Badge text="2.6.5起废弃" type="error"/> 

::: danger 注意
此方案不支持`vue3`，在`vue3`中请使用【方案2】或【方案3】<br>
此方案不支持使用npm安装z-paging的情况，使用npm安装时请使用【方案2】或【方案3】
:::
```js
module.exports = {
	//配置分页默认pageSize为15
	'default-page-size': '15',
	//配置空数据图默认描述文字为：空空如也~~
	'empty-view-text': '空空如也~~',
	//...
}
```


* 【已废弃】在`main.js`中`import zConfig from '@/uni_modules/z-paging/components/z-paging/js/z-paging-config'`(此路径为使用uni_modules情况下使用，可依照具体情况进行修改)，然后进行`z-paging`的全局配置：<Badge text="2.6.5起废弃" type="error"/> 
::: danger 注意
如果调用过setConfig进行配置，后期又需要取消配置，则必须设置zConfig.setConfig(null)将配置置空，因为setConfig是将配置设置在缓存中，直接删除配置代码将导致原先缓存的配置无法清空。
:::

```js
zConfig.setConfig({
	//配置分页默认pageSize为15
	'default-page-size': '15',
	//配置空数据图默认描述文字为：空空如也~~
	'empty-view-text': '空空如也~~',
	//...
})
```

### 拦截器 <Badge text="2.2.8"/>
* 支持全局对`@query`的参数进行拦截&修改  
在`main.js`中`import ZPInterceptor from '@/uni_modules/z-paging/components/z-paging/js/z-paging-interceptor'`(此路径为使用uni_modules情况下使用，可依照具体情况进行修改)，然后可以对`@query`进行拦截&修改：
* `ZPInterceptor.handleQuery`各参数说明：  
`pageNo`：当前第几页；  
`pageSize`：每页多少条；  
`from`：@query的触发来源：0.用户主动下拉刷新 1.通过reload触发 2.通过refresh触发 3.通过滚动到底部加载更多或点击底部加载更多触发；  
`lastItem` <Badge text="2.5.8"/>：当前列表最后一项。
```js
import ZPInterceptor from '@/uni_modules/z-paging/components/z-paging/js/z-paging-interceptor'
ZPInterceptor.handleQuery((pageNo, pageSize, from, lastItem) => {
	//这里可以对pageNo, pageSize, from, lastItem进行一些处理后return，请注意需要return一个数组，数组中0、1、2的元素就代表@query中绑定方法获取到的参数，数组长度不一定为3，数组长度为多少，@query中的参数就有多少个
	return [pageNo, pageSize, from];
})
```

