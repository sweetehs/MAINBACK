const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa();
const router = new Router();
const template = require("./src/template/index")
router.get("/api/test", async (ctx, next) => {
	// debugger;
	try {
		template.get("TEST")
		ctx.body = "success"
	} catch (e) {
		console.log(e)
	}
})
app
	.use(router.routes())
app.listen(8001);


