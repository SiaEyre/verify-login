(function () {

    createText();
    checkEvent();
    var text;
    function createText() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (var i = 65; i <= 122; i++) {
            if (i > 90 && i < 97) {
                continue;
            }
            arr.push(String.fromCharCode(i));
        }
        var len = arr.length;
            text = '';
            temp = '';
        for (var i = 0; i < 6; i++) {
            text += arr[Math.floor(Math.random() * len)];
        }
        var mycanvas = $("#myCanvas")[0];
        var ctx = mycanvas.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
        ctx.lineWidth = 15;
        ctx.strokeStyle = "#aaa";
        ctx.moveTo(Math.floor(Math.random() * 50), Math.floor(Math.random() * 30));
        ctx.lineTo(100 + Math.floor(Math.random() * 50), Math.floor(Math.random() * 30));
        ctx.stroke();
        ctx.closePath();
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "#ddd";
        ctx.font = "20px Roboto Slab";
        ctx.fillText(text, 5, 30);
        ctx.restore();
    }
    function checkEvent() {
       
        $(".submit").on("click", function () {
            var value = $('.text').val().trim();
            if (value == '' || value == null || value == undefined) {
                $('p').show().html("输入内容不能为空!");
                $('.icon').css({ display: "inline-block", backgroundImage: "url('images/false.png')" });
            } else {
                if (value == text) {
                    $('.icon').css({ display: "inline-block", backgroundImage: "url('images/true.png')" });
                } else {
                    $('p').show().html("验证码错误，请重新输入!");
                    $('.icon').css({ display: "inline-block", backgroundImage: "url('images/false.png')" });
                }
            }
        });
        $(".refresh").on("click",function(){
            createText();
            $('p').add($('.icon')).fadeOut(1000);
        });
        $(".text").on("focus",function(){
            $('p').add($('.icon')).fadeOut(1000);
        });
    }
})();