# ****ES2015 Module Exercise****

This exercise gives you practice with ES2015-style import/export.

So that we can work with import/export, we’ll use *create-react-app* to get a starter skeleton. However, we won’t be building an actual React app.

So: start by deleting *everything* inside of the *src/* directory, and then doing your work inside of this now-empty directory.

## **Requirements**

For this assignment you should create three JavaScript files:

**src/helpers.js**

This file should export two array helper functions:

- *choice(items)*: returns a randomly selected item from array of items
- *remove(items, item)*: removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

**src/foods.js**

This file should export this array of fruits:

```jsx
[
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
  "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
];
```

**src/index.js**

This file should import the fruits and both array helpers. It should then:

- Randomly draw a fruit from the array
- Log the message “I’d like one *RANDOMFRUIT*, please.”
- Log the message “Here you go: *RANDOMFRUIT*”
- Log the message “Delicious! May I have another?”
- Remove the fruit from the array of fruits
- Log the message “I’m sorry, we’re all out. We have *FRUITSLEFT* left.”

## **Testing This**

Run this with `npm start` and you should see something like this in your browser console:

```
I'd like one 🍉, please

Here you go: 🍉

Delicious! May I have another?

I'm sorry, we're all out. We have 14 left.
```

## **Testing This**

Run this with `npm start` and you should see something like this in your browser console:

[Solution](https://lessons.springboard.com/Solution-4b18fb0bacd24796af979981aacd776d?pvs=21)
[
  "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
  "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑",
];

I'd like one 🍉, please

Here you go: 🍉

Delicious! May I have another?

I'm sorry, we're all out. We have 14 left.