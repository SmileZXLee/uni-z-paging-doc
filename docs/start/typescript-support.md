# TypeScript 支持 <Badge text="2.7.8"/>

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

// z-paging相关Events可以通过ZPagingEvent.Xxx设置Event类型，例如@query对应ZPagingEvent.Query、@scroll对应ZPagingEvent.Scroll
const queryList: ZPagingEvent.Query = (pageNo: number, pageSize: number) => {
  paging.value?.complete([]);
}
</script>
```


