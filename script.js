document.addEventListener('DOMContentLoaded', function() {
    initTimeDisplay();
    initNavTabs();
    initCategoryTabs();
    initSongTabs();
    initBannerSlider();
    initScrollEffects();
    initPlayerControls();
});

function initTimeDisplay() {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timeElement = document.querySelector('.time');
        if (timeElement) {
            timeElement.textContent = `${hours}:${minutes}`;
        }
    }
    updateTime();
    setInterval(updateTime, 60000);
}

function initNavTabs() {
    const navItems = document.querySelectorAll('.top-nav .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initCategoryTabs() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            categoryItems.forEach(i => i.style.opacity = '0.6');
            this.style.opacity = '1';
        });
    });
}

function initSongTabs() {
    const songTabs = document.querySelectorAll('.song-tab');
    songTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            songTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initBannerSlider() {
    const dots = document.querySelectorAll('.banner-dots .dot');
    let currentIndex = 0;
    
    setInterval(() => {
        dots.forEach(dot => dot.classList.remove('active'));
        currentIndex = (currentIndex + 1) % dots.length;
        dots[currentIndex].classList.add('active');
    }, 3000);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            currentIndex = index;
        });
    });
}

function initScrollEffects() {
    const scrollContent = document.querySelector('.scroll-content');
    let lastScrollTop = 0;
    
    scrollContent.addEventListener('scroll', function() {
        const scrollTop = this.scrollTop;
        const scrollHeight = this.scrollHeight;
        const clientHeight = this.clientHeight;
        
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            console.log('Near bottom - could load more content');
        }
        
        lastScrollTop = scrollTop;
    });
    
    const horizontalScrolls = document.querySelectorAll(
        '.artist-scroll, .show-scroll, .game-scroll, .movie-scroll, ' +
        '.composer-scroll, .label-scroll, .artist-recommend-scroll, ' +
        '.love-scroll, .new-song-scroll, .mv-scroll'
    );
    
    horizontalScrolls.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('touchend', () => {
            isDown = false;
        });
        
        container.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
}

function initPlayerControls() {
    const playBtn = document.querySelector('.player-controls .control-btn:first-child');
    let isPlaying = true;
    
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            this.textContent = isPlaying ? '⏸' : '▶';
        });
    }
    
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item-bottom');
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function() {
            bottomNavItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

document.querySelectorAll('.section-more').forEach(btn => {
    btn.addEventListener('click', function() {
        const sectionTitle = this.parentElement.querySelector('.section-title').textContent;
        console.log(`查看更多: ${sectionTitle}`);
    });
});

document.querySelectorAll('.song-item').forEach(item => {
    item.addEventListener('click', function() {
        const songName = this.querySelector('.song-name').textContent;
        console.log(`播放歌曲: ${songName}`);
    });
});

document.querySelectorAll('.playlist-card, .artist-card, .show-card, .game-card, .movie-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

document.querySelectorAll('.search-input').forEach(searchInput => {
    searchInput.addEventListener('click', function() {
        console.log('打开搜索页面');
    });
});
