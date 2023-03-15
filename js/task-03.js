const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('ul.gallery');
gallery.style.listStyle = 'none';
gallery.style.display = 'flex';
gallery.style.gap = '15px';
gallery.style.justifyContent = 'center';
gallery.style.padding = '0';

const makeImgElem = ({ url, alt }) => {
  return `<li><img style="display: block;" src="${url}" alt="${alt}" width="400" height="100%"></li>`;
};

const galleryItems = images.map(makeImgElem).join('');
gallery.insertAdjacentHTML('afterbegin', galleryItems);
console.log(gallery);
