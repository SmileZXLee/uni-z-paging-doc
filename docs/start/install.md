## 通过插件市场安装

### ① 在[插件市场](https://ext.dcloud.net.cn/plugin?id=3935)中访问z-paging。
### ② 点击【使用HbuilderX导入插件】。
### ③ 选择目标项目并导入。

::: tip 提示
z-paging 使用`uni_modules`管理，导入的项目会在`uni_modules`目录下<br>在`uni_modules`下右键z-paging可以快速地从插件市场更新
![](http://www.zxlee.cn/github/uni-z-paging/upgrade.png)
:::

::: warning 注意
若不想使用`uni_modules`，可以在插件市场中点击【下载插件ZIP】，解压后将`z-paging`、`z-paging-empty-view`、`z-paging-swiper`和`z-paging-swiper-item`放到项目的`components`目录下。
:::

::: warning 注意
z-paging遵循[easycom规范](https://uniapp.dcloud.io/component/README?id=easycom组件规范)，无需注册即可使用。
:::

## 通过npm安装
> 为多端兼容考虑，建议优先从[插件市场](https://ext.dcloud.net.cn/plugin?id=3935)获取插件
```bash
//若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程
npm init -y

//安装
npm install z-paging --save
//更新
npm update z-paging
```

::: danger 注意
下方配置只有在通过npm安装的时候才要配置！！！！！！！！
:::
在`pages.json`中配置`easycom`

```json
"easycom": {
    "^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)": "z-paging/components/z-paging$1/z-paging$1.vue"
}
```

在`vue.config.js`(没有这个文件则忽略)中添加配置
```js
{
    transpileDependencies: ['z-paging']
}
```

