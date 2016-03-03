var sshout_helper = {
	init:function(){
		console.log("ssh helper extension init")
		// jQuery("body").css({
		// 	"font-family":"arial"
		// });
		// jQuery("td, th").css({
		// 	"padding":10
		// });
		// jQuery("input[type='text'],input[type='password'],input[type='button']").css({
		// 	"padding":10
		// });
		jQuery("input[type='text']").after("<span class='help'>(LDAP)</span>")
		jQuery("input[type='password']").after("<span class='help'>(PIN + OTP)</span>");
		// jQuery(".helper").css({
		// 	"color":"999",
		// 	"font-size":12,
		// 	"padding":3
		// });
		
	}
}
jQuery(document).ready(function(){
	sshout_helper.init();
});
jQuery(document).on("keyup",function(e){
	if(e.keyCode == 13){
		jQuery("form[name='webauthlogin']").submit();
	}
})
