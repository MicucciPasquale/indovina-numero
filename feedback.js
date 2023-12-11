function submitForm() {
    var feedbackMessage = document.getElementById("feedback-message").value;
    console.log("Feedback received:", feedbackMessage);
    document.getElementById("myForm").reset();
    alert("Grazie per il tuo feedback!");
}


/*
document.getElementById("return-first-page").addEventListener("click", function() {
    window.location.href = "file:///C:/Users/Utente/Desktop/DIGITAZON%20-%20corso/indovina%20numero/indovina-numero/index.html";
  });
  */
  document.getElementById("return-first-page").addEventListener("click", function() {
    window.location.href = "index.html";
});
