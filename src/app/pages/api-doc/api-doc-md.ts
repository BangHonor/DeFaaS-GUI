

let _apiDocMardkodwnTest = String.raw`
    # api-doc

    ## 公共请求头
    
    | 参数名称     | 类型   | 位置   | 是否必填 | 示例值                            | 描述                       |
    | ------------ | ------ | ------ | -------- | --------------------------------- | -------------------------- |
    | Content-Type | String | Header | 是       | `application / json; charset = utf - 8` | 必须是 `application / json` |
    
    
    
    示例：在 Angular 中使用 HTTP 客户端构造请求头。
    
    https://angular.cn/guide/http#adding-and-updating-headers
    
    ```ts
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

/** POST: add a new hero to the database */
addHero(hero: Hero): Observable < Hero > {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
        .pipe(
            catchError(this.handleError('addHero', hero))
        );
}
    ```
    
    
    
    /
    
    ## 公共响应头
    
    | 参数名称     | 类型   | 位置   | 示例值                            | 描述                                     |
    | ------------ | ------ | ------ | --------------------------------- | ---------------------------------------- |
    | Content-Type | String | Header | `application / json; charset = utf - 8` | 必须是 `application / json`                |
    | code         | Number | Body   | 0                                 | 错误码：0 成功，> 0 失败                 |
    | msg          | String | Body   | ok                                | 错误码的提示信息，信息内容与具体业务有关 |
    | data         | -      | Body   | -                                 | 返回数据，具体业务的数据结构             |
    
    
    
    ## 数据结构
    
    ### FaaSLevel
    
    | 参数名称 | 类型   | 示例值 | 描述                   |
    | -------- | ------ | ------ | ---------------------- |
    | id       | String | “0”    | FaaS Level 的 ID       |
    | cpu      | String | “1”    | CPU 核心数             |
    | mem      | String | “512”  | 使用内存，以 MB 为单位 |
    
    
    
    ## 新建账户
    
    新建一个账户，账户存储在本地后端。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
POST / account / new
    ```
    
    ### 请求参数
    
    | 参数名称 | 类型   | 位置 | 是否必填 | 示例值 | 描述                                       |
    | -------- | ------ | ---- | -------- | ------ | ------------------------------------------ |
    | password | String | Body | 是       | 123456 | 因为保存在本地后端，所以后端明文保存密码。 |
    
    示例
    
    ```http
POST / account / new HTTP / 1.1
公共请求头
{
    "password": "123456"
}
```
    
    ### 返回数据
    
    无
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok"
}
```
    
    
    
    
    
    ## 获取账户列表
    
    获取本地后端创建的账户列表
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
GET / account / list
    ```
    
    ### 请求参数
    
    无
    
    ### 返回数据
    
    | 参数名称 | 类型            | 示例值                   | 描述           |
    | -------- | --------------- | ------------------------ | -------------- |
    | accout   | Array of String | ["0x01", "0x02", "0x03"] | 账户地址的列表 |
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok",
            "data": {
        "accouts": [
            "0x01",
            "0x02",
            "0x03"
        ]
    }
}
```
    
    
    
    
    
    ## 查询 FaaS Token 余额
    
    查询 FaaS Token 的余额。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
GET / faas - token / balance - of
    ```
    
    ### 请求参数
    
    | 参数名称 | 类型   | 位置  | 是否必填 | 示例值                                     | 描述                                          |
    | -------- | ------ | ----- | -------- | ------------------------------------------ | --------------------------------------------- |
    | address  | String | Query | 是       | 0x62afc9291c63349d9d859b00e0d255c1add922a6 | 以太坊地址的十六进制格式，0x 后接 40 位数字。 |
    
    示例
    
    ```http
GET / faas - token / balance - of ? address = 0x62afc9291c63349d9d859b00e0d255c1add922a6 HTTP / 1.1
公共请求头
    ```
    
    ### 返回数据
    
    | 参数名称  | 类型   | 示例值 | 描述              |
    | --------- | ------ | ------ | ----------------- |
    | balanceOf | String | 100    | FaaS Token 的余额 |
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok",
            "data": {
        "balanceOf": "100"
    }
}
```
    
    
    
    ## FaaS 规格
    
    查询 FaaS 规格的列表。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
GET / market / faas - level / list
    ```
    
    ### 请求参数
    
    | 参数名称    | 类型 | 位置 | 是否必填 | 示例值 | 描述                                                         |
    | ----------- | ---- | ---- | -------- | ------ | ------------------------------------------------------------ |
    | enableCache | Bool | Body | 否       | True   | 缺省值为 False。当为 False 时，后端返回后端的本地缓存；当为 True 时，后端会访问区块链并刷新缓存。 |
    
    示例：
    
    ```http
GET / market / faas - level / list HTTP / 1.1
公共请求头
{
    "enableCache": false
}
```
    
    
    
    ### 返回数据
    
    | 参数名称 | 类型               | 示例值 | 描述            |
    | -------- | ------------------ | ------ | --------------- |
    | levels   | Array of FaaSLevel | -      | FaaS 规格的列表 |
    
     示例：
    
    ```json
{
    "code": 0,
        "msg": "ok",
            "data": {
        "levels": [
            {
                "id": "0",
                "cpu": "1",
                "mem": "512"
            },
            {
                "id": "1",
                "cpu": "2",
                "mem": "1024"
            }
        ]
    }
}
```
    
    
    
    
    
    
    
    ## Witness 注册
    
    注册为证人。证人的注册后的初始状态为 Offline。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
POST / witness / login
    ```
    
    ### 请求参数
    
    无
    
    ### 返回数据
    
    无
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok"
}

{
    "code": 10086,
        "msg": "error: you are already registered"
}
```
    
    
    
    ## Witness 注销
    
    注销证人资格。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
POST / witness / logout
    ```
    
    ### 请求参数
    
    无
    
    ### 返回数据
    
    无
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok"
}

{
    "code": 10086,
        "msg": "error: you are not registered"
}
```
    
    
    
    
    
    
    
    ## Witness 上线
    
    证人改变状态为 Online。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
POST / witness / turn - on
    ```
    
    ### 请求参数
    
    无
    
    ### 返回数据
    
    无
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok"
}

{
    "code": 10086,
        "msg": "error: you are not registered"
}
```
    
    
    
    
    
    
    
    ## Witness 下线
    
    证人改变状态为 Offline。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
POST / witness / turn - off
    ```
    
    ### 请求参数
    
    无
    
    ### 返回数据
    
    无
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok"
}

{
    "code": 10086,
        "msg": "error: you are not registered"
}
```
    
    
    
    
    
    
    
    
    
    ## Provider 注册
    
    注册为供应商。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
POST / provider / login
    ```
    
    ### 请求参数
    
    无
    
    ### 返回数据
    
    无
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok"
}

{
    "code": 10086,
        "msg": "error: you are already registered"
}
```
    
    
    
    
    
    
    
    
    
    ## Provider 注销
    
    注销供应商资格。
    
    ### 请求头
    
    使用公共请求头
    
    ### 请求语法
    
    ```http
POST / provider / logout
    ```
    
    ### 请求参数
    
    无
    
    ### 返回数据
    
    无
    
    示例
    
    ```json
{
    "code": 0,
        "msg": "ok"
}

{
    "code": 10086,
        "msg": "error: you are not registered"
}
```
    
    
    
    
    
    ## Customer 部署请求
    
    待定
    
    
    
    
    
    
    
    
    
    
    
    
    
    ---------------------
    
    
    
    
    `
