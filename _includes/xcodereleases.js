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

function filter() {
  var filterField = document.getElementById("filter-text");
  var searchTerms = extractTerms(filterField.value);
  
  var releaseTypeButtons = document.getElementsByName("filter-release");
  var releaseClass = null;
  var releaseButtonCount = releaseTypeButtons.length;
  for (var i = 0; i < releaseButtonCount; i++) {
    if (releaseTypeButtons[i].checked == true) {
       releaseClass = releaseTypeButtons[i].value;
    }
  }
  
  if (releaseClass.length == 0) { releaseClass = null; }
  
  var xcodeRows = document.getElementsByClassName("xcode");
  var rowCount = xcodeRows.length;
  for (var i = 0; i < rowCount; i++) {
    var show = true;
    if (releaseClass != null && xcodeRows[i].classList.contains(releaseClass) == false) {
      show = false;
    }
    
    if (searchTerms.length > 0 && show == true) {
      for (var termIndex = 0; termIndex < searchTerms.length && show == true; termIndex++) {
        show = matches(xcodeRows[i], searchTerms[termIndex]);
      }
    }
    
    xcodeRows[i].style.display = show ? "table-row" : "none";
  }
}

function toggleRow(row) {
  var checkboxID = "toggle" + row;
  var detailsID = "details" + row;
  
  var checkbox = document.getElementById(checkboxID);
  if (checkbox === null) { return; }
  
  var details = document.getElementById(detailsID);
  if (details === null) { return; }
  
  var show = checkbox.value;
  details.style.visibility = show ? "visible" : "hidden";
}
