const userProfile = {
  name: "Student",                           
  birthYear: 2008,                           
  isDeveloper: true,                         
  hobbies: ["Coding", "Football", "Music"]   
};

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function calculateMonths(birthYear) {
  return calculateAge(birthYear) * 12;
}

const profileCard = document.querySelector("#profile-card");
const nameSpan = document.querySelector("#profile-name");
const birthYearSpan = document.querySelector("#profile-birth-year");
const developerSpan = document.querySelector("#profile-developer");
const ageSpan = document.querySelector("#profile-age");
const monthsSpan = document.querySelector("#profile-months");
const hobbiesCountSpan = document.querySelector("#profile-hobbies-count");

function showProfile() {
  const age = calculateAge(userProfile.birthYear);
  const months = calculateMonths(userProfile.birthYear);
  const hobbiesCount = userProfile.hobbies.length;

  nameSpan.textContent = userProfile.name;
  birthYearSpan.textContent = userProfile.birthYear;
  developerSpan.textContent = userProfile.isDeveloper ? "Yes" : "No";
  ageSpan.textContent = age;
  monthsSpan.textContent = months;
  hobbiesCountSpan.textContent = hobbiesCount;

  if (userProfile.isDeveloper) {
    profileCard.classList.add("developer");
  } else {
    profileCard.classList.remove("developer");
  }

  console.log("Profile:", userProfile);
  console.log("Age:", age);
  console.log("Months old:", months);
  console.log("Hobbies count:", hobbiesCount);
}



const profileForm = document.querySelector("#profile-form");
const usernameInput = document.querySelector("#username");
const birthYearInput = document.querySelector("#birth-year");
const formMessage = document.querySelector("#form-message");

profileForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const username = usernameInput.value.trim();
  const birthYear = Number(birthYearInput.value);
  const currentYear = new Date().getFullYear();

  if (username === "") {
    formMessage.textContent = "Please enter a username.";
    formMessage.className = "message error";
    return;
  }

  if (birthYearInput.value === "" || birthYear < 1900 || birthYear > currentYear) {
    formMessage.textContent = "Please enter a valid birth year (1900 - " + currentYear + ").";
    formMessage.className = "message error";
    return;
  }

  userProfile.name = username;
  userProfile.birthYear = birthYear;

  showProfile();

  formMessage.textContent = "Profile updated!";
  formMessage.className = "message success";
  profileForm.reset();
});


const hobbyList = document.querySelector("#hobby-list");
const newItemInput = document.querySelector("#new-item");
const addBtn = document.querySelector("#add-btn");
const removeBtn = document.querySelector("#remove-btn");
const listMessage = document.querySelector("#list-message");

function addListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  hobbyList.appendChild(li);
}

for (const hobby of userProfile.hobbies) {
  addListItem(hobby);
}

addBtn.addEventListener("click", function () {
  const text = newItemInput.value.trim();

  if (text === "") {
    listMessage.textContent = "Please type something first.";
    listMessage.className = "message error";
    return;
  }

  addListItem(text);
  userProfile.hobbies.push(text); 
  newItemInput.value = "";
  listMessage.textContent = "Item added.";
  listMessage.className = "message success";
  showProfile();
});


removeBtn.addEventListener("click", function () {
  const lastItem = hobbyList.lastElementChild;

  if (lastItem === null) {
    listMessage.textContent = "The list is already empty.";
    listMessage.className = "message error";
    return;
  }

  hobbyList.removeChild(lastItem);
  userProfile.hobbies.pop();
  listMessage.textContent = "Last item removed.";
  listMessage.className = "message success";
  showProfile();
});

newItemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

showProfile();
