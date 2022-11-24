function hasContent(a) { return a.length > 0; }
function lowercase(a) { return a.toLowerCase(); }

function extractTerms(text) {
  var terms = []
  var myRegexp = /[^\s"]+|"([^"]*)"/gi;

  do {
    var match = myRegexp.exec(text);
    if (match != null) {
        terms.push(match[1] ? match[1] : match[0]);
    }
  } while (match != null);
  return terms.filter(hasContent).map(lowercase)
}

function matches(node, term) {
  if (node.nodeType === document.TEXT_NODE) {
    var nodeText = node.nodeValue.toLowerCase();
    if (nodeText.indexOf(term) !== -1) { return true; }
  } else if (node.nodeType === document.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if (matches(node.childNodes[i], term)) {
        return true;
      }
    }
  }
  return false;
}

function updateRowStateToMatchFilter() {
  const query = new URLSearchParams(document.location.search);
  const xcodeRows = document.getElementsByClassName("xcode");
  
  // FIRST: show all rows (reset row state)
  for (var r = 0; r < xcodeRows.length; r++) {
    xcodeRows[r].style.display = "table-row";
  }
  
  // SECOND: hide rows that don't match the search terms
  const q = query.get("q");
  if (q !== null && q.trim().length > 0) {
    const searchTerms = extractTerms(q);
    for (var r = 0; r < xcodeRows.length; r++) {
      // if this row is already hidden, we don't need to check to hide it again
	  if (xcodeRows[r].style.display === "none") { continue; }
	  
      var shouldHide = false;
      for (var termIndex = 0; termIndex < searchTerms.length && shouldHide === false; termIndex++) {
        shouldHide = !matches(xcodeRows[r], searchTerms[termIndex]);
      }
      
      if (shouldHide === true) { xcodeRows[r].style.display = "none"; }
    }
  }
  
  // THIRD: hide rows that don't have the proper release type  
  const scope = query.get("scope");
  if (scope !== null) {
    for (var r = 0; r < xcodeRows.length; r++) {
      // if this row is already hidden, we don't need to check to hide it again
	  if (xcodeRows[r].style.display === "none") { continue; }
	  
      var shouldHide = false;
      if (scope != null && xcodeRows[r].classList.contains(scope) == false) {
        shouldHide = true;
      }
      
      if (shouldHide === true) { xcodeRows[r].style.display = "none"; }
    }
  }
}

function toggleDetails(rowID) {
  var detailsID = "details-" + rowID;
  
  var details = document.getElementById(detailsID);
  if (details === null) { return; }
  
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}

function filter() {
  // Update the URL in the location bar with the new state
  // this updates the URL in the location bar without reloading the page, and without updating browser history.
  // Otherwise, typing into the search field would generate a history entry for each keystroke.
  var url = new URL(document.location);
  
  // update the q parameter
  const filterField = document.getElementById("filter-text");
  const queryQ = filterField.value.trim();
  if (queryQ === null || queryQ.trim().length == 0) {
    url.searchParams.delete("q");
  } else {
    url.searchParams.set("q", queryQ);
  }
  
  // update the scope parameter
  const releaseTypeButtons = document.getElementsByName("filter-release");
  var queryScope = null;
  for (var i = 0; i < releaseTypeButtons.length; i++) {
    if (releaseTypeButtons[i].checked == true) {
       queryScope = releaseTypeButtons[i].value;
    }
  }
  if (queryScope === null || queryScope.trim().length == 0) {
    url.searchParams.delete("scope");
  } else {
    url.searchParams.set("scope", queryScope);
  }
  
  window.history.replaceState({}, document.title, url);
  
  updateRowStateToMatchFilter();
}

function prefillFilter() {
  const params = new URLSearchParams(window.location.search);
  
  var filterCount = 0;
  
  // set the "q" parameter into the search field
  const q = params.get("q");
  if (q !== null && q.trim().length > 0) {
    const filterField = document.getElementById("filter-text");
    filterField.value = q;
    filterCount += 1;
  }
  
  // set the "scope" parameter into the radio buttons
  const scope = params.get("scope");
  if (scope !== null && scope.trim().length > 0) {
    var releaseTypeButtons = document.getElementsByName("filter-release");
    var releaseButtonCount = releaseTypeButtons.length;
    for (var i = 0; i < releaseTypeButtons.length; i++) {
      if (releaseTypeButtons[i].value === scope) {
        releaseTypeButtons[i].checked = true
        filterCount += 1;
      }
    }
  }
  
  updateRowStateToMatchFilter();
}

window.addEventListener("load", function(){
  prefillFilter();
});
