.login{
	background-color: #f2f2f2;
	height: 100vh;
}
.login .fila{
	height: 90vh;
    padding: 10vh 0vh;
}
.logo{
	border-right: solid 1px #33297B;
	display: flex;
  	justify-content: center;
  	align-items: center;
}
.formLogin{
	text-align: center;
	margin: auto;
}
.user{
	width: 137px;
	display: block;
	margin: auto;
}
.username{
	display: block;
	margin: auto;
	width: 60%;
	height: 40px;
	background-image:url(../img/user.png); 
	background-repeat: no-repeat; 
	background-size: 30px;
	background-position: 2px 3px;
	text-align: center;
	border: solid 1px #DDDDDD;
}
.password{
	display: block;
	margin: auto;
	width: 60%;
	height: 40px;
	background-image:url(../img/lock.png); 
	background-repeat: no-repeat; 
	background-size: 30px;
	background-position: 2px 3px;
	text-align: center;
	margin: 20px auto;
	border: solid 1px #DDDDDD;
}
.filaRecordar{
	margin:0 20%;
}
.recordar{
	text-align: left;
	
}
.olvido{
	text-align: right;
}
.ingresar{
	display: block;
	margin: auto;
	width: 60%;
	height: 35px;
	background-color: #33297B;
	color: #fff;
	font-size: 20px;
	border-radius: 5px;
}
.registro{
	text-align: right;
    display: block;
	margin: auto 20%;
	padding-top: 50px;
}
@media (max-width:992px) {
	.login{
		height: inherit;
	}
	.login .fila {
	    height: inherit;
	    padding: 0;
	}
	.logo {
	    border-right: none;
	    display: block;
	    justify-content: inherit;
	    align-items: inherit;
	    text-align: center;
	}
	.logo img{
		width: 400px;
    	margin-top: 80px;
	}
	body {
	    background-color: #f2f2f2;

	}
	.formLogin {
	    margin-top: 20%;
	}
	.user {
	    width: 300px;
	}
	.username,.password{
		height: 100px;
	    background-size: 90px;
	    font-size: 35px;
	    text-align: left;
	    padding-left: 100px;
	    width: 90%;
	}
	.filaRecordar {
	    margin: 0 5%;
	}
	.recordar {
	    text-align: left;
	    font-size: 35px;
	}
	.recordar input {
	    height: 35px;
	    width: 35px;
	}
	.olvido {
	    text-align: right;
	    font-size: 35px;
	}
	.ingresar{
	    font-size: 40px;
	    width: 90%;
	    height: 80px;
	}
	.registro {
	    margin: auto 5%;
	    font-size: 35px;
	}
}
