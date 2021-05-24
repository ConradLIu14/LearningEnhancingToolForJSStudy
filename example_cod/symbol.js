// 1. 描述一个班机信息乘客信息
// 一般性定义
console.log("1.................................一般定义")
{
    const cust1 = 'zhangsan'
    const cust2 = 'lisi'
    const grade = {
        [cust1]: { address: 'yyy', tel: '222' },
        [cust2]: { address: 'zzz', tel: '111' }
    }
    console.log(grade) // 存在问题 cust2覆盖了cust1
}

{
    // 使用Symbol
    const cust1 = Symbol('zhangsan')
    const cust2 = Symbol('lisi')
    const grade = {
        [cust1]: { address: 'yyy', tel: '222' },
        [cust2]: { address: 'zzz', tel: '111' }
    }
    console.log(grade) // Symbol(lisi): {address: "zzz", tel: "111"} Symbol(zhangsan): {address: "yyy", tel: "222"}
    console.log(grade[cust1]) // {address: "yyy", tel: "222"}
    console.log(grade[cust2]) // {address: "zzz", tel: "111"} 
}

// // 2. 保护某些属性
{
    console.log("2...........................保护某些属性...................................")
    const sym = Symbol('web')
    class User {
        constructor(name) {
            this.name = name
            this[sym] = 'www.xxx.com' // 需要保护的属性
        }
        getName() {
            return this.name + this[sym]
        }
    }
    const user = new User('zhangsan')
    console.log(user.getName()) // zhangsanwww.xxx.com
}

// // 消除魔术字符串
// // 原始
{
    function getArea(shape) {
        let area = 0
        switch (shape) {
            case 'Triangle':
                area = 1
                break
            case 'Circle':
                area = 2
                break
        }
        return area
    }
    console.log(getArea('Triangle'))
}
// 改造一
{
    const shapeType = {
        triangle: 'Triangle',
        circle: 'Circle'
    }
    function getArea(shape) {
        let area = 0
        switch (shape) {
            case shapeType.triangle:
                area = 1
                break
            case shapeType.circle:
                area = 2
                break
        }
        return area
    }
    console.log(getArea(shapeType.triangle))
}
// 思考一个问题：shapeType中的属性具体值，我们真需要关心吗，我们只需要知道不一样就可以了
// 改造二：
{
    const shapeType = {
        triangle: Symbol(),
        circle: Symbol()
    }
    function getArea(shape) {
        let area = 0
        switch (shape) {
            case shapeType.triangle:
                area = 1
                break
            case shapeType.circle:
                area = 2
                break
        }
        return area
    }
    console.log(getArea(shapeType.triangle))
}



