import delayExecFunc from "@/utils/delayExecFunc";

describe('1s后执行传入的函数', () => {
    // 所有测试前执行的钩子函数
    beforeAll(() => {
        // 创建一个假的定时器
        jest.useFakeTimers()
    })

    it('执行传入的函数', () => {
        // 创建一个全局的setTimeout函数
        jest.spyOn(global, 'setTimeout')

        // 生成一个监听函数（假函数）
        const callback = jest.fn()
        // 断言这个函数从未被调用过
        expect(callback).not.toHaveBeenCalled()

        delayExecFunc(callback)

        // 快进时间
        jest.runAllTimers()

        // 断言这个函数被调用过
        expect(callback).toHaveBeenCalled()
        // 执行setTimeout一次 
        expect(setTimeout).toHaveBeenCalledTimes(1)
        // 1s后执行setTimeout
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
    })
})