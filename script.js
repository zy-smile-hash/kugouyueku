document.addEventListener('DOMContentLoaded', function() {
    initTimeDisplay();
    initNavTabs();
    initCategoryTabs();
    initSongTabs();
    initBannerSlider();
    initTopBannerSlider();
    initScrollEffects();
    initPlayerControls();
    initSearchBar();
    initFreeListen();
    initSongRecognize();
    initQuickEntries();
    initContentCards();
    initBottomNav();
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
            const category = this.dataset.category;
            navigateToPage(category);
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
    
    document.querySelectorAll('.banner-slider .banner-item').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.banner-title')?.textContent;
            showToast(`播放: ${title}`);
        });
    });
}

function initTopBannerSlider() {
    const items = document.querySelectorAll('.banner-item-top');
    const dots = document.querySelectorAll('.banner-dots-top .dot-top');
    let currentIndex = 0;
    
    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }, 3000);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.banner-title-top')?.textContent;
            showToast(`进入: ${title}`);
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
    const playPauseBtn = document.getElementById('playPauseBtn');
    const favoriteBtn = document.getElementById('favoriteBtn');
    let isPlaying = true;
    let isFavorite = false;
    
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            this.textContent = isPlaying ? '⏸' : '▶';
            const playerName = document.querySelector('.player-name')?.textContent;
            showToast(isPlaying ? `播放: ${playerName}` : '已暂停');
        });
    }
    
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            isFavorite = !isFavorite;
            this.textContent = isFavorite ? '❤️' : '🤍';
            const playerName = document.querySelector('.player-name')?.textContent;
            showToast(isFavorite ? `已收藏: ${playerName}` : `取消收藏: ${playerName}`);
        });
    }
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            showToast('播放下一首');
        });
    }
    
    const playerBar = document.getElementById('playerBar');
    if (playerBar) {
        playerBar.addEventListener('click', function(e) {
            if (!e.target.closest('.player-controls')) {
                showToast('打开播放列表');
            }
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

function initSearchBar() {
    const searchInput = document.getElementById('searchInput');
    const scanBtn = document.getElementById('scanBtn');
    
    if (searchInput) {
        searchInput.addEventListener('click', function(e) {
            if (!e.target.closest('#scanBtn')) {
                openSearchPage();
            }
        });
    }
    
    if (scanBtn) {
        scanBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showToast('扫码登录功能');
        });
    }
}

function initFreeListen() {
    const freeListenBtn = document.getElementById('freeListenBtn');
    
    if (freeListenBtn) {
        freeListenBtn.addEventListener('click', function() {
            showFreeListenModal();
        });
    }
    
    const vipBanner = document.getElementById('vipBanner');
    if (vipBanner) {
        vipBanner.addEventListener('click', function() {
            showToast('开通会员');
        });
    }
}

function initSongRecognize() {
    const songRecognizeBtn = document.getElementById('songRecognizeBtn');
    
    if (songRecognizeBtn) {
        songRecognizeBtn.addEventListener('click', function() {
            showRecognizeModal();
        });
    }
}

function initQuickEntries() {
    const moreButtons = document.querySelectorAll('.section-more');
    moreButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            navigateToSection(action);
        });
    });
}

