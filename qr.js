console.log("website in running");
function showPseudoSelector() {
    console.log("show Pseudo Selector is running")
    qrImage.classList.add('showPseudo')
   
  }
  
  // Hide pseudo-selector and remove content
  function hidePseudoSelector() {
    console.log("hide Pseudo Selector is running")
    qrImage.classList.add('hidePseudo')
    
  }
let website=document.querySelector('#website')
let upFile=document.querySelector('#upFile')
let message=document.querySelector('#message')
let image=document.querySelector('#image')
let doc=document.querySelector('#doc')
let instagram=document.querySelector('#instagram')
let facebook=document.querySelector('#facebook')
let youtube=document.querySelector('#youtube')
let wifi=document.querySelector('#wifi')
let email=document.querySelector('#email')
let head=document.querySelector('#head');
let qrImage=document.querySelector('.qr-image')
let input=document.querySelector('#input');
let generate=document.querySelector('#generate')
let logos=document.querySelectorAll('.logos');
let upload=document.querySelector('#upload')
let logoUp=document.querySelector('#logoUp');
let coloro=document.querySelectorAll('.color');
let generateBar=document.querySelector('.generate-bar')
let cco=document.querySelectorAll('.cco')
website.addEventListener('click',function () {
    head.innerText="Enter Your Website Url"
    
})
upFile.addEventListener('click',function () {
    head.innerText="Enter Your Website Url"
    
})
message.addEventListener('click',function () {
    head.innerText="Enter Your Text Message Here"
    
})
image.addEventListener('click',function () {
    head.innerText="Upload Your Image Here"
    
})
instagram.addEventListener('click',function () {
    head.innerText="Enter Your Instagram Id"
    
})
facebook.addEventListener('click',function () {
    head.innerText="Enter Your Facebook Id"
    
})
youtube.addEventListener('click',function () {
    head.innerText="Enter Your Youtube Channel Name"
    
})
wifi.addEventListener('click',function () {
    head.innerText="Enter Your Wifi SSid and Password"
    
})
let obj={
    data:'',
    image: {
    uri: '',
    modules: true
},
     style: {
        module: {
            color: 'black',
            shape: 'default'
        },
        inner_eye: {shape: 'default'},
        outer_eye: {shape: 'default'},
        background: {color:''}
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
}
generate.addEventListener('click',function () {
showPseudoSelector();
   console.log("generate is running")
    inpVal=input.value;
    console.log(inpVal)
    obj.data=inpVal
    
   

    
    const url = 'https://qrcode3.p.rapidapi.com/qrcode/text';
    
    const options = {
        method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd380492220msh45b1334f967e249p1beb59jsn53f7046430e8',
        'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
    },
    body: JSON.stringify(obj)
};

async function generateQRCode() {
    try {
        const response = await fetch(url, options);
        console.log("running")
        const blob = await response.blob();
        hidePseudoSelector();
        
        const imageUrl = URL.createObjectURL(blob);
        
        // Display the image in an <img> element
        const img = document.createElement('img');
        img.id="qrGen"
        img.src = imageUrl;
        qrImage.appendChild(img);
    } catch (error) {
        console.error(error);
    }
}


generateQRCode();
})

    
logos.forEach(element => {
    element.addEventListener('click',function(e) {
        element.style.border='5px solid black'
        console.log("Logos is Running")
        console.log(e.target.src);
        
       
        obj.image.uri=e.target.src;
        e.target.style.backgroundColor='white';
       
    
    
    
        
    })
    
});
upload.onchange=function () {
    console.log("Change Image is Running")
   const reader=new FileReader();
   reader.addEventListener('load',function read() {
       uploadedImage=reader.result;
       let upUrl=`${uploadedImage}`
       console.log(upUrl)
       logoUp.src=upUrl;
       obj.image.uri=upUrl
   
       
       
       
       
       
    })
    reader.readAsDataURL(this.files[0])
    
    
    
}

coloro.forEach(element => {
    element.addEventListener('click',function (e) {
        let target=e.target;
    let Style=window.getComputedStyle(target);
    let bgcolor=Style.backgroundColor;
    generateBar.style.backgroundColor=bgcolor;
    obj.style.module.color=bgcolor
   
    
    })
    
});
cco.forEach(element => {
    element.addEventListener('click',function (e) {
        let target=e.target;
    let Style=window.getComputedStyle(target);
    let bgcolor=Style.backgroundColor;
       
        
  
    obj.style.background.color=bgcolor
   
    
    })
    
});
hidePseudoSelector();