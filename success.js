// Share functions
function shareToWeChat() {
    alert('微信分享功能需要在微信浏览器中使用，或者通过微信客户端分享链接。');
}

function shareToQQ() {
    alert('QQ分享功能需要集成QQ SDK，在实际应用中会调用QQ分享接口。');
}

function copyLink() {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = window.location.origin + '/index.html';
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('链接已复制到剪贴板！');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Success page loaded');
});