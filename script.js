const form = document.getElementById("portfolioForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("pName").textContent = form.name.value;
  document.getElementById("pRole").textContent = form.role.value;
  document.getElementById("pAbout").textContent = form.about.value;
  
  const skillsArray = form.skills.value.split(",");
  const skillsList = document.getElementById("pSkills");
  skillsList.innerHTML = "";
  skillsArray.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });
});
