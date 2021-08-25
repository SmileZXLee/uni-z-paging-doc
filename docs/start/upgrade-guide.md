### 升级指南
#### 如何查看z-paging版本？
* 【方式1】展开`z-paging`文件夹，查看`z-paging.vue`文件，顶部有注明版本号。
* 【方式2】通过`console.log(this.$refs.paging.getVersion())`打印当前版本号。
* 【方式3】若您的项目使用`uni_modules`管理，展开`uni_modules`下的`z-paging`文件夹，查看其中`package.json`的`version`字段即为版本号。

::: tip 说明
`z-paging`的所有版本更新都会尽可能兼容低版本写法，更新版本之后可能出现的不兼容之处都会在下方列出。  
:::

#### V1.9.0+
* 由V1.9.0起，fixed属性默认值为true，z-paging默认会铺满屏幕。V1.9.0之前的版本更新请注意，使用侧滑滚动切换选项卡或需要局部使用z-paging请设置`:fixed="false"`。<br>如果您希望fixed属性默认为false，请参考[全局配置](/api/props/global-config.md)，将fixed默认值设置为false。