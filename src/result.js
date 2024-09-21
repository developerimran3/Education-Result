const markSheet = document.getElementById("mark-sheet");

//get search result

const searchData = JSON.parse(localStorage.getItem("resultShow"));

if (!searchData) {
  window.location.href = "index.html";
}

markSheet.innerHTML = `
<div class="result-sheet">
            <div class="pic">
              <img class="shadow-sm" src="${searchData.photo}" alt="" />
            </div>
            
            <h3>Student Detailes</h3>
            <div class="edu-student-info">
              <table>
                <tr>
                  <td>Roll No</td>
                  <td>${searchData.roll}</td>
                  <td>Name</td>
                  <td>${searchData.name}</td>
                </tr>
                <tr>
                  <td>Board</td>
                  <td>${searchData.board}</td>
                  <td>Father's Name</td>
                  <td>${searchData.father}</td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td>${searchData.group}</td>
                  <td>Mother's Name</td>
                  <td>${searchData.mother}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>${searchData.type}</td>
                  <td>Date of Birth</td>
                  <td>${searchData.dob}</td>
                </tr>
                <tr>
                  <td>Result</td>
                  <td class="fw-bold">${
                    resultSystemPro({
                      bangla: searchData.results.bangla,
                      english: searchData.results.english,
                      mathematics: searchData.results.mathematics,
                      sosal_Science: searchData.results.socil_science,
                      science: searchData.results.science,
                      religion: searchData.results.religion,
                    }).grade
                      ? "Passed"
                      : "Failed"
                  }</td>
                  <td>Institute</td>
                  <td>${searchData.institute}</td>
                </tr>
                <tr>
                  <td>GPA</td>
                  <td colspan="3" class="fw-bold">${resultSystemPro({
                    bangla: searchData.results.bangla,
                    english: searchData.results.english,
                    mathematics: searchData.results.mathematics,
                    sosal_Science: searchData.results.socil_science,
                    science: searchData.results.science,
                    religion: searchData.results.religion,
                  }).gpa.toFixed(2)}</td>
                </tr>
              </table>
            </div>
            

            <h3>Grade Sheet</h3>
            <div class="edu-student-grade-sheet">
              <table>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>GPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td>BANGLA</td>
                    <td>${gpaAndGrade(searchData.results.bangla).grade} </td>
                    <td>${gpaAndGrade(searchData.results.bangla).gpa.toFixed(
                      2
                    )}</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>ENGLISH</td>
                    <td>${gpaAndGrade(searchData.results.english).grade} </td>
                    <td>${gpaAndGrade(searchData.results.english).gpa.toFixed(
                      2
                    )}</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>MATHEMATICS</td>
                    <td>${
                      gpaAndGrade(searchData.results.mathematics).grade
                    } </td>
                    <td>${gpaAndGrade(
                      searchData.results.mathematics
                    ).gpa.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>145</td>
                    <td>SOCIAL SCIENCE</td>
                    <td>${
                      gpaAndGrade(searchData.results.socil_science).grade
                    } </td>
                    <td>${gpaAndGrade(
                      searchData.results.socil_science
                    ).gpa.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>145</td>
                    <td>SCIENCE</td>
                    <td>${gpaAndGrade(searchData.results.science).grade} </td>
                    <td>${gpaAndGrade(searchData.results.science).gpa.toFixed(
                      2
                    )}</td>
                  </tr>
                  <tr>
                    <td>111</td>
                    <td>RELIGION (ISLAM)</td>
                    <td>${gpaAndGrade(searchData.results.religion).grade} </td>
                    <td>${gpaAndGrade(searchData.results.religion).gpa.toFixed(
                      2
                    )}</td>
                  </tr>
                </tbody>
              </table>
              <div class="btns-search">
                <a href="" onclick= "goToSearchPage()" >Search Again</a>
              </div>
            </div>
          </div>


`;

const goToSearchPage = () => {
  localStorage.removeItem("resultShow");
  window.location.href = "index.html";
};
