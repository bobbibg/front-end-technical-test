
window.onload = function () {
    var accordion = document.getElementsByClassName("accordion"); // Select element with class accordion

    for(var i = 0; i < accordion.length; i++) {
        var h2Acc = accordion[i].getElementsByTagName("h2"); // Select first h2 node
        var size = h2Acc.length;

        for (var j = 0; j < size; j++) {
            var h2Element = h2Acc[j];

            h2Element.setAttribute("class", "toggle"); // Set first h2 element class name to toggle
            h2Element.nextElementSibling.setAttribute("class", "closed");

            h2Element.onclick = function () {
                var h2 = this;

                if (h2.getAttribute("class") == "toggle") { // If the class on the clicked <h2> element is toggle
                    h2.setAttribute("class", "toggle-active"); // Update the class name
                    h2.nextElementSibling.setAttribute("class", "content-open"); // Update the class name of the element after to reveal the content
                }
                else {
                    h2.setAttribute("class", "toggle"); // if class name of clicked <h2> element is not toggle, update it's class name
                    h2.nextElementSibling.setAttribute("class", "closed"); // Update the class name of the element after it to closed
                }
            }
        }

    }
}