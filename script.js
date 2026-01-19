const accounts = [
  {
    studentId: "30101",
    name: "홍길동",
    googleId: "hong30101@seowon.hs.kr",
    googlePw: "sw30101!"
  },
  {
    studentId: "30203",
    name: "김민수",
    googleId: "kim30203@seowon.hs.kr",
    googlePw: "sw30203!"
  }
];

const form = document.getElementById("searchForm");
const studentIdInput = document.getElementById("studentId");
const studentNameInput = document.getElementById("studentName");
const resetBtn = document.getElementById("resetBtn");

const resultBox = document.getElementById("result");
const resultId = document.getElementById("resultId");
const resultPw = document.getElementById("resultPw");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  const studentId = studentIdInput.value.trim();
  const studentName = studentNameInput.value.trim();

  resultBox.style.display = "none";
  errorMessage.style.display = "none";

  if (!studentId && !studentName) {
    errorMessage.textContent = "학번 또는 이름을 입력하세요.";
    errorMessage.style.display = "block";
    return;
  }

  const account = accounts.find(acc =>
    (studentId && acc.studentId === studentId) ||
    (studentName && acc.name === studentName)
  );

  if (account) {
    resultId.textContent = account.googleId;
    resultPw.textContent = account.googlePw;
    resultBox.style.display = "block";
  } else {
    errorMessage.textContent = "일치하는 계정 정보를 찾을 수 없습니다.";
    errorMessage.style.display = "block";
  }
});

resetBtn.addEventListener("click", () => {
  studentIdInput.value = "";
  studentNameInput.value = "";
  resultBox.style.display = "none";
  errorMessage.style.display = "none";
});
