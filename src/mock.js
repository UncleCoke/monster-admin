import Mock from 'mockjs'

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


let data = Mock.mock({
    "list|10": [{
        "name|+1": [
            "小明","小黄","小红","小绿","小蓝"
        ],
        "age|+1":[
            5,6,7,8,9
        ]
    }]
})
Mock.mock('/tables', 'post', {
    code: 0,
    msg: '查询成功',
    data
})