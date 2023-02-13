const koa = require("koa2");
const port = 8888;
const app = new koa();
app.use((ctx) => {
  ctx.body = "11";
});
app.listen(port);
