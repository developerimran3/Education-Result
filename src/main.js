const student_create_form = document.getElementById("student-create");
const studentList = document.getElementById("student-deta-list");
const msg = document.querySelector(".msg");
const singalStudentData = document.querySelector(".student-data");

// Student Show form............
const getAllStudents = () => {
  const students = getDataLS("students");

  let dataList = "";

  if (students) {
    students.forEach((item, index) => {
      dataList += `<tr>
                      <td>${index + 1}</td>
                      <td>
                        <img src="${item.photo}" alt="" />
                      </td>
                      <td>${item.name}</td>
                      <td>${item.email}</td>
                      <td>${item.phone}</td>
                      <td>${item.location}</td>
                      <td>${timeAgo(item.createdAt)}</td>
                      <td>
                        <button
                          class="btn btn-sm btn-info"
                          data-bs-toggle="modal"
                          data-bs-target="#student-show"
                          onclick="showSingalStudent('${item.id}')"
                        >
                          <i class="fa fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-warning">
                          <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteStudens('${
                          item.id
                        }')">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>`;
    });
  } else {
    dataList = `<tr>
                    <td colspan="7" class="text-center text-danger" >No Data Found</td>
               </tr>`;
  }

  studentList.innerHTML = dataList;
};

const deleteStudens = (id) => {
  const conf = confirm("Are You suer?");

  if (conf) {
    deleteSingleData("students", id);
    getAllStudents();
  }
};

const showSingalStudent = (id) => {
  const { name, email, phone, location, photo } = getSignalData("students", id);

  singalStudentData.innerHTML = `<img
                src="${photo}"
                alt=""
              />
              <h2>${name}</h2>
              <p>${email}</p>
              <p>${phone}</p>
              <p>${location}</p>
              `;
};
getAllStudents();
//Now Submit Create student Form........
student_create_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const { name, email, phone, location, photo } = Object.fromEntries(form_data);
  if (!name || !email || !phone || !location || !photo) {
    msg.innerHTML = createAlert("All fields are requard");
  } else if (!isEmail(email)) {
    msg.innerHTML = createAlert("Invalid email Address", "warning");
  } else if (!isMobile(phone)) {
    msg.innerHTML = createAlert("Invalid Mobile Nubmer", "warning");
  } else {
    sendDataLS("students", {
      id: createID(),
      name,
      email,
      phone,
      location,
      photo,
      createdAt: Date.now(),
    });

    msg.innerHTML = createAlert("Student Data Created", "success");

    e.target.reset();

    getAllStudents();
  }
};
