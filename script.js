console.log('script loaded');
document.addEventListener('DOMContentLoaded', function () {
  // ----- Dữ liệu bài tập -----
  const ASSIGNMENTS = [
    { id: "01", title: "Bài 01 — Cấu hình ứng dụng Web", path: "assignments/01-gioi-thieu/" },
    // { id: "02", title: "Bài 02 — CSS", path: "assignments/02-css/" },
    // { id: "03", title: "Bài 03 — JS", path: "assignments/03-js/" },
  ];

  // ----- DOM refs -----
  const listEl   = document.getElementById("assignmentsList");
  const yearEl   = document.getElementById("year");

  // ----- Footer năm -----
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Render menu bài tập -----
  function renderAssignments() {
    if (!listEl) return;
    listEl.innerHTML = "";
    ASSIGNMENTS.forEach((a) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = a.path;
      link.target = "_self";
      link.innerHTML = `<span>📄</span> <span>${a.title}</span>`;
      li.appendChild(link);
      listEl.appendChild(li);
    });
  }

  renderAssignments();
  
});
