/*==================== SEND MAIL ====================*/
function sendMail(){
    var params = {
        name: document.getElementById('name').value ,
        email: document.getElementById('email').value ,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
    const serviceID = 'service_wo3yxll'
    const templateID = 'template_3d5dx4i'

    emailjs.send(serviceID,templateID,params)
    .then((res) => {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            alert('Email sent succesfully')
        }
    )
    .catch((err)=>console.log(err))
}

