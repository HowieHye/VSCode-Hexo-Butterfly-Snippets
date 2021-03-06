# Hexo Butterfly Snippets Modify

Fork from [KakaWanYifan/VSCode-Hexo-Butterfly-Snippets](https://github.com/KakaWanYifan/VSCode-Hexo-Butterfly-Snippets)

## 用法

### 补全

敲入`>`，然后会有提示，自动补全。

### 功能

- `>default`: Insert Note Default.
- `>primary`: Insert Note Primary.
- `>primary-no-icon`: Insert Note Primary No-Icon.
- `>success`: Insert Note Success.
- `>info`: Insert Note Info.
- `>warning`: Insert Note Warning.
- `>danger`: Insert Note Danger.
- `>mermaid`: Insert Mermaid.
- `>tabs`: Insert Tabs.
- `>tabs_tensorflow`: Insert Tabs TensorFlow.
- `>gallerygroup`: Insert Gallery Group.
- `>gallery`: Insert Gallery.
- `>inline`: Insert Inline tag-hide.
- `>block`: Insert Block tag-hide.
- `>toggle`: Insert Toggle tag-hide.
- `>btn`: Insert Button.
- `>code`: Insert Code formula.
- '>inlineimg': Insert Inline Image.
- '>label': Insert Label.

### 自定义功能

修改`/snippets/markdown.json`，然后重新打包。

## 安装

已在`Visual Code`上架了，搜索`Hexo Butterfly Snippets Modify`。

## 打包

clone 源代码，安装插件`vsce`。

```
npm i vsce -g
```

在根目录，输入命令打包。

```
vsce package
```

## 要求

`Visual Code`版本不低于 `1.41.0`

## LICENSE

MIT LICENSE.
