/**
 * Separate number with comma by 3 chars.
 *
 * @param {number|string} amount Non-separated amount.
 * @returns {string} Separated amount.
 */
export const splitBy3 = amount => {
  return `${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
