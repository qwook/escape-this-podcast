window.addEventListener('load', () => {
  // Allow observatble titles to be toggled on and off.
  let observableTitles = document.getElementsByTagName("observable-title");
  for (let observableTitle of observableTitles) {
    let description = observableTitle.parentElement.getElementsByTagName(
      "observable-description"
    )[0];
    let actions = observableTitle.parentElement.getElementsByTagName(
      "observable-actions"
    )[0];
    observableTitle.addEventListener("click", e => {
      if (
        description.style.display == "" ||
        description.style.display == "none"
      ) {
        description.style.display = "block";
        if (actions) {
          actions.style.display = "block";
        }
      } else {
        description.style.display = "none";
        if (actions) {
          actions.style.display = "none";
        }
      }
    });
  }
  
  // Allow action titles to be toggled on and off.
  let actionTitles = document.getElementsByTagName("action-title");
  for (let actionTitle of actionTitles) {
    actionTitle.textContent = 'ACTION: ' + actionTitle.textContent;
    let description = actionTitle.parentElement.getElementsByTagName(
      "action-description"
    )[0];
    actionTitle.addEventListener("click", e => {
      if (
        description.style.display == "" ||
        description.style.display == "none"
      ) {
        description.style.display = "block";
      } else {
        description.style.display = "none";
      }
    });
  }
  
  // All links open up in a new tab.
  for (let anchor of document.getElementsByTagName('a')) {
    if (!anchor.hash) {
      anchor.target = "__blank";
    }
  }
})
