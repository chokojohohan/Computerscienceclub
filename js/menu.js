//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
      $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
      $(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
        var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
        $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
        $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
        return false;//リンクの無効化
      });
      $(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
      $(".has-child").removeClass('active');//activeクラスを削除
      $('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
  }
  $(document).ready(function () {
    $(".menu").hide(); // アコーディオンメニューを非表示にする
  
    $(".openbtn1").click(function () {
      $(this).toggleClass('active');
      $(".menu").slideToggle(); // アコーディオンメニューの表示/非表示を切り替える
    });
  });
  let accordionDetails = '.js-details';
  let accordionSummary = '.js-details-summary';
  let accordionContent = '.js-details-content';
  let speed = 500;

  $(accordionSummary).each(function() {
    $(this).on("click", function(event) {
      // summaryにis-activeクラスを切り替え
      $(this).toggleClass("is-active");
      // デフォルトの挙動を無効化
      event.preventDefault();
      if ($(this).parent($(accordionDetails)).attr("open")) {
        // アコーディオンを閉じるときの処理
        $(this).nextAll($(accordionContent)).slideUp(speed, function() {
          // アニメーションの完了後にopen属性を取り除く
          $(this).parent($(accordionDetails)).removeAttr("open");
        });
      } else {
        // アコーディオンを開くときの処理
        // open属性を付ける
        $(this).parent($(accordionDetails)).attr("open", "true");
        // いったんdisplay:none;してからslideDownで開く
        $(this).nextAll($(accordionContent)).hide().slideDown(speed);
      }
    })
  })