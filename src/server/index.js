const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa();
const router = new Router();
const template = require("./src/template/index")

app.use(bodyParser())
router.post("/api/test", async (ctx, next) => {	
	try {
		template.get("TEST", JSON.parse(ctx.request.body.data))
		ctx.body = "success"
	} catch (e) {
		console.log(e)
	}
})
app.use(router.routes())

app.listen(8001);


