::: warning 通知
由于此域名`z-paging.com`未备案，只能部署在国外的服务器上，因此此网站访问速度较慢。  
为提供更快速的文档浏览体验，推荐访问国内镜像： [https://z-paging.zxlee.cn](https://z-paging.zxlee.cn)，感谢大家理解和支持。
:::

```html                                  
  ____     _ __   __ _  __ _(_)_ __   __ _ 
 |_  /____| '_ \ / _` |/ _` | | '_ \ / _` |
  / /_____| |_) | (_| | (_| | | | | | (_| |
 /___|    | .__/ \__,_|\__, |_|_| |_|\__, |
          |_|          |___/         |___/   文档
—————————————————————————————————————————————————
v2.1.4 (2022-02-14)
- by ZXLee
感谢使用^_^
```
###  ⭐️ 如果您觉得`z-paging`还不错的话，可以点一个star鼓励一下(＾ω＾)👉🏻  [![Github stars](https://img.shields.io/github/stars/smilezxlee/uni-z-paging?logo=GitHub)](https://github.com/SmileZXLee/uni-z-paging)
## 基本使用
```html
<template>
    <view class="content">
        <z-paging ref="paging" v-model="dataList" @query="queryList">
            <view class="item" v-for="(item,index) in dataList" :key="index">
                <view class="item-title">{{item.title}}</view>
            </view>
        </z-paging>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                dataList: []
            };
        },
        methods: {
            queryList(pageNo, pageSize) {
              	//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
              	//这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过this.$refs.paging.complete(请求回来的数组)将请求结果传给z-paging
                this.$request.queryList({ pageNo,pageSize }).then(res => {
                	//请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
                	this.$refs.paging.complete(res.data.list);
                }).catch(res => {
                	//如果请求失败写this.$refs.paging.complete(false)，会自动展示错误页面
                	//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
                	//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
                	this.$refs.paging.complete(false);
                })
            }
        },
    };
</script>

<style scoped>
    
</style>
```

::: danger 特别注意
#### ① v-model所绑定的list请不要在网络请求成功回调中自己修改，只需要将请求结果通过`this.$refs.paging.complete(请求回调数组)`传给z-paging即可，不要自己给list赋值！！
#### ② @query所绑定的方法不要自己调用！！需要刷新列表数据时，只需要调用`this.$refs.paging.reload()`即可。
:::

<center style="margin-bottom:10px;"><img src="https://visitor-badge.glitch.me/badge?page_id=smilezxlee.z-paging" /></center> 
<div style="margin-bottom:-80px; display:flex;justify-content: center;font-size:13px;">Copyright 2021 z-paging | <a style="color: #014084;margin-left:5px;" href="https://beian.miit.gov.cn/" target="_blank">闽ICP备17015849号-1</a></div>

