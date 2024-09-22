const studentCreateForm = document.getElementById("student-create-form");
const studentResultForm = document.getElementById("student-result-form");
const studentDataList = document.getElementById("student-deta-list");
const updateStudentResultForm = document.getElementById(
  "update-student-result-form"
);
const studentDetailsShow = document.getElementById("student-details-show");
const msg = document.querySelector(".msg");
const btnClose = document.querySelectorAll(".btn-close");

/**
 *show all data
 */
const getAllStudents = () => {
  const data2 = JSON.parse(localStorage.getItem("students"));

  let listData = "";
  if (data2) {
    data2.reverse().map((item, index) => {
      listData += `
      
      <tr>
       <td ><img 
        src="${item.photo}"
        /></td>
      <td >${item.name}</td>
      <td>${item.roll}</td>
      <td>${item.reg}</td>
      <td>${item.year}</td>
      <td>${item.examination}</td>
      <td >${item.board}</td>
      <td >${timeAgo(item.createAt)}</td>
      <td >
      ${
        item.results
          ? `<button  class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#update-student-result-form" onclick="updateStudentResultModel('${item.id}')">Update Result</button>`
          : `<button  class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#student-result-form" onclick="addStudentResultModel('${item.id}')">Add Result</button>`
      }
      </td>
      

      <td >

      <button  class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#student-details-show"  onclick="studentDetailesShowModal('${
        item.id
      }')"><i class="fa fa-eye" ></i></button>
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
    btnClose.forEach((item) => item.click());
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
    !data.socil_science ||
    !data.science ||
    !data.religion
  ) {
    msg.innerHTML = createAlert("All Fields are Requerd");
  }

  //get All students
  const students = JSON.parse(localStorage.getItem("students"));

  //add Result

  const addResults = students.map((item) => {
    if (item.id == data.id) {
      return {
        ...item,
        results: {
          bangla: data.bangla,
          english: data.english,
          mathematics: data.mathematics,
          socil_science: data.socil_science,
          science: data.science,
          religion: data.religion,
        },
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("students", JSON.stringify(addResults));

  e.target.reset();
  btnClose.forEach((item) => item.click());
  getAllStudents();
};

/**
 * Update Result Data...........................................................
 */

const updateStudentResultModel = (id) => {
  const studentResult = JSON.parse(localStorage.getItem("students"));

  const updateData = studentResult.find((data) => data.id == id);
  updateStudentResultForm.querySelector('input[name="id"]').value = id;

  updateStudentResultForm.querySelector('input[name="bangla"]').value =
    updateData.results.bangla;
  updateStudentResultForm.querySelector('input[name="english"]').value =
    updateData.results.english;
  updateStudentResultForm.querySelector('input[name="mathematics"]').value =
    updateData.results.mathematics;
  updateStudentResultForm.querySelector('input[name="socil_science"]').value =
    updateData.results.socil_science;
  updateStudentResultForm.querySelector('input[name="science"]').value =
    updateData.results.science;
  updateStudentResultForm.querySelector('input[name="religion"]').value =
    updateData.results.religion;
};

/**
 * updateStudentResultForm submit
 */
updateStudentResultForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  //update Results
  const students = JSON.parse(localStorage.getItem("students"));

  const updateResults = students.map((item) => {
    if (item.id == data.id) {
      return {
        ...item,
        results: {
          bangla: data.bangla,
          english: data.english,
          mathematics: data.mathematics,
          socil_science: data.socil_science,
          science: data.science,
          religion: data.religion,
        },
      };
    } else {
      return item;
    }
  });

  localStorage.setItem("students", JSON.stringify(updateResults));

  btnClose.forEach((item) => item.click());
  getAllStudents();
};

//student Detailes Show
const studentDetailesShowModal = (id) => {
  const studentResult = JSON.parse(localStorage.getItem("students"));

  const updateData = studentResult.find((data) => data.id == id);
  studentDetailsShow.querySelector('input[name="id"]').value = id;

  studentDetailsShow.getElementById("father").value = updateData.father;
  studentDetailsShow.querySelector('input[name="english"]').value =
    updateData.results.english;
  studentDetailsShow.querySelector('input[name="mathematics"]').value =
    updateData.results.mathematics;
  studentDetailsShow.querySelector('input[name="socil_science"]').value =
    updateData.results.socil_science;
  studentDetailsShow.querySelector('input[name="science"]').value =
    updateData.results.science;
  studentDetailsShow.querySelector('input[name="religion"]').value =
    updateData.results.religion;
};
