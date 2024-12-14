# 存储
## localStorage
- 浏览器的应用程序存储的一种，不会因为关闭页面而丢失，用于存储一些用户的配置和关键信息
- setItem(key,value)
- getItem(key)
- 序列化（转化为一个JSON字符串）
    JSON.stringify(value)
- 反序列化（JSON转化为一个对象）
    JSON.parse("{\"aigcQuery\":\"画一只猫\",\"imageAigcId\":\"32276610\",\"timestamp\":\"1730278717\",\"token\":\"0d047bcc195fc4752444c09e06007146\"}")
    = {
        "aigcQuery": "画一只猫",
        "imageAigcId": "32276610",
        "timestamp": "1730278717",
        "token": "0d047bcc195fc4752444c09e06007146"
    }
## cookie
## sessionStorage
