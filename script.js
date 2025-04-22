document.addEventListener('mousemove', (event) => {
    const menu = document.querySelector('.menu');
    const windowWidth = window.innerWidth;

    // 檢查滑鼠是否在右側三分之一範圍內
    if (event.clientX > (windowWidth * 2) / 3) {
        menu.classList.add('visible'); // 顯示選單（滑入）
    } else {
        menu.classList.remove('visible'); // 隱藏選單（滑出）
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu > li');
    const submenu = document.querySelector('.submenu');
    const portfolioItem = document.querySelector('.menu > li:nth-child(3)'); // 作品集按鈕

    // 當滑鼠移到作品集按鈕上時顯示子選單
    portfolioItem.addEventListener('mouseenter', () => {
        submenu.style.display = 'block'; // 顯示子選單
    });

    // 當滑鼠離開作品集按鈕時隱藏子選單
    portfolioItem.addEventListener('mouseleave', () => {
        submenu.style.display = 'none'; // 隱藏子選單
    });

    // 當滑鼠移到子選單上時保持顯示
    submenu.addEventListener('mouseenter', () => {
        submenu.style.display = 'block'; // 保持子選單顯示
    });

    // 當滑鼠離開子選單時隱藏
    submenu.addEventListener('mouseleave', () => {
        submenu.style.display = 'none'; // 隱藏子選單
    });

    const submenuButtons = document.querySelectorAll('.submenu li a'); // 選取子選單內的按鈕
    const iframe = document.querySelector('.iframe');

    submenuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // 阻止默認行為（如跳轉）

            // 更新 iframe 的內容
            const targetUrl = button.getAttribute('href'); // 獲取按鈕的連結
            iframe.setAttribute('src', targetUrl); // 更新 iframe 的 src

            // 顯示 iframe
            iframe.classList.add('visible');
        });
    });

    const menuButtons = document.querySelectorAll('.menu li a'); // 選取 .menu 內的按鈕
    const homeButton = document.querySelector('.menu > li:first-child'); // 選取首頁按鈕

    // 點擊其他按鈕時顯示 iframe
    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // 阻止默認行為（如跳轉）

            // 更新 iframe 的內容
            const targetUrl = button.getAttribute('href'); // 獲取按鈕的連結
            iframe.setAttribute('src', targetUrl); // 更新 iframe 的 src

            // 顯示 iframe
            iframe.classList.add('visible');
        });
    });

    // 點擊首頁按鈕時關閉 iframe
    homeButton.addEventListener('click', () => {
        iframe.classList.remove('visible'); // 隱藏 iframe
        iframe.setAttribute('src', ''); // 清空 iframe 的內容
    });

    const body = document.body;

    // 創建煙火容器
    const fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks-container');
    body.appendChild(fireworksContainer);

    // 煙火效果生成函數
    function createFirework() {
        const fireworkCount = 30; // 每次煙火的粒子數量增加
        const centerX = Math.random() * window.innerWidth; // 隨機 X 軸位置
        const centerY = Math.random() * window.innerHeight; // 隨機 Y 軸位置

        for (let i = 0; i < fireworkCount; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');

            // 隨機方向和距離
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 300 + 50; // 粒子距離中心的範圍增加
            const x = Math.cos(angle) * distance + 'px';
            const y = Math.sin(angle) * distance + 'px';

            // 設置粒子的動畫方向
            firework.style.setProperty('--x', x);
            firework.style.setProperty('--y', y);

            // 設置粒子初始位置
            firework.style.left = `${centerX}px`;
            firework.style.top = `${centerY}px`;

            // 添加到煙火容器
            fireworksContainer.appendChild(firework);

            // 在動畫結束後移除粒子
            firework.addEventListener('animationend', () => {
                firework.remove();
            });
        }
    }

    // 定時觸發煙火效果
    setInterval(createFirework, 200); // 每 0.2 秒觸發一次煙火
});