function initContentCards() {
    document.querySelectorAll('.song-item').forEach(item => {
        item.addEventListener('click', function() {
            const songId = this.dataset.song;
            const songName = this.querySelector('.song-name')?.textContent;
            showToast(`播放: ${songName}`);
        });
    });
    
    document.querySelectorAll('.playlist-card').forEach(card => {
        card.addEventListener('click', function() {
            const playlistId = this.dataset.playlist;
            openPlaylistDetail(playlistId);
        });
    });
    
    document.querySelectorAll('.artist-card').forEach(card => {
        card.addEventListener('click', function() {
            const artistId = this.dataset.artist;
            openArtistDetail(artistId);
        });
    });
    
    document.querySelectorAll('.show-card').forEach(card => {
        card.addEventListener('click', function() {
            const showId = this.dataset.show;
            openShowDetail(showId);
        });
    });
    
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function() {
            const gameId = this.dataset.game;
            openGameDetail(gameId);
        });
    });
    
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', function() {
            const movieId = this.dataset.movie;
            openMovieDetail(movieId);
        });
    });
    
    document.querySelectorAll('.composer-card').forEach(card => {
        card.addEventListener('click', function() {
            const composerId = this.dataset.composer;
            openComposerDetail(composerId);
        });
    });
    
    document.querySelectorAll('.label-card').forEach(card => {
        card.addEventListener('click', function() {
            const labelId = this.dataset.label;
            openLabelDetail(labelId);
        });
    });
    
    document.querySelectorAll('.artist-recommend-card').forEach(card => {
        card.addEventListener('click', function() {
            const artistId = this.dataset.artist;
            openArtistDetail(artistId);
        });
    });
    
    document.querySelectorAll('.love-card').forEach(card => {
        card.addEventListener('click', function() {
            const loveId = this.dataset.love;
            openLoveDetail(loveId);
        });
    });
    
    document.querySelectorAll('.new-song-card').forEach(card => {
        card.addEventListener('click', function() {
            const reservationId = this.dataset.reservation;
            openReservationDetail(reservationId);
        });
    });
    
    document.querySelectorAll('.mv-card').forEach(card => {
        card.addEventListener('click', function() {
            const mvId = this.dataset.mv;
            playMv(mvId);
        });
    });
}

function initBottomNav() {
    const navItems = document.querySelectorAll('.nav-item-bottom');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.dataset.page;
            navigateToBottomNav(page);
        });
    });
}

