window.onload = function() {
	var regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
	var regmsg = /^\d{6}$/
	var regpwd = /[a-zA-Z]\w{5,17}/
	// var regrpsd = 
	var tel = document.querySelector('#phone')
	var msg = document.querySelector('#msg')
	var pwd = document.querySelector('#pwd')
	var rpwd = document.querySelector('#rpwd')
	regexp(tel,regtel)
	regexp(msg,regmsg)
	regexp(pwd,regpwd)
	function regexp(ele,reg) {
		ele.onblur = function() {
			if (reg.test(ele.value)) {
				this.nextElementSibling.className = 'succes';
				this.nextElementSibling.innerHTML = '<i class="succes_icon"></i>输入正确'
			} else {
				this.nextElementSibling.className = 'error';
				this.nextElementSibling.innerHTML = '<i class="erroe_icon"></i>输入错误，请从新输入';
			}
		}
	}
	rpwd.onblur = function(){
		if (rpwd.value === pwd.value) {
			this.nextElementSibling.className = 'succes';
			this.nextElementSibling.innerHTML = '<i class="succes_icon"></i>输入正确'
		} else {
			this.nextElementSibling.className = 'error';
			this.nextElementSibling.innerHTML = '<i class="erroe_icon"></i>输入错误，请从新输入';
		}
	}
}
