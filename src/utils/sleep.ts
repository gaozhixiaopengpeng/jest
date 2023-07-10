/**
 * 让程序睡上个几秒再继续执行
 */
const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
};

export default sleep;
