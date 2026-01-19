// 예시 계정 데이터
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

const resultBox = document.getElementById("result");
const resultId = document.getElementById("resultId");
const resultPw = document.getElementById("resultPw");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const studentId = studentIdInput.value.trim();
  const studentName = studentNameInput.value.trim();

  resultBox.style.display = "none";
  errorMessage.style.display = "none";

  if (!studentId && !studentName) {
    errorMessage.textContent = "학번 또는 이름 중 하나를 입력하세요.";
    errorMessage.style.display = "block";
    return;
  }

  const account = accounts.find(acc =>
    (studentId && acc.studentId === studentId) ||
    (studentName && acc.name === studentName)
  );

  if (account) {
    resultId.textContent = a
