document.addEventListener("DOMContentLoaded", function () {
  const sortable = new Sortable(document.getElementById("sortable"), {
    animation: 150,
  });

  const editButtons = document.getElementsByClassName("edit-button");
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", function () {
      const section = this.parentNode;
      const sectionName = section.getElementsByClassName("section-name")[0];
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = sectionName.innerText;
      section.replaceChild(inputField, sectionName);
      inputField.focus();
      inputField.addEventListener("blur", function () {
        const newName = inputField.value;
        section.replaceChild(sectionName, inputField);

        if (newName && newName !== sectionName.innerText) {
          sectionName.innerText = newName;
          enableSaveButton();
        }
      });
    });
  }

  const saveButton = document.querySelector(".save-btn");
  saveButton.style.display = "none";
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach((input) => {
    input.addEventListener("change", showSaveButton);
  });

  function showSaveButton() {
    saveButton.style.display = "block";
  }
  saveButton.addEventListener("click", () => {
    alert("Changes Saved");
  });
  const liElements = document.querySelectorAll("li.section");
  liElements.forEach((li) => {
    const toggleSwitch = li.querySelector(".toggle-input");
    toggleSwitch.addEventListener("change", () => {
      if (toggleSwitch.checked) {
        li.style.backgroundColor = "lightgray";
      } else {
        li.style.backgroundColor = "";
      }
    });
  });

  // Map each section name to its description
  const sectionDescriptions = {
    "Profile Summary":
      "A brief overview of your professional profile, highlighting key skills and qualifications.",
    "Academic and Cocurricular Achievement":
      "Showcase your accomplishments in academics and extracurricular activities.",
    "Summer Internship Experience":
      "Highlight your work experience and achievements gained during summer internships.",
    "Work Experience":
      "Provide details of your previous employment, including job roles, responsibilities, and accomplishments.",
    Projects:
      "Showcase notable projects you have worked on with details about technologies used.",
    Certifications: " List your earned certifications.",
    "Leadership Positions":
      "Highlight your roles and responsibilities in leadership positions held in organizations or teams.",
    Extracurricular: "Description for Extracurricular",
    Education: "Provide details about your Education",
  };

  const infoButtons = document.querySelectorAll(".info-button");
  infoButtons.forEach((infoButton) => {
    infoButton.addEventListener("click", () => {
      const li = infoButton.parentNode;
      const sectionName = li.querySelector(".section-name").textContent;
      const description = sectionDescriptions[sectionName];
      alert(description);
    });
  });
});
