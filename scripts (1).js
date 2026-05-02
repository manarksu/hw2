
// HOMEPAGE 

window.onload = function () {
  var footer = document.querySelector("footer");
  if (footer) {
    var newP = document.createElement("p");
    var currentDate = new Date();
    var textNode = document.createTextNode("Page loaded on: " + currentDate.toString());
    newP.appendChild(textNode);
    newP.style.fontSize = "0.85em";
    newP.style.opacity = "0.75";
    newP.style.marginTop = "8px";
    footer.appendChild(newP);
  }
};


// (contact.html)
// Form validation on submit

var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.onsubmit = function (event) {
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");

    if (!nameField || !emailField) return true;

    if (nameField.value.trim() === "" || emailField.value.trim() === "") {
      alert("Please fill out all required fields.");
      event.preventDefault();
      return false;
    }

    // Basic email format check (bonus)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return false;
    }

    return true;
  };
}

//  (projects.html)
//  Toggle project description visibility

function toggleDescription(buttonEl) {
  // The button is inside an <article>; find the <p> inside the same article
  var article = buttonEl.parentElement;
  var description = article.querySelector("p");

  if (!description) return;

  if (description.style.display === "none") {
    description.style.display = "block";
    buttonEl.textContent = "Hide Details";
  } else {
    description.style.display = "none";
    buttonEl.textContent = "Show Details";
  }
}

// Auto-add toggle buttons to every project article (if not already in HTML)
(function addProjectButtons() {
  var articles = document.querySelectorAll("#projects article, .projects article, article.project");
  articles.forEach(function (article) {
    // Only add if button doesn't already exist
    if (!article.querySelector(".toggle-btn")) {
      var btn = document.createElement("button");
      btn.textContent = "Hide Details";
      btn.className = "toggle-btn";
      btn.onclick = function () {
        toggleDescription(btn);
      };
      // Insert button before the first <p>
      var firstP = article.querySelector("p");
      if (firstP) {
        article.insertBefore(btn, firstP);
      } else {
        article.appendChild(btn);
      }
    }
  });
})();


// (cv.html)
// Requirement 4: Mouse hover effects on <blockquote>

(function setupBlockquoteHover() {
  var blockquotes = document.querySelectorAll("blockquote");
  blockquotes.forEach(function (bq) {
    var originalBg = bq.style.backgroundColor || "";
    var originalFontStyle = bq.style.fontStyle || "";
    var originalTransform = bq.style.transform || "";

    bq.addEventListener("mouseover", function () {
      bq.style.backgroundColor = "#f0f4ff";
      bq.style.fontStyle = "italic";
      bq.style.transform = "scale(1.02)";
      bq.style.transition = "all 0.3s ease";
      bq.style.cursor = "default";
    });

    bq.addEventListener("mouseout", function () {
      bq.style.backgroundColor = originalBg;
      bq.style.fontStyle = originalFontStyle;
      bq.style.transform = originalTransform;
    });
  });
})();
