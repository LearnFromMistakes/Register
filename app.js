const form = document.querySelector('#form');
const username= document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    validateInput();
})

function validateInput()
{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal=== '')
    {
        setError(username,'Username is required')
    }
    else
    {
        setSuccess(username)
    }

    if(emailVal === '')
    {
        setError(email,'Email is required')
    }
    else if (!validateEmail(emailVal))
    {
        setError(email,'please enter valid email')
    }
    else
    {
        setSuccess(email)
    }

    if(passwordVal=== '')
        {
            setError(password,'Password is required')
        }
        else if (passwordVal<8)
        {
            setError(password,'Password must be atleast 8 character')
        }
        else{
            setSuccess(password)
        }

    if(cpasswordVal === '')
    {
        setError(cpassword,'cpassword is required')
    }
    else if (cpasswordVal != passwordVal)
    {
        setError(cpassword,'Password Must be same')
    }
    else{
        setSuccess(cpassword)
    }
}

function setError(element,message)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error') 
    inputGroup.classList.remove('success') 
}
function setSuccess(element)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success') 
    inputGroup.classList.remove('error') 
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match()
    '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
}