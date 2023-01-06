window.onload = () => {
	//  if (!localStorage.getItem("wb")) {
	swal.fire({
		title: 'sus (nsfl) content',
		padding: '3em',
		color: '#716add',
		background: '#fff url(assets/img/trees.png)',
		backdrop: `
          rgba(0,0,123,0.4)
          url("assets/img/amog_nyan.gif")
          left top
          no-repeat
        `,
		text: 'Proceed further?',
		icon: 'warning',
		showDenyButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes',
		denyButtonText: 'Go back',
		allowEscapeKey: false,
		allowOutsideClick: () => {
			const popup = swal.getPopup()
			popup.classList.remove('swal2-show')
			setTimeout(() => {
				popup.classList.add('animate__animated', 'animate__headShake')
			})
			setTimeout(() => {
				popup.classList.remove('animate__animated', 'animate__headShake')
			}, 500)
			return false
		}
	}).then((result) => {
		if (result.isDenied) {
			swal.fire({
				title: 'Redirecting...',
				icon: 'info',
				showConfirmButton: false,
				timer: 1500,
				timerProgressBar: true,
				didOpen: () => {
					swal.showLoading()
				}
			}).then(function() {
				window.location = "index.html";
			});
		} else {
			var x = document.getElementById("museum");
			x.style.visibility = "visible";
			// localStorage.setItem("wb", 'viewed');
		}
	})
	//	}
}