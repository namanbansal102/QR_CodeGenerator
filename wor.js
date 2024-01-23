const url = 'https://qrcode3.p.rapidapi.com/qrcode/text';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '261cf9c7e3msh8f664afc9115af9p1626c4jsn974713aeb310',
		'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
	},
	body: JSON.stringify({
		data: 'https://linqr.app',
		image: {
			uri: 'icon://appstore',
			modules: true
		},
		style: {
			module: {
				color: 'black',
				shape: 'default'
			},
			inner_eye: {shape: 'default'},
			outer_eye: {shape: 'default'},
			background: {}
		},
		size: {
			width: 200,
			quiet_zone: 4,
			error_correction: 'M'
		},
		output: {
			filename: 'qrcode',
			format: 'png'
		}
	})
};

async function generateQRCode() {
	try {
		const response = await fetch(url, options);
		const blob = await response.blob();
		const imageUrl = URL.createObjectURL(blob);
		
		// Display the image in an <img> element
		const img = document.createElement('img');
		img.src = imageUrl;
		document.body.appendChild(img);
	} catch (error) {
		console.error(error);
	}
}

generateQRCode();
