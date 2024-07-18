// 监听导航栏高度变化，让内容完整显示出来
function adjust_body_element_padding() {
    let navHeight = document.querySelector('nav').offsetHeight;
    document.body.style.paddingTop = navHeight + 'px';
}
window.addEventListener('load', adjust_body_element_padding);
window.addEventListener('resize', adjust_body_element_padding);

// 自动缩放我们的标题
function adjustFontSize() {
    const container = document.getElementById('slogan-header');
    if (!container)
        return;
    const containerWidth = document.getElementById('container-fluid-id').clientWidth - 30;
    const text = container.innerText;

    let fontSize = 50; // Initial font size
    container.style.fontSize = fontSize + 'px';

    // Calculate the width of the text with the current font size and font family
    const calculateTextWidth = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = `${fontSize}px 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif`;
        return context.measureText(text).width;
    };

    // Adjust the font size until the text fits within the container width
    while (calculateTextWidth() > (containerWidth * 0.97) && fontSize > 0) {
        fontSize -= 1;
        container.style.fontSize = fontSize + 'px';
    }
}

// Adjust font size on load and on resize
window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);


// 监听页面底部的高度，对内容对padding高度进行修改
function adjustMainPadding() {
    var footer = document.getElementById('footer');
    var mainContainer = document.getElementById('miccai2024');
    var footerHeight = footer.offsetHeight;
    mainContainer.style.paddingBottom = footerHeight + 15 + 'px';
}

// Adjust padding on load
window.addEventListener('load', adjustMainPadding);

// Adjust padding on window resize
window.addEventListener('resize', adjustMainPadding);
