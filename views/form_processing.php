
		
		<?php
			//detect form submission
			if (isset($_POST['submit'])){
				

				//set default values
				if (isset($_POST["username"])){
					$username =$_POST["username"];
				}else {
					$username="";
				}

				if (isset($_POST["email"])){
					$email =$_POST["email"];
				}else {
					$email="";
				}

				if (isset($_POST["password"])){
					$password =$_POST["password"];
				}else{
					$password="";
				}

			

				
				
				// if filze is not empty 
				if(filesize("≈")>0){
					// load file content 
					$oldmemFile=file_get_contents("memberinfo.txt");
					// split up whenever there is a new line into an array
					$oldmemArrary=explode("\n", $oldmemFile);
					// getting to the last item on the file 
					$lastlist=end($oldmemArrary);
					// split it whenever encounter |
					$lastlist=explode(" | ", $lastlist);
					// setting format of just registered information
					$addnewmem= "\n".$username." | ".$email." | ".$password;

				}else{
					$addnewmem= "\n".$username." | ".$email." | ".$password;
				}
				// add the new registered infomration into the text file 
				file_put_contents("memberinfo.txt", $addnewmem, FILE_APPEND);
				// letting user know they have signed up, and can be redirected 
				echo "Processed! You have signed up!<br />";
				

			}else{
				echo "You did not sign up";
			}

		?>
 <p class="normaltext">Choose your theme</p>
		       
		        <a href="#">
		          <div class="imgbutton">

		            <div class="imgtext">
		              STARK // THEME01

		            </div>
		          </div>
		        </a>

		     
		          



		        <a href="#">
		          <div class="imgbutton1">

		            <div class="imgtext1">
		              LANNISTER // THEME02

		            </div>
		          </div>
		        </a>
	
