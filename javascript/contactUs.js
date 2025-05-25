document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("forms")
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Stoppa formuläret från att skickas

      const firstnameInput = document.getElementById("firstname");
      const firstnameValue = firstnameInput.value.trim();
      const lastnameInput = document.getElementById("lastname");
      const lastnameValue = lastnameInput.value.trim();
      const nicknameInput = document.getElementById("nickname");
      const nicknameValue = nicknameInput.value.trim();
      const errorMessage = document.getElementById("errormessage");

      // Regexp som tillåter a-ö och A-Ö, inga siffror eller specialtecken
      const lettersOnlyRegex = /^[a-zA-ZåäöÅÄÖ]+$/;

      if (lettersOnlyRegex.test(firstnameValue) && lettersOnlyRegex.test(lastnameValue)&& lettersOnlyRegex.test(nicknameValue)) {
          document.querySelector(".form-wrapper").style.display = "none"
          document.querySelector(".header").style.display = "none"
          errorMessage.textContent = "Thanks for your message " + nicknameValue + "!"
          errorMessage.style.color = "black"
          errorMessage.style.fontSize = "300%"
      } else {
        errorMessage.textContent = "The name can only contain letters (a-ö, A-Ö).";
        errorMessage.style.color = "red";
      }
    });
  });
