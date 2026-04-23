var courses = [
  { id: "uiux", title: "UI/UX Design", category: "UI/UX Design", level: "مبتدئ", trainer: "جون محسن" },
  { id: "frontend", title: "Front-end Developing", category: "Front-end", level: "متقدم", trainer: "عبد الرحمن زغلول" },
  { id: "mobile", title: "Mobile Application (Flutter)", category: "Mobile Applications", level: "متوسط", trainer: "انجيلوس رزق" },
  { id: "data", title: "Data Analysis", category: "Data Analysis", level: "متوسط", trainer: "كريستين عماد" },
  { id: "mobile2", title: "Mobile Application (Flutter)", category: "Mobile Applications", level: "متقدم", trainer: "انجيلوس رزق" },
  { id: "uiux2", title: "UI/UX Design", category: "UI/UX Design", level: "متوسط", trainer: "جون محسن" },
  { id: "data2", title: "Data Analysis", category: "Data Analysis", level: "متقدم", trainer: "كريستين عماد" },
  { id: "cyber", title: "Cyber Security", category: "Back-end", level: "مبتدئ", trainer: "مينا عماد" }
];

var selectedCat = "all";
var selectedLevel = "all";

var levelClasses = { "مبتدئ": "level-beginner", "متوسط": "level-intermediate", "متقدم": "level-advanced" };

function renderCourses() {
  var grid = document.getElementById("coursesGrid");
  var filtered = courses.filter(function(c) {
    var catOk = selectedCat === "all" || c.category === selectedCat;
    var lvlOk = selectedLevel === "all" || c.level === selectedLevel;
    return catOk && lvlOk;
  });
  grid.innerHTML = filtered.map(function(c) {
    return '<a href="course-detail.html" class="course-card">' +
      '<div class="thumb"><img src="https://placehold.co/400x176/3b82f6/ffffff?text=' + encodeURIComponent(c.title) + '" alt="' + c.title + '"></div>' +
      '<div class="info"><h3>' + c.title + '</h3>' +
      '<div class="meta"><span class="' + (levelClasses[c.level]||'') + '">' + c.level + '</span><span>المدرب: ' + c.trainer + '</span></div></div></a>';
  }).join("");
}

document.getElementById("categoryFilters").addEventListener("click", function(e) {
  if (e.target.classList.contains("filter-btn")) {
    this.querySelectorAll(".filter-btn").forEach(function(b){b.classList.remove("active");});
    e.target.classList.add("active");
    selectedCat = e.target.dataset.cat;
    renderCourses();
  }
});

document.getElementById("levelFilters").addEventListener("click", function(e) {
  if (e.target.classList.contains("filter-btn")) {
    this.querySelectorAll(".filter-btn").forEach(function(b){b.classList.remove("active");});
    e.target.classList.add("active");
    selectedLevel = e.target.dataset.level;
    renderCourses();
  }
});

renderCourses();
