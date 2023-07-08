import objToSearchStr from "@/utils/objToSearchStr";

// {page: 1, size: 10, query: name} => page=1&size=10&query=name
describe("Object转换成search样式的字符串", () => {
  it("转换成字符串", () => {
    expect(
      objToSearchStr({
        page: "1",
        size: "10",
        query: 'name'
      })
    ).toEqual("page=1&size=10&query=name");
  });
});
