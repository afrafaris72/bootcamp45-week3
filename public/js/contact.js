

function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value


    if(name == ""){
       return alert("name harus diisi")
    } else if(email == ""){
       return alert("email harus diisi")
    } else if(phone == ""){
       return alert("phone harus diisi")
    } else if(subject == ""){
       return alert("subject harus diisi")
    } else if(message == ""){
       return alert("message harus diisi")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailReceiver = "afra.faris12@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak ke nomor ${phone}`
    a.click()
    
    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student);
}
