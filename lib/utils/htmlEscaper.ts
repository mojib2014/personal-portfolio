const {replace} = ''

// escape
const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g
const ca = /[&<>'"]/g

const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}
// @ts-expect-error: Let's ignore a compile error like this unreachable code
const pe = m => esca[m]

/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
//@ts-expect-error: Let's ignore a compile error like this unreachable code
export const escape = es => replace.call(es, ca, pe)
