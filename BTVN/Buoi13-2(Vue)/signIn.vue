<template>
    <div>
        <div class="signIn-container">
            <img class="logo" src="https://viblo.asia/favicon-128.png" alt="big-logo">
            <div class="signIn-right">
                <div class="line1">
                    Hãy đăng ký một tài khoản Viblo để nhận được nhiều bài viết thú vị hơn.
                </div>
                <div class="buttons">
                    <a href="https://viblo.asia/p/nhung-chu-y-khi-su-dung-v-model-trong-vue-js-ORNZqxN8K0n?fbclid=IwY2xjawIa2TJleHRuA2FlbQIxMAABHSYX4s5eHkp742bAopf2d4SOdf2HKOWBIuBUNQETTn870MytCFXDpCWZEA_aem_YBmid9CGPV3ww9-dxOFFCg" class="border-button1">
                        Đăng nhập
                    </a>
                    <a href="https://viblo.asia/p/nhung-chu-y-khi-su-dung-v-model-trong-vue-js-ORNZqxN8K0n?fbclid=IwY2xjawIa2TJleHRuA2FlbQIxMAABHSYX4s5eHkp742bAopf2d4SOdf2HKOWBIuBUNQETTn870MytCFXDpCWZEA_aem_YBmid9CGPV3ww9-dxOFFCg" class="border-button2">
                        Đăng kí
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.signIn-container{
    position: fixed;
    display:flex;
    left:0;
    bottom: 0;
    width: 100%;
    height:140px;
    background-color: white;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    z-index:1000;
    align-items: center;
    justify-content: center;
    gap:50px;
}

.logo{
    width: 95px;
    height: 100px;
}
.signIn-right{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
}

.line1{
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
}

.buttons{
    display: flex;
    justify-content: space-around;
}

.border-button1{
    font-size: 17px;
    font-weight: 600;
    color:#fff;
    padding: 8px 48px;
    border-radius: 5px;
    background-color: #1877F2;
}
.border-button1:hover{
    background-color: #4c95f3;
}

.border-button2{
    font-size: 17px;
    font-weight: 600;
    color:#fff;
    padding: 8px 48px;
    border-radius: 5px;
    background-color: #42B72A;
}

.border-button2:hover{
    background-color: #239b56;
}
</style>