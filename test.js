fetch ('http://localhost:3000/test')
	.then(()=>{
		console.log('Response')
})
.catch(()=> {
	alert('Error')
})

