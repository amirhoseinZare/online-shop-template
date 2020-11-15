function showMessage(r,s,e){
    if(r['success']){
        s.style.display = "block"
        e.style.display   = "none"
        return 0
    }
    e.style.display   = "block"
    e.innerHTML       = r['error']
    s.style.display = "none"
}

$(document).ready(function () {
    $('#contact-us-form').submit(function(e){
        e.preventDefault();
        var formInfo = $('#contact-us-form').serializeArray()
        var user = {
        'name': formInfo[0]["value"],
        'email': formInfo[1]["value"],
        'title': formInfo[2]["value"],
        'text': formInfo[3]["value"],
        }
        
        var url = 'http://localhost:3000/contact'
        var options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{'Content-Type': 'application/json'},
        }
        var successMessage = document.getElementById("successMessage")
        var errorMessage = document.getElementById("errorMessage")
        fetch(url, options)
        .then(res => res.json())
        .then(res => showMessage(res,successMessage,errorMessage))
    })
})