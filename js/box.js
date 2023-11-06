// 動きのきっかけとなるアニメーションの名前を定義
function bgLRextendAnime(){
  $('.bgextend').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('bgLRextend');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      bgLRextendAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動
    