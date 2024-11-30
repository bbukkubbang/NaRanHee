let lastSelected = null;
let currentImageIndex = 0;

const images = [
    '391247862-08bab740-6daf-4bef-8079-13f72e21ee56.png', // 첫 번째 아빠 이미지 경로
    '391247865-4ba8f839-41f9-47fb-8349-49da14b249bd.png'  // 두 번째 아빠 이미지 경로
];

function selectItem(element, name) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.remove('selected');
    });

    element.classList.add('selected');

    if (name === '아빠') {
        currentImageIndex = 0;
        showModal();
    }

    lastSelected = element;
}

function showModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = images[currentImageIndex];
    modal.style.display = 'flex';
}

function nextImage() {
    currentImageIndex++;
    
    if (currentImageIndex < images.length) {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentImageIndex];
    } else {
        closeModal();
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    lastSelected = null;
    currentImageIndex = 0;
}

document.getElementById('modal').onclick = nextImage;

window.onload = function() {
    const splash = document.getElementById('splash');
    const main = document.getElementById('main');

    setTimeout(() => {
        splash.style.display = 'none';
        main.style.display = 'block';
    }, 3000);
}

function showSettings() {
    const main = document.getElementById('main');
    const settings = document.getElementById('settings');

    main.style.display = 'none';
    settings.style.display = 'block';
}

function goBack() {
    const main = document.getElementById('main');
    const settings = document.getElementById('settings');

    settings.style.display = 'none';
    main.style.display = 'block';
}
