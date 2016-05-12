$(function(){

	var objFirebase = new Firebase("https://chatumng1.firebaseio.com/");

	$('#btnLoginTwitter').click(clickAutenticar);

	function clickAutenticar(event){

		objFirebase.authWithOAuthPopup("twitter", function(error, authData){

			if (error) {
				console.log("Login Failed", error);
				return;
			}
						
			console.log("Exito!!!", authData);
			sessionStorage.setItem('token', authData.token);
			sessionStorage.setItem('profileImageURL', authData.twitter.profileImageURL);
			sessionStorage.setItem('displayName', authData.twitter.displayName);
			sessionStorage.setItem('username', authData.twitter.username);
				
			window.location.href = "Pages/ppal.html"
			

		});
	}	
	
});