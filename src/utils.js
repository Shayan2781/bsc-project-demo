/**
 * Utility functions — intentional bugs for the live demo.
 */

export function getItems(data) {
  // BUG: no null check — crashes when API returns undefined
  return data.items.length;
}

export function calculateTotal(items) {
  // FIX: changed <= to < to prevent accessing undefined index
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

export function formatUserName(user) {
  // BUG: assumes user.profile exists
  return user.profile.name.toUpperCase();
}