/**
 * 1s后执行传入的callback
 */
type AnyFunction = (...args: any[]) => any;

const delayExecFunc = (callback?: AnyFunction) => {
    console.log('准备执行');

    setTimeout(() => {
        console.log('定时器已执行')
        callback && callback()
    }, 1000);
}

export default delayExecFunc