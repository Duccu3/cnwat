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

  // ----- Hiển thị Giới thiệu + How to khi bấm nút -----
  const showBtn = document.getElementById('showIntroBtn');
  const intro   = document.getElementById('gioi-thieu');
  const howto   = document.getElementById('howto');

  if (showBtn && intro && howto) {
    showBtn.addEventListener('click', (e) => {
      e.preventDefault();
    
      const toToggle = [intro, howto];
      const isHidden = intro.classList.contains('hidden'); // đang ẩn?
    
      if (isHidden) {
        // nếu đang ẩn -> hiện
        toToggle.forEach(sec => {
          sec.classList.remove('hidden');
          sec.classList.add('revealed');
        });
        intro.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // nếu đang hiện -> ẩn
        toToggle.forEach(sec => {
          sec.classList.add('hidden');
          sec.classList.remove('revealed');
        });
      }
    });
    
  } else {
    // Debug giúp bạn nếu thiếu ID nào đó
    console.log('DEBUG ids:', { showBtn, intro, howto });
  }
});
