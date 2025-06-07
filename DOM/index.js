// getElementById

const heading = document.getElementById('head')
heading.textContent='Hello World!';
heading.style.color= 'red';
heading.style.fontFamily = 'arial';

// getElementByClassname

const section = document.getElementsByClassName('section');
for (let i = 0; i < section.length; i++) {
    section[i].style.color='#5e1b02';
    section[i].style.fontFamily='arial';
    section[i].style.fontSize='0.9rem';
}


// getElementByTagName

const img = document.getElementById('img1');
const image = img.getElementsByTagName('img')
for (let i = 0;i <image.length;i++){
    image[i].style.width='100%';
    image[i].style.maxHeight='290px';
    image[i].style.objectFit='cover';
}

// query selector

const bodycontent = document.querySelector("body");
bodycontent.style.backgroundColor = '#a6fa96';
const items = document.querySelector('.item');
items.innerHTML += '<li>new Item 1</li><li>new Item 2</li>';
const galleryImgCount = document.querySelector('.galleryImgCount');
galleryImgCount.style.display = 'flex';
galleryImgCount.style.flexwrap = 'wrap';

// query selector all

const galleryImg = document.querySelectorAll('.galleryImg');
galleryImg.forEach((e)=>{
    e.style.maxwidth = '50%';

});

