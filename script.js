*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#f5f7fb;
    color:#222;
}

header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:#0A2E5C;
}

.logo h2{
    color:#fff;
    font-size:28px;
}

nav a{
    color:white;
    text-decoration:none;
    margin-left:25px;
    font-weight:500;
    transition:.3s;
}

nav a:hover{
    color:#FF7A00;
}

.hero{
    text-align:center;
    padding:90px 20px;
    background:linear-gradient(rgba(10,46,92,.85),rgba(10,46,92,.85)),
    url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80");
    background-size:cover;
    background-position:center;
    color:white;
}

.hero h1{
    font-size:52px;
    margin-bottom:20px;
}

.hero p{
    max-width:700px;
    margin:auto;
    line-height:1.8;
}

.tracking-box{
    margin-top:40px;
}

.tracking-box input{
    width:320px;
    max-width:90%;
    padding:15px;
    border:none;
    border-radius:8px;
    font-size:16px;
}

.tracking-box button{
    padding:15px 28px;
    border:none;
    background:#FF7A00;
    color:white;
    border-radius:8px;
    cursor:pointer;
    margin-left:10px;
    font-size:16px;
}

.tracking-box button:hover{
    opacity:.9;
}

.services{
    padding:80px 8%;
    text-align:center;
}

.services h2{
    margin-bottom:50px;
    color:#0A2E5C;
}

.cards{
    display:flex;
    gap:25px;
    justify-content:center;
    flex-wrap:wrap;
}

.card{
    width:300px;
    background:white;
    padding:30px;
    border-radius:12px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.card h3{
    color:#0A2E5C;
    margin-bottom:15px;
}

footer{
    background:#0A2E5C;
    color:white;
    text-align:center;
    padding:25px;
    margin-top:60px;
}

@media(max-width:768px){

header{
    flex-direction:column;
}

nav{
    margin-top:20px;
}

.hero h1{
    font-size:36px;
}

.tracking-box button{
    margin-top:15px;
    margin-left:0;
}

}
