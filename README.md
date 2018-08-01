# No.9 Skill Tree

---

## [DEMO](dist/)

## [spec](https://www.facebook.com/groups/173311386703334/learning_content/?filter=377909922704174&post=216733832361089)

- [UI Roadmap](https://xd.adobe.com/spec/f02993f5-4d00-4282-5a3b-cc27869f9afd-8618/)
  - [圖形下載](https://drive.google.com/drive/folders/1nmO5LFZ60JaqglJUwMbA7U9BzYJHI2Bm)
  - [Screen Demo](https://marvelapp.com/5dhed6b/screen/46204854)
  - [Text Data](https://medium.com/monospace-tw/%E4%BB%8B%E9%9D%A2%E8%A8%AD%E8%A8%88%E5%B8%AB%E8%BD%89%E8%81%B7%E4%B9%8B%E8%B7%AF-dcd9a19aa1dc?sk=c6b3e8556cda8df8a02f265a41519d01)
- [Front-end Skill Tree](https://xd.adobe.com/spec/912f916f-0b05-49ae-66e8-b42b299c19b7-e71e/screen/3eb53c19-6d4e-44dd-b6ee-a32266820ca8/mainpage/)
  - [圖形下載](https://drive.google.com/drive/folders/1Fob_CEcN1Zrz_CZg9ls2Ib7zJj058fen)


## Note

### ERROR in ./src/static/img/img_axe.png 1:0 -- Module parse failed: Unexpected character '�' (1:0)

需要設定 url-loader 及 image-webpack-loader 來編譯圖片檔。
- [新手向 Webpack 完全攻略 (7) – 編譯圖片？略懂略懂](https://5xruby.tw/ja/posts/webpack-07)

```sh
npm i -D url-loader image-webpack-loader
```

```js
// @ webpack.config.js
{
  test: /\.(jpe?g|png|gif|svg)$/,
  use: [{
      loader: 'url-loader',
      options: {
        limit: 40000
      }
    },
    'image-webpack-loader'
  ]
}
```

### 在 component 根元素加事件

若要在 componet 的根元素上加事件，有兩種做法：
1. 加 .native

```pug
<!-- roadmap.vue -->
map-item(@click.prevent.native="onSelected(item)")
```

2. 採用 emit

```pug
<!-- roadmap.vue -->
map-item(@on-click="onSelected", :item="item")

<!-- roadmap-item.vue -->
<template lang="pug">
  .map-item(@click.prevent="$emit('on-click', item)")
</template>
<script>
export default {
  props: ['item'],
}
</script>
```

- [Listening for Native Events on Components with v-on](https://vuejs.org/v2/guide/migration.html#Listening-for-Native-Events-on-Components-with-v-on-changed)
- [Vue v-on:click does not work on component](https://stackoverflow.com/questions/41475447/vue-v-onclick-does-not-work-on-component)

### CSS濾鏡效果

- [CSS filter Property](https://www.w3schools.com/cssref/css3_pr_filter.asp)
- [CSS濾鏡效果](http://blog.shihshih.com/css-filter/)
- [CSS 陰影效果的比較：Drop-Shadow 與 Box-Shadow](http://blog.shihshih.com/drop-shadow-vs-box-shadow/)

不同 filter 之間無法用 transition 漸變交替，必須各自設定：

```css
.icon {
  filter: grayscale(1) drop-shadow(0 0 0 $color-white);
  transition: filter .5s ease;

  &--active {
    filter: grayscale(0) drop-shadow(0 0 6px $color-white);
  }
}
```

### SVG & CSS

使用 CSS 控制 SVG 時，必須了解到 SVG 的屬性分為：
- [可以使用 CSS 控制的 properties](http://www.w3.org/TR/SVG/propidx.html)
- [不能使用 CSS 控制的 attributes](http://www.w3.org/TR/SVG/attindex.html) 

- [SVG 研究之路 (14) - 控制 SVG 的注意事項](http://www.oxxostudio.tw/articles/201406/svg-14-control-SVG.html)