function openSearchPage() {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closeSearch">←</span>
            <span class="page-title">搜索</span>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">搜索历史</div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    <span class="search-tag">周杰伦</span>
                    <span class="search-tag">晴天</span>
                    <span class="search-tag">邓紫棋</span>
                    <span class="search-tag">林俊杰</span>
                </div>
            </div>
            <div class="page-section">
                <div class="page-section-title">热搜榜单</div>
                <div class="hot-list">
                    <div class="hot-item" data-song="hot1">
                        <span class="hot-num">1</span>
                        <span class="hot-name">起风了</span>
                        <span class="hot-tag">热</span>
                    </div>
                    <div class="hot-item" data-song="hot2">
                        <span class="hot-num">2</span>
                        <span class="hot-name">光年之外</span>
                    </div>
                    <div class="hot-item" data-song="hot3">
                        <span class="hot-num">3</span>
                        <span class="hot-name">稻香</span>
                    </div>
                    <div class="hot-item" data-song="hot4">
                        <span class="hot-num">4</span>
                        <span class="hot-name">演员</span>
                    </div>
                    <div class="hot-item" data-song="hot5">
                        <span class="hot-num">5</span>
                        <span class="hot-name">江南</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .search-tag {
            padding: 6px 12px;
            background: #f0f0f0;
            border-radius: 15px;
            font-size: 12px;
            color: #666;
        }
        .hot-list { display: flex; flex-direction: column; gap: 10px; }
        .hot-item { display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid #f5f5f5; }
        .hot-item:last-child { border-bottom: none; }
        .hot-num { width: 20px; font-size: 14px; font-weight: 600; color: #ff6b6b; }
        .hot-name { flex: 1; font-size: 14px; color: #333; }
        .hot-tag { font-size: 10px; padding: 2px 6px; background: #ff6b6b; color: #fff; border-radius: 4px; }
    `;
    document.head.appendChild(style);
    
    showPage();
    
    document.getElementById('closeSearch').addEventListener('click', closePage);
    
    document.querySelectorAll('.hot-item').forEach(item => {
        item.addEventListener('click', function() {
            const songName = this.querySelector('.hot-name')?.textContent;
            showToast(`搜索: ${songName}`);
        });
    });
}

function showRecognizeModal() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <span class="modal-title">听歌识曲</span>
            <span class="modal-close" id="closeRecognize">×</span>
        </div>
        <div class="modal-body">
            <div class="recognize-options">
                <div class="recognize-option" data-type="hum">
                    <span class="recognize-icon">🎵</span>
                    <div class="recognize-text">
                        <div class="recognize-title">哼唱识别</div>
                        <div class="recognize-desc">哼唱几句旋律即可识别</div>
                    </div>
                    <span class="recognize-arrow">></span>
                </div>
                <div class="recognize-option" data-type="video">
                    <span class="recognize-icon">🎬</span>
                    <div class="recognize-text">
                        <div class="recognize-title">视频识曲</div>
                        <div class="recognize-desc">识别当前视频中的歌曲</div>
                    </div>
                    <span class="recognize-arrow">></span>
                </div>
                <div class="recognize-option" data-type="link">
                    <span class="recognize-icon">🔗</span>
                    <div class="recognize-text">
                        <div class="recognize-title">链接识曲</div>
                        <div class="recognize-desc">填写音频链接识别</div>
                    </div>
                    <span class="recognize-arrow">></span>
                </div>
                <div class="recognize-option" data-type="live">
                    <span class="recognize-icon">🔊</span>
                    <div class="recognize-text">
                        <div class="recognize-title">环境识曲</div>
                        <div class="recognize-desc">识别周围正在播放的歌曲</div>
                    </div>
                    <span class="recognize-arrow">></span>
                </div>
            </div>
        </div>
    `;
    
    showModal();
    
    document.getElementById('closeRecognize').addEventListener('click', closeModal);
    
    document.querySelectorAll('.recognize-option').forEach(option => {
        option.addEventListener('click', function() {
            const type = this.dataset.type;
            handleRecognize(type);
        });
    });
}

function handleRecognize(type) {
    closeModal();
    switch(type) {
        case 'hum':
            showToast('开启哼唱识别...');
            break;
        case 'video':
            showToast('请授权屏幕内容访问');
            break;
        case 'link':
            showToast('请输入音频链接');
            break;
        case 'live':
            showToast('正在识别环境音乐...');
            break;
    }
}

function showFreeListenModal() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-header">
            <span class="modal-title">免费听</span>
            <span class="modal-close" id="closeFreeListen">×</span>
        </div>
        <div class="modal-body">
            <div class="free-listen-content">
                <div class="free-listen-icon">🎧</div>
                <div class="free-listen-title">看广告 免费听VIP歌曲</div>
                <div class="free-listen-desc">观看15秒广告，即可获得<br>VIP歌曲免费听30分钟</div>
                <div class="free-listen-btn" id="watchAdBtn">立即观看</div>
            </div>
        </div>
    `;
    
    showModal();
    
    document.getElementById('closeFreeListen').addEventListener('click', closeModal);
    
    document.getElementById('watchAdBtn').addEventListener('click', function() {
        closeModal();
        showToast('正在加载广告...');
        setTimeout(() => {
            showToast('恭喜获得30分钟VIP听歌时长！');
        }, 2000);
    });
}

function navigateToPage(category) {
    const pageContainer = document.getElementById('pageContainer');
    let pageTitle = '';
    let pageContent = '';
    
    switch(category) {
        case 'category':
            pageTitle = '分类';
            pageContent = `
                <div class="page-section">
                    <div class="page-section-title">歌曲分类</div>
                    <div class="category-grid">
                        <div class="category-block" data-cat="pop">流行</div>
                        <div class="category-block" data-cat="rock">摇滚</div>
                        <div class="category-block" data-cat="electronic">电子</div>
                        <div class="category-block" data-cat="classical">古典</div>
                        <div class="category-block" data-cat="folk">民谣</div>
                        <div class="category-block" data-cat="rap">说唱</div>
                    </div>
                </div>
                <style>
                    .category-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
                    .category-block { padding: 20px; background: linear-gradient(135deg, #ff6b6b, #ff4757); color: #fff; border-radius: 10px; text-align: center; font-size: 14px; }
                </style>
            `;
            break;
        case 'rank':
            pageTitle = '排行榜';
            pageContent = `
                <div class="page-section">
                    <div class="rank-list">
                        <div class="rank-item" data-rank="hot">
                            <span class="rank-num">1</span>
                            <div class="rank-info">
                                <div class="rank-name">酷狗热歌榜</div>
                                <div class="rank-desc">实时更新最热歌曲</div>
                            </div>
                        </div>
                        <div class="rank-item" data-rank="new">
                            <span class="rank-num">2</span>
                            <div class="rank-info">
                                <div class="rank-name">新歌榜</div>
                                <div class="rank-desc">最新发行歌曲</div>
                            </div>
                        </div>
                        <div class="rank-item" data-rank="soar">
                            <span class="rank-num">3</span>
                            <div class="rank-info">
                                <div class="rank-name">飙升榜</div>
                                <div class="rank-desc">热度上升最快的歌曲</div>
                            </div>
                        </div>
                        <div class="rank-item" data-rank="cloud">
                            <span class="rank-num">4</span>
                            <div class="rank-info">
                                <div class="rank-name">云音乐热歌榜</div>
                                <div class="rank-desc">云音乐用户最爱</div>
                            </div>
                        </div>
                        <div class="rank-item" data-rank="classic">
                            <span class="rank-num">5</span>
                            <div class="rank-info">
                                <div class="rank-name">经典老歌榜</div>
                                <div class="rank-desc">回味经典旋律</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'artist':
            pageTitle = '歌手';
            pageContent = `
                <div class="page-section">
                    <div class="page-section-title">歌手分类</div>
                    <div class="artist-category-list">
                        <div class="artist-category-item" data-type="chinese">华语男歌手</div>
                        <div class="artist-category-item" data-type="chineseFemale">华语女歌手</div>
                        <div class="artist-category-item" data-type="chineseGroup">华语组合</div>
                        <div class="artist-category-item" data-type="korean">日韩歌手</div>
                        <div class="artist-category-item" data-type="western">欧美歌手</div>
                    </div>
                </div>
                <style>
                    .artist-category-list { display: flex; flex-direction: column; gap: 10px; }
                    .artist-category-item { padding: 15px; background: #f8f8f8; border-radius: 8px; font-size: 14px; color: #333; }
                </style>
            `;
            break;
        case 'free':
            pageTitle = '免费听';
            pageContent = `
                <div class="page-section">
                    <div class="free-listen-content">
                        <div class="free-listen-icon">🎧</div>
                        <div class="free-listen-title">看广告 免费听VIP歌曲</div>
                        <div class="free-listen-desc">观看15秒广告，即可获得<br>VIP歌曲免费听30分钟</div>
                    </div>
                </div>
            `;
            break;
        case 'medal':
            pageTitle = '乐迷勋章';
            pageContent = `
                <div class="page-section">
                    <div class="page-section-title">勋章收藏馆</div>
                    <div class="medal-list">
                        <div class="medal-item" data-medal="superFan">
                            <span class="medal-icon">🏅</span>
                            <div class="medal-info">
                                <div class="medal-name">超级粉丝</div>
                                <div class="medal-desc">连续听歌30天</div>
                            </div>
                            <span class="medal-status">已获得</span>
                        </div>
                        <div class="medal-item" data-medal="vip">
                            <span class="medal-icon">🎖️</span>
                            <div class="medal-info">
                                <div class="medal-name">VIP会员</div>
                                <div class="medal-desc">开通年度会员</div>
                            </div>
                            <span class="medal-status locked">未获得</span>
                        </div>
                        <div class="medal-item" data-medal="first">
                            <span class="medal-icon">🎗️</span>
                            <div class="medal-info">
                                <div class="medal-name">首发支持</div>
                                <div class="medal-desc">支持新歌首发</div>
                            </div>
                            <span class="medal-status">已获得</span>
                        </div>
                    </div>
                </div>
                <style>
                    .medal-list { display: flex; flex-direction: column; gap: 12px; }
                    .medal-item { display: flex; align-items: center; padding: 12px; background: #f8f8f8; border-radius: 10px; }
                    .medal-icon { font-size: 32px; margin-right: 12px; }
                    .medal-info { flex: 1; }
                    .medal-name { font-size: 14px; color: #333; margin-bottom: 4px; }
                    .medal-desc { font-size: 12px; color: #999; }
                    .medal-status { font-size: 12px; color: #ff6b6b; }
                    .medal-status.locked { color: #999; }
                </style>
            `;
            break;
    }
    
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">${pageTitle}</span>
        </div>
        <div class="page-content">
            ${pageContent}
        </div>
    `;
    
    showPage();
    
    document.getElementById('closePage').addEventListener('click', closePage);
    
    document.querySelectorAll('.rank-item').forEach(item => {
        item.addEventListener('click', function() {
            const rankName = this.querySelector('.rank-name')?.textContent;
            showToast(`进入: ${rankName}`);
        });
    });
}

function navigateToSection(action) {
    const pageContainer = document.getElementById('pageContainer');
    let pageTitle = '';
    let pageContent = '';
    
    switch(action) {
        case 'newSong':
            pageTitle = '新歌速递';
            pageContent = '<div class="page-section"><div class="page-section-desc">更多新歌尽在乐库...</div></div>';
            break;
        case 'hotZone':
            pageTitle = '热门专区';
            pageContent = '<div class="page-section"><div class="page-section-desc">热门专区内容...</div></div>';
            break;
        case 'goldenSeries':
            pageTitle = '一人一首金曲系列';
            pageContent = '<div class="page-section"><div class="page-section-desc">经典金曲合集...</div></div>';
            break;
        case 'artistSelection':
            pageTitle = '歌手精选';
            pageContent = '<div class="page-section"><div class="page-section-desc">精选歌手作品...</div></div>';
            break;
        case 'chineseStyle':
            pageTitle = '国风国潮专区';
            pageContent = '<div class="page-section"><div class="page-section-desc">国风音乐专区...</div></div>';
            break;
        case 'variety':
            pageTitle = '热门综艺';
            pageContent = '<div class="page-section"><div class="page-section-desc">综艺音乐精选...</div></div>';
            break;
        case 'game':
            pageTitle = '热门游戏';
            pageContent = '<div class="page-section"><div class="page-section-desc">游戏音乐专区...</div></div>';
            break;
        case 'movie':
            pageTitle = '热门影视';
            pageContent = '<div class="page-section"><div class="page-section-desc">影视原声精选...</div></div>';
            break;
        case 'composer':
            pageTitle = '词曲名家集';
            pageContent = '<div class="page-section"><div class="page-section-desc">知名词曲创作者...</div></div>';
            break;
        case 'label':
            pageTitle = '厂牌专区';
            pageContent = '<div class="page-section"><div class="page-section-desc">各大音乐厂牌...</div></div>';
            break;
        case 'artistRecommend':
            pageTitle = '歌手推荐';
            pageContent = '<div class="page-section"><div class="page-section-desc">推荐歌手列表...</div></div>';
            break;
        case 'love':
            pageTitle = '爱的独宠';
            pageContent = '<div class="page-section"><div class="page-section-desc">独宠专区内容...</div></div>';
            break;
        case 'newReservation':
            pageTitle = '新歌预约';
            pageContent = '<div class="page-section"><div class="page-section-desc">预约即将发布的新歌...</div></div>';
            break;
        case 'mv':
            pageTitle = 'MV前线';
            pageContent = '<div class="page-section"><div class="page-section-desc">最新MV推荐...</div></div>';
            break;
    }
    
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">${pageTitle}</span>
        </div>
        <div class="page-content">
            ${pageContent}
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openPlaylistDetail(playlistId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">歌单详情</span>
        </div>
        <div class="playlist-detail-header">
            <div class="playlist-detail-content">
                <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Music%20playlist%20cover%20art&image_size=square" class="playlist-detail-cover" alt="歌单封面">
                <div class="playlist-detail-info">
                    <div class="playlist-detail-title">精选歌单</div>
                    <div class="playlist-detail-meta">123首歌曲 · 10万次播放</div>
                    <div class="playlist-detail-actions">
                        <div class="playlist-detail-btn primary">▶ 播放全部</div>
                        <div class="playlist-detail-btn secondary">🤍 收藏</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">歌单简介</div>
                <div class="page-section-desc">这是一个精心挑选的歌单，包含各种风格的音乐作品。</div>
            </div>
            <div class="page-section">
                <div class="page-section-title">歌曲列表</div>
                <div class="song-list">
                    <div class="song-item" data-song="list1">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Album%20cover&image_size=square" alt="">
                        <div class="song-info">
                            <span class="song-name">歌曲1</span>
                            <span class="song-artist">歌手1</span>
                        </div>
                    </div>
                    <div class="song-item" data-song="list2">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Album%20cover&image_size=square" alt="">
                        <div class="song-info">
                            <span class="song-name">歌曲2</span>
                            <span class="song-artist">歌手2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openArtistDetail(artistId) {
    const pageContainer = document.getElementById('pageContainer');
    const artistNames = {
        leslie: '张国荣',
        vic: '周传雄',
        jeff: '张信哲',
        jay: '周杰伦',
        jj: '林俊杰',
        mayday: '五月天',
        sunson: '太阳之子',
        nmixx: 'NMIXX',
        aespa: 'aespa'
    };
    
    const artistName = artistNames[artistId] || '歌手';
    
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">${artistName}</span>
        </div>
        <div class="artist-detail-header">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Singer%20portrait&image_size=square" class="artist-detail-avatar" alt="${artistName}">
            <div class="artist-detail-name">${artistName}</div>
            <div class="artist-detail-fans">粉丝: 1000万</div>
            <div class="artist-detail-actions">
                <div class="artist-detail-btn primary">▶ 播放全部</div>
                <div class="artist-detail-btn secondary">+ 关注</div>
            </div>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">热门歌曲</div>
                <div class="song-list">
                    <div class="song-item">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Album%20cover&image_size=square" alt="">
                        <div class="song-info">
                            <span class="song-name">热门歌曲1</span>
                            <span class="song-artist">${artistName}</span>
                        </div>
                    </div>
                    <div class="song-item">
                        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Album%20cover&image_size=square" alt="">
                        <div class="song-info">
                            <span class="song-name">热门歌曲2</span>
                            <span class="song-artist">${artistName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openShowDetail(showId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">综艺详情</span>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">综艺歌曲</div>
                <div class="page-section-desc">综艺相关音乐内容...</div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openGameDetail(gameId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">游戏音乐</span>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">游戏歌单</div>
                <div class="page-section-desc">游戏原声音乐...</div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openMovieDetail(movieId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">影视原声</span>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">影视歌曲</div>
                <div class="page-section-desc">影视原声音乐...</div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openComposerDetail(composerId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">词曲名家</span>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">代表作品</div>
                <div class="page-section-desc">词曲创作者代表作品...</div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openLabelDetail(labelId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">厂牌主页</span>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">厂牌音乐</div>
                <div class="page-section-desc">厂牌旗下艺人作品...</div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openLoveDetail(loveId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">爱的独宠</span>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">详情</div>
                <div class="page-section-desc">独宠内容详情...</div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function openReservationDetail(reservationId) {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.innerHTML = `
        <div class="page-header">
            <span class="page-back" id="closePage">←</span>
            <span class="page-title">新歌预约</span>
        </div>
        <div class="album-detail-header">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Album%20cover&image_size=square" class="album-detail-cover" alt="专辑封面">
            <div class="album-detail-title">新专辑名称</div>
            <div class="album-detail-artist">艺人名称</div>
            <div class="album-detail-date">2026-05-29</div>
            <div class="album-detail-actions">
                <div class="album-detail-btn primary">预约</div>
                <div class="album-detail-btn secondary">提醒我</div>
            </div>
        </div>
        <div class="page-content">
            <div class="page-section">
                <div class="page-section-title">专辑介绍</div>
                <div class="page-section-desc">专辑详细介绍...</div>
            </div>
        </div>
    `;
    
    showPage();
    document.getElementById('closePage').addEventListener('click', closePage);
}

function playMv(mvId) {
    showToast('正在播放MV...');
}

function navigateToBottomNav(page) {
    showToast(`进入: ${page}页面`);
}

function showPage() {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.classList.add('active');
}

function closePage() {
    const pageContainer = document.getElementById('pageContainer');
    pageContainer.classList.remove('active');
}

function showModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
}

function showToast(message) {
    let toast = document.querySelector('.toast-message');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-message';
        const style = document.createElement('style');
        style.textContent = `
            .toast-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.75);
                color: #fff;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 14px;
                z-index: 1000;
                animation: fadeInOut 2s ease;
            }
            @keyframes fadeInOut {
                0% { opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.animation = 'none';
    setTimeout(() => {
        toast.style.animation = 'fadeInOut 2s ease';
    }, 10);
}

document.getElementById('modalOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
