// 當頁面 準備完成時
$(document).ready(function () {
   
    // 當視窗 捲動時
    $(window).scroll(function () {
        // var 變數 = 資料

        $(".test").each(function (index, element) {
            // element == this
            var number = $(this).attr("data-counter-number");
            var time = $(this).attr("data-counter-time");
            var attributeOffset = $(this).attr("data-counter-offset");
            
            var offset = $(this).offset();       // 取得元素位移資料
            var top = offset.top;                // 上方
            var left = offset.left;              // 左方
    
            // console.log("元素的上方：" + top);
    
            var windowTop = $(window).scrollTop();
    
            // console.log("視窗的上方：" + windowTop);
         
            // 判斷式
            // 如果 發生什麼事 就...
            // if (條件) { 程式 }
            if (windowTop > top - attributeOffset) {
                //console.log("開始執行動畫...");
    
                // 選取.動畫({參數}，{選項})
                $(this).animate({
                    maxNum : number                              // 數字自定義名稱
                }, {
                    duration: Number(time),                     // 時間
                    step: (now) => {                            // 步驟
                        $(this).text(Math.floor(now));          // 文字(步驟) - Math.floor() 去小數點
                    }
                });
            }       
        });
    });
});
