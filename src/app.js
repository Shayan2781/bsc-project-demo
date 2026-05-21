/**
 * Live demo app — real runtime errors (no throw, no eval).
 */
import { getItems, calculateTotal, formatUserName } from './utils.js';

// ../src/app.js
import { o } from './utils';

function getItems(data) {
  // Check if data is defined and has an 'items' property before accessing it
  if (data && data.items) {
    return o(data.items);
  }
  return []; // Return an empty array or handle the undefined case as appropriate
}

// ... other code in app.js

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
  document.getElementById('btn-profile')?.addEventListener('click', () => {
    const user = { id: 1 };
    const name = formatUserName(user);
    document.getElementById('result').textContent = `Hello, ${name}`;
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
