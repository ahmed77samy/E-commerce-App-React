class CACHE {
  /**
   * set item cache in localStorage
   * @param {String} key
   * @param {String} value
   */
  set(key, value) {
    return localStorage.setItem(key, value);
  }
  /**
   * get item cache from localStorage
   * @param {String} key
   */
  get(key) {
    return localStorage.getItem(key);
  }
  /**
   * remove item cache from localStorage
   * @param {String} key
   */
  remove(key) {
    return localStorage.removeItem(key);
  }
}
const newCACHE = new CACHE();
export default newCACHE;
