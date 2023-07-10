import sleep from "@/utils/sleep";

describe("Sleep函数", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("让程序睡上个几秒再继续执行", async () => {
    const callback = jest.fn();

    const fn = async () => {
      await sleep(1000);
      callback();
    };

    const promise = fn();

    expect(callback).not.toHaveBeenCalled();
    jest.runAllTimers();

    await promise;
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
