/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //pretier no please
  let art = ["the", "our", "an", "some", "this"];
  let adj = ["great", "big", "cool", "awesome", "funny"];
  let nouns = ["jogger", "Racoon", "website", "rocket", "Farm"];
  let Tlds = [".com", ".net", ".org", ".pt"];

  let randomDomainNames = [];

  for (let article of art) {
    for (let adjetive of adj) {
      for (let noun of nouns) {
        for (let tld of Tlds) {
          randomDomainNames.push(article + adjetive + noun + tld);
        }
      }
    }
  }

  document.body.innerHTML = `<ul>${randomDomainNames
    .map(randomDomainNames => `<li>${randomDomainNames}</li>`)
    .join("")}
  </ul>`;
};
