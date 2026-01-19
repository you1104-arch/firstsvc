// 1️⃣ 예시 계정 데이터 (실제 운영 시 서버 또는 CSV로 대체)
const accountData = [
  {
    studentId: "30101",
    name: "홍길동",
    googleId: "hong30101@school.go.kr",
    googlePw: "Abc1234!"
  },
  {
    studentId: "30205",
    name: "김민수",
    googleId: "kim30205@school.go.kr",
    googlePw: "Qwer5678!"
  }
];

// 2️⃣ DOM 요소 가져오기
const form = document.getElementById("searchForm");
const inputId = document.getElementById("studentId");
const inputName = document.getElementById("studentName");
const resultSection = document.getElementById("result");
const resultId = document.getElementById("resultId");
const resultPw = document.getElementById("resultPw");
const errorMessage = document.getElementById("errorMessage");

// 3️⃣ 검색 처리 함수
form.addEventListener("submit", function (event) {
  event.preventDefault(); // 페이지 새로고침 방지

  const studentIdValue = inputId.value.trim();
  const studentNameValue = inputName.value.trim();

  // 결과 초기화
  resultSection.style.display = "none";
  errorMessage.style.display = "none";

  // 4️⃣ 데이터 검색
  const foundAccount = accountData.find(account => {
    return (
      account.studentId === studentIdValue &&
      account.name === studentNameValue
    );
  });

  // 5️⃣ 결과 처리
  if (foundAccount) {
    resultId.textContent = foundAccount.googleId;
    resultPw.textContent = foundAccount.googlePw;
    resultSection.style.display = "block";
  } else {
    errorMessage.textContent = "일치하는 계정 정보를 찾을 수 없습니다.";
    errorMessage.style