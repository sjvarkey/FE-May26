/*

**Raw Problem**
Implement key taps such that on:
1. pressing 1 you scroll to section 1,
2. pressing 2 you scroll to section 2 and
3. pressing 3 you scroll to section 3.
4. Also implement key tap b to go to bottom of the page
5. and key tap t to go to top of the page

*/

// Q Implement key taps such that on pressing 1 you scroll to section 1,  pressing 2 you scroll to section 2 and  pressing 3 you scroll to section 3. Also implement key tap b to go to bottom of the page and key tap t to go to top of the page
// Solution:
      let s1 = document.querySelector("#s1");
      let s2 = document.querySelector("#s2");
      let s3 = document.querySelector("#s3");
      document.addEventListener("keydown", function (e) {
        if (e.key == 1) {
          s1.scrollIntoView();
        } else if (e.key == 2) {
          s2.scrollIntoView();
        } else if (e.key == 3) {
          s3.scrollIntoView();
        } else if (e.key == "b") {
          window.scrollBy(
            0,
            document.querySelector("html").getBoundingClientRect().height
          );
        } else if (e.key == "t") {
          window.scrollBy(
            0,
            -document.querySelector("html").getBoundingClientRect().height
          );
        }
      });