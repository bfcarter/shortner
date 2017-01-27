// get random text
module.exports = function getRandomText(length) {
  let result = '';
  const allowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  // allowed context

  for (let i = 0; i < length; i += 1) {
    result += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }

  return result;  // show results
};
