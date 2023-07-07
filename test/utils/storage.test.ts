import storage from "@/utils/storage";
import Config from "../../setting";

let key = Config.storagekey;
describe("storage", () => {
  it("localStorage取值", () => {
    storage.set("hello world!");
    localStorage.getItem(key);
  });

  it("storage取值", () => {
    localStorage.setItem(key, 'hello Jest!')
    storage.get()
  });
});
