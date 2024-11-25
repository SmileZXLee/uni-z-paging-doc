# TypeScript 支持 <Badge text="2.7.8"/>

z-paging基于js开发，支持在js/ts中使用，z-paging提供了ts类型定义文件，安装后请注意配置`tsconfig.json`文件中的`compilerOptions > types`部分
## v2.8.1及之后的版本【👍🏻推荐】

* `tsconfig.json`文件示例如下，请在`compilerOptions > types`中添加`z-paging/types`(使用npm安装时如此，若使用其他途径安装请将`z-paging/`修改为对应z-paging路径)：
```json
{
  "extends": "@vue/tsconfig/tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "lib": ["esnext", "dom"],
    // 配置z-paging/types类型定义文件
    "types": ["@dcloudio/types", "z-paging/types"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```
* 在项目中使用`ZPagingRef`定义z-paging实例
```ts
<script setup lang="ts">
import { ref } from 'vue'
// 使用ZPagingRef定义z-paging的ref (<any>可修改为返回数组中具体对象的Type)
const paging = ref<ZPagingRef<any> | null>(null);
// 或使用简化写法
const paging = ref<ZPagingRef>();

// @query所绑定的方法，具体的参数参数类型可在html上的@query注释中查看
const queryList = (pageNo: number | string, pageSize: number | string, from: ZPagingEnums.QueryFrom) => {
  paging.value?.complete([]);
}
</script>
```
* 支持完整的`props`、`slots`、`methods`、`events`的typescript types声明和类型校验。  

| props                                                        |
| :----------------------------------------------------------- |
| <img src="https://z-paging.zxlee.cn/public/img/z-paging-ts-props.png"></img> |

| slots                                                        |
| :----------------------------------------------------------- |
| <img src="https://z-paging.zxlee.cn/public/img/z-paging-ts-slots.png"></img> |

| events                                                       |
| :----------------------------------------------------------- |
| <img src="https://z-paging.zxlee.cn/public/img/z-paging-ts-events.png"></img> |

| methods                                                      |
| :----------------------------------------------------------- |
| <img src="https://z-paging.zxlee.cn/public/img/z-paging-ts-methods.png"></img> |








## v2.8.0及之前的版本 <Badge text="2.8.1起废弃" type="error"/> 
z-paging基于js开发，支持在js/ts中使用，z-paging提供了ts类型定义文件，安装后请注意配置`tsconfig.json`文件中的`compilerOptions > types`部分  

* `tsconfig.json`文件示例如下，请在`compilerOptions > types`中添加`z-paging/global.d.ts`(使用npm安装时如此，若使用其他途径安装请将`z-paging/`修改为对应z-paging路径)：
```json
{
  "extends": "@vue/tsconfig/tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "lib": ["esnext", "dom"],
    // 配置z-paging/global.d.ts类型定义文件
    "types": ["@dcloudio/types", "z-paging/global.d.ts"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```
* 在项目中使用`ZPagingInstance`定义z-paging实例
```ts
<script setup lang="ts">
import { ref } from 'vue'
// 使用ZPagingInstance定义z-paging的ref (<any>可修改为返回数组中具体对象的Type)
const paging = ref<ZPagingInstance<any> | null>(null);
// 或使用简化写法，v2.7.9起支持
const paging = ref<ZPagingInstance>();

// z-paging相关Events可以通过ZPagingEvent.Xxx设置Event类型，例如@query对应ZPagingEvent.Query、@scroll对应ZPagingEvent.Scroll
const queryList: ZPagingEvent.Query = (pageNo: number, pageSize: number) => {
  paging.value?.complete([]);
}
</script>
```
* 仅支持`methods`的typescript types声明和类型校验。

