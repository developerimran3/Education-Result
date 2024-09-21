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
                  <td class="fw-bold">PASSED</td>
                  <td>Institute</td>
                  <td>${searchData.institute}</td>
                </tr>
                <tr>
                  <td>GPA</td>
                  <td colspan="3" class="fw-bold">${getFinalGrade(
                    searchData.results
                  )} </td>
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
                    <td>${getGrade(searchData.results.bangla)} </td>
                    <td>${getGpa(searchData.results.bangla)}</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>ENGLISH</td>
                    <td>${getGrade(searchData.results.english)} </td>
                    <td>${getGpa(searchData.results.english)}</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>MATHEMATICS</td>
                    <td>${getGrade(searchData.results.mathematics)} </td>
                    <td>${getGpa(searchData.results.mathematics)}</td>
                  </tr>
                  <tr>
                    <td>145</td>
                    <td>SOCIAL SCIENCE</td>
                    <td>${getGrade(searchData.results.socil_Science)} </td>
                    <td>${getGpa(searchData.results.socil_Science)}</td>
                  </tr>
                  <tr>
                    <td>145</td>
                    <td>SCIENCE</td>
                    <td>${getGrade(searchData.results.science)} </td>
                    <td>${getGpa(searchData.results.science)}</td>
                  </tr>
                  <tr>
                    <td>111</td>
                    <td>RELIGION (ISLAM)</td>
                    <td>${getGrade(searchData.results.religion)} </td>
                    <td>${getGpa(searchData.results.religion)}</td>
                  </tr>
                </tbody>
              </table>
              <div class="btns-search">
                <a href="index.html">Search Again</a>
              </div>
            </div>
          </div>


`;
