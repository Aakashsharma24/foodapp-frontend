function login(){
    // e.preventDefault()
    console.log('here')
    let email = document.getElementById("email").value
    let pass  = document.getElementById("Pass" ).value
    console.log( email, pass )
    let obj = {
        email,
        password : pass
    };
    obj = JSON.stringify(obj)
    fetch('https://evening-bastion-10980.herokuapp.com/login',{
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers' :  "*",
            'Access-Control-Allow-Origin': "*"
        },
        body: obj,
    })
    .then( res => res.json() )
    .then( res=>{
        if( res.auth ){ 
            sessionStorage.setItem("username", res.username)
            sessionStorage.setItem("islogin", true)
            alert(`${res.msg} as ${res.username}`)
            history.go(-1)
        }
        else alert(res.msg)
        console.log(res)} )
    
}