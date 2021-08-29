### 支持全局配置 <Badge text="1.5.8"/>

::: tip 说明
支持统一配置z-paging的所有属性，以下配置不是必须的！
:::

::: danger 注意
这里的全局配置不是全局引入组件，全局配置是指统一配置z-paging默认的属性值，z-paging遵循easycom组件规范，无需注册即可使用。

[点击查看easycom组件规范](https://uniapp.dcloud.io/component/README?id=easycom组件规范)

:::

* `(推荐)`【方案1】在路径`@/uni_modules/z-paging`下创建`z-paging-config.js`(与z-paging目录下的readme.md同级)，`z-paging-config.js`中的内容如下所示。

```js
module.exports = {
	//配置分页默认pageSize为15
	'default-page-size': '15',
	//配置空数据图默认描述文字为：空空如也~~
	'empty-view-text': '空空如也~~',
	//...
}
```

* 【方案二】<Badge text="2.0.4"/> 在文件 `z-paging/config/index.js`中进行配置，配置与【方案1】一致，但是需要注意更新插件时要避免被覆盖。
* 【方案三】在`main.js`中`import zConfig from '@/uni_modules/z-paging/components/z-paging/js/z-paging-config'`(此路径为使用uni_modules情况下使用，可依照具体情况进行修改)，然后进行`z-paging`的全局配置：
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