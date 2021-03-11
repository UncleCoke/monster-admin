import Mock, { Random } from 'mockjs'

Mock.mock('/login', 'post', {
    code: 0,
    msg: '登录成功',
    data: {
        token: 'f5d2d8ac93504c96a1300f9697b694bc',
        user: {
            userName: 'admin',
            avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/hOibRpfJBjCZPIjUpXHMfSECtuoCr2ic4MQo1fNRu3bnaUhkrV4B7jdBB1QqbgK21IPibNyQRuoIiag8ESzlorqiaqg/132'
        },
        role: 'admin'
    },
})

Random.cname();
Random.email();
Mock.mock('/tables', 'post', {
    code: 0,
    msg: '查询成功',
    "list|10":[{
        "name":"@cname",
        "age|20-30":30,
        "email":"@email"
    }]
})