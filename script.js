console.log('script loaded');
document.addEventListener('DOMContentLoaded', function () {
  // ----- Dữ liệu bài tập -----
  const ASSIGNMENTS = [
    { id: "01", title: "Bài 01 — Giới thiệu / HTML cơ bản", path: "assignments/01-gioi-thieu/" },
    // { id: "02", title: "Bài 02 — CSS", path: "assignments/02-css/" },
    // { id: "03", title: "Bài 03 — JS", path: "assignments/03-js/" },
  ];

  // ----- DOM refs -----
  const listEl   = document.getElementById("assignmentsList");
  const yearEl   = document.getElementById("year");
  const sidebar  = document.getElementById("sidebar");
  const toggleBtn= document.getElementById("toggleSidebar");

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

  // ----- Mở/đóng sidebar -----
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
});


// ----- Hiển thị Giới thiệu + How to khi bấm nút -----
// Chỉ toggle tại chỗ nếu href là anchor (#...). Nếu href là "about/" thì để điều hướng bình thường.
const showBtn = document.getElementById('showIntroBtn');
const intro   = document.getElementById('gioi-thieu');
const howto   = document.getElementById('howto');

if (showBtn) {
  const href = showBtn.getAttribute('href') || '';
  if (href.startsWith('#') && intro && howto) {
    showBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const toToggle = [intro, howto];
      const isHidden = intro.classList.contains('hidden');
      if (isHidden) {
        toToggle.forEach(sec => { sec.classList.remove('hidden'); sec.classList.add('revealed'); });
        intro.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        toToggle.forEach(sec => { sec.classList.add('hidden'); sec.classList.remove('revealed'); });
      }
    });
  }
}
