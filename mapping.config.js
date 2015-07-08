module.exports = function(options) {

  // options 为 components.json 的值。

  // 可以添加一些逻辑，最终返回一个 mapping 配置列表。
  return [
    {
      reg: /^\/README\.md$/,
      release: false
    }
  ];

}