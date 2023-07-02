/** choose a random item. */

function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}



/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 **/

// function remove(item, items) {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] === item) {
//       return [...items.slice(0, i), ...items.slice(i + 1)];
//     }
//   }
// }
function remove(items, item){
  if(!Array.isArray(items)){
    return;
  }
  let foundItem = items.find(arr => arr === item);
  if (foundItem){
      items.splice(items.indexOf(foundItem), 1);
      return foundItem;
  }
  return undefined;
}


export { choice, remove };





