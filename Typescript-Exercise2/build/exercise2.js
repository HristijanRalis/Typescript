"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
// Document load
document.addEventListener("DOMContentLoaded", () => {
  // Exercise 2 Fetch data from API
  try {
    const fetchData = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        // SELECT ul list
        const list = document.getElementById("users");
        const response = yield fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = yield response.json();
        console.log(data);
        data.forEach((user) => {
          const element = document.createElement("div");
          element.classList.add("user");
          element.innerHTML = `
            <h1> ${user.name}</h1>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Company name: ${user.company.name}</p>
        `;
          list === null || list === void 0 ? void 0 : list.appendChild(element);
        });
        // CREATING scale action on any user on events "mouseenter" & "mouseleave"
        const userCards = document.querySelectorAll(".user");
        userCards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            card.classList.add("user-hover");
          });
          card.addEventListener("mouseleave", () => {
            card.classList.remove("user-hover");
          });
        });
      });
    fetchData();
  } catch (e) {
    console.log("Error");
  }
});
