const Router = require("@koa/router");
const router = new Router();
const {
  userLogin,
  userFind,
  userInsert,
} = require("../controllers/mysqlControl.js");

router.prefix("/user");

// 定义接口
router.post("/login", async (ctx) => {
  // console.log(ctx.request.body); // 获取到了前端传递的参数
  const { username, password } = ctx.request.body;

  try {
    const result = await userLogin(username, password); // 如果await错误就不走后面，用 catch(err) 捕获错误
    // console.log(result);
    if (result.length) {
      // 查到了
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username,
      };

      ctx.body = {
        code: "8000",
        data: data,
        msg: "登录成功",
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "账号或密码错误",
      };
    }
  } catch (err) {
    ctx.body = {
      code: "8005",
      data: err,
      msg: "服务器异常",
    };
  }
});

// 注册接口
router.post("/register", async (ctx) => {
  console.log(ctx.request.body); // 获取到了前端传递的参数
  const { nickname, username, password } = ctx.request.body;
  // 判断参数是否为空
  if (!nickname || !username || !password) {
    ctx.body = {
      code: "8001",
      data: "error",
      msg: "账号密码或不能为空",
    };
    return;
  }

  try {
    // 判断账号是否存在
    const findRes = await userFind(username);
    console.log(findRes);
    if (findRes.length) {
      // 有值说明账号已存在
      ctx.body = {
        code: "8003",
        data: "error",
        msg: "该账号已存在",
      };
    }

    // 添加信息到数据库
    const result = await userInsert(nickname, username, password);
    // console.log(result);
    if (result.affectedRows === 1) {
      // 插入成功
      ctx.body = {
        code: "8000",
        data: "success",
        msg: "注册成功",
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "failed",
        msg: "注册失败",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});

module.exports = router;
