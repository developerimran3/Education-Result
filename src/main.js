const studentCreateForm = document.getElementById("student-create-form");
const studentResultForm = document.getElementById("student-result-form");
const studentDataList = document.getElementById("student-deta-list");
const msg = document.querySelector(".msg");
const btnClose = document.querySelector(".btn-close");

/**
 *show all data
 */
const getAllStudents = () => {
  const data2 = JSON.parse(localStorage.getItem("students"));

  let listData = "";
  if (data2) {
    data2.map((item, index) => {
      listData += `
      
      <tr>
       <td><img
        src="${item.photo}"
        alt=""/></td>
      <td>${item.name}</td>
      <td>${item.roll}</td>
      <td>${item.reg}</td>
      <td>${item.class}</td>
      <td>${item.examination}</td>
      <td>${item.board}</td>
      <td>${timeAgo(item.createAt)}</td>


      <td>
      ${
        item.results
          ? `<button  class="btn btn-sm btn-success">View Result</button>`
          : `<button  class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#student-result-form" onclick="addStudentResultModel('${item.id}')">Add Result</button>`
      }
      </td>

      <td>

      <button  class="btn btn-sm btn-info"><i class="fa fa-eye" ></i></button>
      <button  class="btn btn-sm btn-warning"><i class="fa fa-edit" ></i></button>
      <button  class="btn btn-sm btn-danger"><i class="fa fa-trash" ></i></button>
      </td>
      </tr>
      
      `;
    });
  } else {
  }
  studentDataList.innerHTML = listData;
};
getAllStudents();

/**
 * Submit Student Create Form
 */

studentCreateForm.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  //form valadation

  if (
    !data.name ||
    !data.father ||
    !data.mother ||
    !data.dob ||
    !data.roll ||
    !data.reg ||
    !data.class ||
    !data.examination ||
    !data.institute ||
    !data.board ||
    !data.year ||
    !data.group ||
    !data.type
  ) {
    msg.innerHTML = createAlert("All Fields are Requerd");
  } else {
    let oldData = [];

    //check Old data localstorage or not

    if (localStorage.getItem("students")) {
      oldData = JSON.parse(localStorage.getItem("students"));
    }
    oldData.push({
      ...data,
      id: createID(),
      createAt: Date.now(),
      updatedAt: null,
      results: null,
    });

    //send data to LS
    localStorage.setItem("students", JSON.stringify(oldData));
    e.target.reset();
    btnClose.click();
    getAllStudents();
  }
};

const addStudentResultModel = (id) => {
  studentResultForm.querySelector('input[name="id"]').value = id;
};

/**
 * Students Result Form
 * @param {*} e
 */
studentResultForm.onsubmit = (e) => {
  e.preventDefault();

  //get result_form_data
  const result_form_data = new FormData(e.target);
  const data = Object.fromEntries(result_form_data.entries());

  //form valadtion

  if (
    !data.bangla ||
    !data.english ||
    !data.mathematics ||
    !data.socil_Science ||
    !data.science ||
    !data.religion
  ) {
    msg.innerHTML = createAlert("All Fields are Requerd");
  }

  //get All students
  const students = JSON.parse(localStorage.getItem("students"));

  //add Result

  const updateData = students.map((item) => {
    if (item.id == data.id) {
      return {
        ...item,
        results: {
          bangla: data.bangla,
          english: data.english,
          mathematics: data.mathematics,
          socil_Science: data.socil_Science,
          science: data.science,
          religion: data.religion,
        },
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("students", JSON.stringify(updateData));

  e.target.reset();
  btnClose.click();
  getAllStudents();
};
