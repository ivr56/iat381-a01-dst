
<html class="no-js" ng-app="iat381A01">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

  <link rel="stylesheet" href="styles/question.css" type="text/css" media="screen">
</head>



<body>
    
<div ng-controller="supgCtrl" class="jumbotron text-center">
    <div class="signuppg">
	<div id="headtext">
			<div class="jumbotron text-center">
			<img src="img/logoGOT.png" alt="logoGoT" width="80%"> 
		 
		</div>

	</div>	
 	<div class="jumbotron text-center">
       
       
        

        <form action="form_processing.php" method="post">
						<!--<span class="formname">Username:</span> -->
						<span class="formline">
						<span class="formname"><img src="../img/name.png" width="20px" alt="name icon"></span>
						<input type="text" name="username" value="" placeholder="First and Last Name"/>
					</span>
						<br />
						
						<span class="formline">
						<!--<span class="formname">Email:</span> -->
						<span class="formname"><img src="../img/email.png" width="20px" alt="email icon"></span>
						<input type="text" name="email" value="" placeholder="Email" autofocus="autofocus"/>
						</span>
						<br />
						
						<span class="formline">
						<!--<span class="formname">Password:</span> -->
						<span class="formname"><img src="../img/password.png" width="20px" alt="password icon"></span>
						<input type="password" name="password" placeholder="Password" value=""/>
						</span>
						<br />
						
						<br />
						<!-- submit button-->
						<input type="submit" name="submit" value="Sign Up"/>
					</form>	

       

      

         <!-- <img src="img/stark.jpg" width="25%"><img src="img/lannister.jpg" width="25%"><img src="img/baratheon.jpg" width="25%"><img src="img/targaryen.jpg" width="25%">-->

          <p><a class="btn btn-lg btn-success" ng-href="#/q1">Skip and Start Quiz

          </a></p>
      </div>
     
     </div> 

     </body> 
</html>














