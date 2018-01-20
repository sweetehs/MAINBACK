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
router.get("/api/list", async (ctx, next) => {
	ctx.body = {
		data: [{
			name: "乌鲁奇奥拉",
			age: "100",
			prop:"1"
		}, {
			name: "葛力姆乔",
			age: "100"
		}]
	}
})
app.use(router.routes())

app.listen(8001);


