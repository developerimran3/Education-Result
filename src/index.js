const resultSearchForm = document.getElementById("result-search-form");
const pazel = document.getElementById("edu-pazl");

let pazl1 = getRandomNumber();
let pazl2 = getRandomNumber();

localStorage.setItem("edu_pazl", JSON.stringify({ a: pazl1, b: pazl2 }));

pazel.innerHTML = `${pazl1} + ${pazl2}`;

/**
 * Result Search Form Manage
 */
resultSearchForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  //Get Pazel data
  const pazelData = JSON.parse(localStorage.getItem("edu_pazl"));
  const studentlData = JSON.parse(localStorage.getItem("students"));

  //check pazel
  if (pazelData.a + pazelData.b !== parseInt(data.pazel)) {
    alert("Pazel Not Match");
  } else {
    const searchData = studentlData.find(
      (item) =>
        item.roll == data.roll &&
        item.reg == data.reg &&
        item.examination == data.examination &&
        item.year == data.year &&
        item.board == data.board
    );
    if (searchData) {
      localStorage.setItem("resultShow", JSON.stringify(searchData));
      window.location.href = "result.html";
    } else {
      alert("No Result Found");
    }
  }
};
