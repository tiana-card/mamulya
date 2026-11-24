document.addEventListener('DOMContentLoaded', () => {

    console.log('Сайт успешно запустил JavaScript!');

    // НАХОДИМ ЭЛЕМЕНТЫ

    const music = document.getElementById('backgroundMusic');
    const musicButton = document.getElementById('musicButton');
    const openButton = document.getElementById('openButton');

    const introScreen = document.getElementById('introScreen');
    const albumScreen = document.getElementById('albumScreen');
    const cartoonScreen = document.getElementById('cartoonScreen');
    const letterScreen = document.getElementById('letterScreen');
    const finalScreen = document.getElementById('finalScreen');
    const finalButton = document.getElementById('finalButton');

    const letterButton = document.getElementById('letterButton');
    const mammothVideo = document.getElementById('mammothVideo');

    const photoModal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');

    let musicPlaying = false;

    // ПРОВЕРКА ЭЛЕМЕНТОВ

    if (!music || !musicButton || !openButton ||
        !introScreen || !albumScreen) {

        console.error('Не найдены необходимые элементы HTML!');
        return;
    }

    // УПРАВЛЕНИЕ МУЗЫКОЙ

    musicButton.addEventListener('click', () => {

        if (!musicPlaying) {

            music.play()
                .then(() => {
                    musicPlaying = true;
                    musicButton.classList.add('music-active');
                })
                .catch(error => {
                    console.error('Ошибка воспроизведения музыки:', error);
                });

        } else {

            music.pause();
            musicPlaying = false;
            musicButton.classList.remove('music-active');

        }

    });

    // ПЕРЕХОД К ФОТОАЛЬБОМУ

openButton.addEventListener('click', () => {
    music.volume = 0.35;

music.play().then(() => {
    musicPlaying = true;
    musicButton.textContent = '♫';
}).catch(error => {
    console.log('Не удалось включить музыку:', error);
});

    console.log('Открываем конверт...');

    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const flap = document.querySelector('.envelope-flap');
    const heart = document.querySelector('.envelope-heart');

    // Проверяем, что элементы найдены
    if (!envelope || !letter || !flap) {
        console.error('Не найден элемент конверта или письма!');
        return;
    }

    openButton.textContent = 'С любовью, для тебя ♡';
    openButton.disabled = true;

    // Поднимаем письмо над всеми частями конверта
    letter.style.setProperty('z-index', '20', 'important');
    letter.style.setProperty('position', 'absolute', 'important');
    letter.style.setProperty('transition', 'transform 1s ease', 'important');
    letter.style.setProperty('transform', 'translateY(-110px)', 'important');

    // Отправляем верхний клапан назад
    flap.style.setProperty('transition', 'transform 0.8s ease', 'important');
    flap.style.setProperty('transform', 'rotateX(180deg)', 'important');
    flap.style.setProperty('z-index', '2', 'important');

    // Убираем сердечко с пути письма
    if (heart) {
        heart.style.opacity = '0';
    }

    // Пробуем включить музыку
    if (!musicPlaying) {
        music.play()
            .then(() => {
                musicPlaying = true;
                musicButton.classList.add('music-active');
            })
            .catch(() => {
                console.log('Музыка пока не добавлена.');
            });
    }

    // Переход к фотоальбому
    setTimeout(() => {

        introScreen.hidden = true;
        albumScreen.hidden = false;
        cartoonScreen.hidden = true;

        window.scrollTo(0, 0);

        console.log('Фотоальбом открыт!');

    }, 1500);

});

    // ОТКРЫТИЕ ФОТОГРАФИЙ

    document.querySelectorAll('.photo-card').forEach(card => {

        card.addEventListener('click', () => {

            const image = card.querySelector('img');
            const caption = card.querySelector('p');

            modalImage.src = image.src;
            modalCaption.textContent = caption.textContent;

            photoModal.hidden = false;

        });

    });

    // ЗАКРЫТИЕ ФОТОГРАФИИ

    if (modalClose) {

        modalClose.addEventListener('click', () => {

            photoModal.hidden = true;
            modalImage.src = '';

        });

    }

    if (photoModal) {

        photoModal.addEventListener('click', event => {

            if (event.target === photoModal) {

                photoModal.hidden = true;
                modalImage.src = '';

            }

        });

    }

    // ЗАКРЫТИЕ КЛАВИШЕЙ ESC

    document.addEventListener('keydown', event => {

        if (event.key === 'Escape' && photoModal) {

            photoModal.hidden = true;
            modalImage.src = '';

        }

    });

});
// ПЕРЕХОД ОТ ФОТОАЛЬБОМА К МУЛЬТФИЛЬМУ

const nextChapterButton = document.getElementById('nextChapterButton');

nextChapterButton.addEventListener('click', () => {

    albumScreen.hidden = true;
    cartoonScreen.hidden = false;

    window.scrollTo(0, 0);

});

// КНОПКА ПЕРЕХОДА К ПИСЬМУ

letterButton.addEventListener('click', () => {
    cartoonScreen.hidden = true;
    letterScreen.hidden = false;

    window.scrollTo(0, 0);
});
finalButton.addEventListener('click', () => {
    letterScreen.hidden = true;
    finalScreen.hidden = false;

    window.scrollTo(0, 0);
});
    // Следующий экран добавим на следующем этапе
