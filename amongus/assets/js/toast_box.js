const Toast = Swal.mixin({
	toast: true,
	position: 'top-right',
	iconColor: 'white',
	customClass: {
		popup: 'colored-toast'
	},
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true
})

window.onload = () => {
//	if (!localStorage.getItem("tb")) {
		Toast.fire({
			icon: 'info',
			title: "... who's the impostor? click him!"
		})
     // localStorage.setItem("tb", 'viewed');
//	}
}