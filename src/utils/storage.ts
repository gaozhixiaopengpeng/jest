import Config from '../../setting'

let key = Config.storagekey
const get = () => {
  return localStorage.getItem(key);
};
const set = (value: string) => {
  localStorage.setItem(key, value);
};

export default {
  get,
  set,
};
