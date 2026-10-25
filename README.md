# Assignment 5. JavaScript Basics (DOM Manipulation & Events)

**Name:** Sailau Ramazan
**Group:** SE - 2539

---

## Part 1: Profile Object, Data Types & Arithmetic

### Task 1. The Personal Info Object

I created a `const` object `userProfile` with four different data types: a string (`name`), a number (`birthYear`), a boolean (`isDeveloper`) and an array (`hobbies`).

```js
const userProfile = {
  name: "Student",
  birthYear: 2005,
  isDeveloper: true,
  hobbies: ["Coding", "Football", "Music"]
};
```

**Screenshot:**

<img width="707" height="332" alt="image" src="https://github.com/user-attachments/assets/e71b3ac0-81bd-4ac8-92f0-ce5a4ed82a2e" />



### Task 2. Arithmetic Calculations

The age is calculated dynamically: current year (`new Date().getFullYear()`) minus `birthYear`. Months old is `age * 12`, and the hobbies count is `hobbies.length`. The values are shown on the page and in the console.

**Screenshot:**

<img width="837" height="337" alt="image" src="https://github.com/user-attachments/assets/b82be9e1-ddb8-4e43-a9f9-36d64958fe24" />



---

## Part 2: Form Input & Event Responses

### Task 3. HTML Form Setup

The form has an input for Username, an input for Birth Year and a "Create / Update Profile" submit button.

**Screenshot:**

<img width="765" height="376" alt="image" src="https://github.com/user-attachments/assets/f409ea0b-4cad-4af8-9981-15fc04ac4df7" />


### Task 4. Event Listener

I added a `submit` event listener to the form. It uses `event.preventDefault()`, reads the input values, checks that they are valid, updates the `userProfile` object and then shows the new data on the page (age and months are recalculated).

**Screenshot (before and after updating):**

<img width="766" height="736" alt="image" src="https://github.com/user-attachments/assets/69d8ad21-f703-4047-a019-848ce943a964" />


---

## Part 3: DOM List Manipulation

### Task 5. Creating & Removing Elements

- A `<ul>` list shows the hobbies from `userProfile.hobbies`.
- **Add Item** takes the text from the input, creates a new `<li>` with `document.createElement` and adds it with `appendChild`.
- **Remove Item** deletes the last `<li>` with `removeChild`.
- The `hobbies` array is updated together with the list, so the hobbies count in the profile always matches.

**Screenshot:**

<img width="767" height="432" alt="image" src="https://github.com/user-attachments/assets/d10f09dc-8816-4e4f-84af-132d54095d7b" />


---

## Summary of My Work

First I made the HTML structure with three sections (profile, form, list). Then I wrote the `userProfile` object and the functions for calculating age and months. After that I connected the form with a `submit` event listener and added simple validation, so empty or wrong values are not accepted. In the last part I used `createElement`, `appendChild` and `removeChild` to add and remove list items. The main difficulties were remembering to use `preventDefault()` in the form and keeping the array and the list in sync. I tested everything in the browser and checked the console for errors.

## Project Files

- `index.html` - page structure
- `style.css` - styles
- `script.js` - JavaScript code
