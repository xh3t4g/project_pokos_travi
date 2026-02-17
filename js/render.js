const list = document.querySelector('#gallery_list');

catalogs.forEach((catalog) => {
    let link_a = document.createElement('a');
    link_a.href = catalog.img;
    link_a.rel = 'noopener';

    let img_s = document.createElement('img');
    img_s.src = catalog.img;
    img_s.alt = '';

    link_a.appendChild(img_s);
    list.appendChild(link_a);
    
})
