// A Cascading Buckets-Style Financial Planner / Budgeting Software
// That helps you predict how much discretionary spending you have
// Data
// Expenses are like little buckets that can be filled up
// Each expense has a priority
// Discretionary spending is always last
// So a linked list of objects, that has:
//  ID
//  Next Bucket's ID
//  Last Bucket's ID
//  Overflow
//  Limit
//  Balance
// Boolean: Full?
// Methods: move, setOverflow, setLimit, overflowCheck, spillOver
// And each bucket has a method that reads the previous bucket's balance, and tell if it needs to "give up" some balance?
// You can set an overflow state on them, that tells them when to 
const expenses = ['rent', 'food', 'entertainment'];
let dragStartIndex;
function createList(list) {
    [...list]
        .map(listItem => ({
        id: listItem, limit: null, index: null, funds: null
    }))
        .map(listItem => listItem.funds)
        .forEach(() => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', listItem.id);
        listItem.innerHTML = `
    <div class="draggable" draggable="true">
      <p class="person-name">${listItem.id}</p>
      `;
    });
}
createList(expenses);
