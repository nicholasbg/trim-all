/**
 * @description Remove extra whitespace
 * @param {string} str string with extra whitespace
 * @return {string} string is returned with all whitespace runs replaced with a
 *                  single space and whitespace removed from both ends of the
 *                  string
 * @example
 * trimAll(`
 *     Darkwing Duck
 *                  When there's trouble you
 *                                          Call DW
 * `);
 * @output "Darkwing Duck When there's trouble you Call DW"
 */
module.exports = function trimAll(str) {
  return str.replace(/\s+/g, " ").trim();
};
