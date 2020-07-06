/**
 * Validate if the passed url is valid
 * @param {String} url url
 */
function isURL(url) {
  try {
    new URL(url);
  } catch (error) {

  }
}
