$(".d").on("click",function(){
    $(".abc").css("display","block");
    $(".d").css("display","none");
});


// 全体80と設定｛100を左10移しStart（右10残しGoal）｝
let usagi_score = 10 ;
let kame_score = 10 ;
let usagi_score_view = 0;
let kame_score_view = 0;

$(".easy").on("click",function(){
    $(".f").text("初級");


    $("#gu_btn").on("click",function(){
        // 1.乱数（1~3）
        const r = Math.ceil(Math.random()*3);
            
        // 2.if分岐処理
        let view ="";
    
        if(r==1){
            view = "おーっ。。引き分け（CP グー）";
            console.log(usagi_score,"う_あいこ");
            console.log(kame_score,"か_あいこ");
        }
        if(r==2){
            view = "【相手が2 進んだ】あなたの負け。。。（CP チョキ)";
            usagi_score += 16;
            $(".u_set").css("left",usagi_score +"%");
            console.log(usagi_score,"う_あなたの負け");
            console.log(kame_score,"か_CPの勝ち");
            usagi_score_view += 2;
            console.log(usagi_score_view,"う_あなたの負け");
            console.log(kame_score_view,"か_CPの勝ち");
        }
        if(r==3){
            view = "【自分が1 進んだ】あなたの勝ち！！（CP パー）";
            kame_score += 8;
            $(".k_set").css("left",kame_score + "%");
            console.log(usagi_score,"う_CPの負け");
            console.log(kame_score,"か_あなたの勝ち");
            kame_score_view += 1;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
    
        //scoreが10を超えたら、勝者に勝ち、敗者に負けという表示を
        // コンピュータはうさぎの下、あなたはカメの下にそれぞれ文字表示する。
        // ゲームが終了したことをフッターの上に大きい文字で赤で表示する。
        
        // usagi_scoreはStart地点を事前に10進ませており+80がGoal地点であるから90となる
        if (usagi_score >= 90){
            $(".result_a").text("コンピュータの勝利");
            $(".finish_b").text("残念・・・あなたの負けです");
    
        //うさぎが勝利したらうさぎのイラストとスコア以外を消す 
            $(".kame_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".k_set").css("left",kame_score +"%");
    
        }
        // kame_scoreはStart地点を事前に10進ませており+80がGoal地点であるから90となる
        if(kame_score >= 90){
            $(".result_b").text("あなたの勝利");
            $(".finish_a").text("おめでとうございます！！あなたの勝ちです！！");
    
            $(".rabbit_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".u_set").css("left",usagi_score +"%");
        }
    
        // 3.表示処理(judgmentに対してhtmlの〇〇を表示させる)
        $("#judgment").html(view);
        $("#judgment_a").html(usagi_score_view);
        $("#judgment_b").html(kame_score_view);
    
    });   
    
    $("#choki_btn").on("click",function(){
        // 1.乱数（1~3）
        const r = Math.ceil(Math.random()*3);
            
        // 2.if分岐処理
        let view ="";
    
        if(r==1){
            view = "【相手が1 進んだ】あなたの負け。。（CP グー）";
            usagi_score += 8;
            $(".u_set").css("left",usagi_score +"%");
            console.log(usagi_score,"う_CPの勝ち");
            console.log(kame_score,"か_あなたの負け");
    
            usagi_score_view += 1;
            console.log(usagi_score_view,"う_CPの勝ち");
            console.log(kame_score_view,"か_あなたの負け");
        }
        if(r==2){
            view = "おーっ。。引き分け（CP チョキ）";
        }
        if(r==3){
            view = "【自分が2進んだ】あなたの勝ち！！（CP パー）";
            kame_score += 16;
            $(".k_set").css("left",kame_score +"%");
            console.log(usagi_score,"う_CPの負け");
            console.log(kame_score,"か_あなたの勝ち");
            
            kame_score_view += 2;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
    
        if (usagi_score >= 90){
            $(".result_a").text("コンピュータの勝利");
            $(".finish_b").text("残念・・・あなたの負けです")
    
            $(".kame_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".k_set").css("left",kame_score +"%");
        }
        if(kame_score >= 90){
            $(".result_b").text("あなたの勝利");
            $(".finish_a").text("おめでとうございます！！あなたの勝ちです！！")
            
            $(".rabbit_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".u_set").css("left",usagi_score +"%");
        }
    
        // 3.表示処理(viewという箱からjudgmentの箱に)
        $("#judgment").html(view);
        $("#judgment_a").html(usagi_score_view);
        $("#judgment_b").html(kame_score_view);
    
    });
    
    $("#pa_btn").on("click",function(){
        // 1.乱数（1~3）
        const r = Math.ceil(Math.random()*3);
            
        // 2.if分岐処理
        let view ="";
    
        if(r==1){
            view = "【自分が2 進んだ】あなたの勝ち！！（CP グー）";
            kame_score += 16;
            $(".k_set").css("left",kame_score +"%");
            console.log(usagi_score,"う_CPの負け");
            console.log(kame_score,"か_あなたの勝ち");
    
            kame_score_view += 2;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
    
        if(r==2){
            view = "【相手が2 進んだ】あなたの負け。。。（CP チョキ）";
            usagi_score += 16;
            $(".u_set").css("left",usagi_score +"%");
            console.log(usagi_score,"う_CPの勝ち");
            console.log(kame_score,"か_あなたの負け");
        
            usagi_score_view += 2;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
        if(r==3){
            view = "おーっ。。引き分け（CP パー）";
        }
        if (usagi_score >= 90){
            $(".result_a").text("コンピュータの勝利");
            $(".finish_b").text("残念・・・あなたの負けです")
    
            $(".kame_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".k_set").css("left",kame_score +"%");
        }
    
        if(kame_score >= 90){
            $(".result_b").text("あなたの勝利");
            $(".finish_a").text("おめでとうございます！！あなたの勝ちです！！")
    
            $(".rabbit_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".u_set").css("left",usagi_score +"%");
        }
    
        // 3.表示処理(viewという箱からjudgmentの箱に)
        $("#judgment").html(view);
        $("#judgment_a").html(usagi_score_view);
        $("#judgment_b").html(kame_score_view);
    
    });

});

// 上級編

$(".difficult").on("click",function(){
    $(".f").text("上級");

    $("#gu_btn").on("click",function(){
        // 1.乱数（1~3）
        const r = Math.ceil(Math.random()*3);
            
        // 2.if分岐処理
        let view ="";
    
        if(r==1){
            view = "おーっ。。引き分け（CP グー）";
            console.log(usagi_score,"う_あいこ");
            console.log(kame_score,"か_あいこ");
        }
        if(r==2){
            view = "【相手が2 進んだ】あなたの負け。。。（CP チョキ)";
            usagi_score += 16;
            $(".u_set").css("left",usagi_score +"%");
            console.log(usagi_score,"う_あなたの負け");
            console.log(kame_score,"か_CPの勝ち");
            usagi_score_view += 2;
            console.log(usagi_score_view,"う_あなたの負け");
            console.log(kame_score_view,"か_CPの勝ち");
        }
        if(r==3){
            view = "【自分が0.5 進んだ】あなたの勝ち！！（CP パー）";
            kame_score += 8/2;
            $(".k_set").css("left",kame_score + "%");
            console.log(usagi_score,"う_CPの負け");
            console.log(kame_score,"か_あなたの勝ち");
            kame_score_view += 1/2;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
    
        //scoreが10を超えたら、勝者に勝ち、敗者に負けという表示を
        // コンピュータはうさぎの下、あなたはカメの下にそれぞれ文字表示する。
        // ゲームが終了したことをフッターの上に大きい文字で赤で表示する。
        
        // usagi_scoreはStart地点を事前に10進ませており+80がGoal地点であるから90となる
        if (usagi_score >= 90){
            $(".result_a").text("コンピュータの勝利");
            $(".finish_b").text("残念・・・あなたの負けです");
    
        //うさぎが勝利したらうさぎのイラストとスコア以外を消す 
            $(".kame_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".k_set").css("left",kame_score +"%");
    
        }
        // kame_scoreはStart地点を事前に10進ませており+80がGoal地点であるから90となる
        if(kame_score >= 90){
            $(".result_b").text("あなたの勝利");
            $(".finish_a").text("おめでとうございます！！あなたの勝ちです！！");
    
            $(".rabbit_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".u_set").css("left",usagi_score +"%");
        }
    
        // 3.表示処理(judgmentに対してhtmlの〇〇を表示させる)
        $("#judgment").html(view);
        $("#judgment_a").html(usagi_score_view);
        $("#judgment_b").html(kame_score_view);
    
    });   
    
    $("#choki_btn").on("click",function(){
        // 1.乱数（1~3）
        const r = Math.ceil(Math.random()*3);
            
        // 2.if分岐処理
        let view ="";
    
        if(r==1){
            view = "【相手が1 進んだ】あなたの負け。。（CP グー）";
            usagi_score += 8;
            $(".u_set").css("left",usagi_score +"%");
            console.log(usagi_score,"う_CPの勝ち");
            console.log(kame_score,"か_あなたの負け");
    
            usagi_score_view += 1;
            console.log(usagi_score_view,"う_CPの勝ち");
            console.log(kame_score_view,"か_あなたの負け");
        }
        if(r==2){
            view = "おーっ。。引き分け（CP チョキ）";
        }
        if(r==3){
            view = "【自分が1 進んだ】あなたの勝ち！！（CP パー）";
            kame_score += 16/2;
            $(".k_set").css("left",kame_score +"%");
            console.log(usagi_score,"う_CPの負け");
            console.log(kame_score,"か_あなたの勝ち");
            
            kame_score_view += 1;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
    
        if (usagi_score >= 90){
            $(".result_a").text("コンピュータの勝利");
            $(".finish_b").text("残念・・・あなたの負けです")
    
            $(".kame_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".k_set").css("left",kame_score +"%");
        }
        if(kame_score >= 90){
            $(".result_b").text("あなたの勝利");
            $(".finish_a").text("おめでとうございます！！あなたの勝ちです！！")
            
            $(".rabbit_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".u_set").css("left",usagi_score +"%");
        }
    
        // 3.表示処理(viewという箱からjudgmentの箱に)
        $("#judgment").html(view);
        $("#judgment_a").html(usagi_score_view);
        $("#judgment_b").html(kame_score_view);
    
    });
    
    $("#pa_btn").on("click",function(){
        // 1.乱数（1~3）
        const r = Math.ceil(Math.random()*3);
            
        // 2.if分岐処理
        let view ="";
    
        if(r==1){
            view = "【自分が1 進んだ】あなたの勝ち！！（CP グー）";
            kame_score += 8/2;
            $(".k_set").css("left",kame_score +"%");
            console.log(usagi_score,"う_CPの負け");
            console.log(kame_score,"か_あなたの勝ち");
    
            kame_score_view += 2;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
    
        if(r==2){
            view = "【相手が2 進んだ】あなたの負け。。。（CP チョキ）";
            usagi_score += 16;
            $(".u_set").css("left",usagi_score +"%");
            console.log(usagi_score,"う_CPの勝ち");
            console.log(kame_score,"か_あなたの負け");
        
            usagi_score_view += 2;
            console.log(usagi_score_view,"う_CPの負け");
            console.log(kame_score_view,"か_あなたの勝ち");
        }
        if(r==3){
            view = "おーっ。。引き分け（CP パー）";
        }
        if (usagi_score >= 90){
            $(".result_a").text("コンピュータの勝利");
            $(".finish_b").text("残念・・・あなたの負けです")
    
            $(".kame_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".k_set").css("left",kame_score +"%");
        }
    
        if(kame_score >= 90){
            $(".result_b").text("あなたの勝利");
            $(".finish_a").text("おめでとうございます！！あなたの勝ちです！！")
    
            $(".rabbit_wrap").css("visibility","hidden");
            $(".btn_abc").css("visibility","hidden");
            $(".u_set").css("left",usagi_score +"%");
        }
    
        // 3.表示処理(viewという箱からjudgmentの箱に)
        $("#judgment").html(view);
        $("#judgment_a").html(usagi_score_view);
        $("#judgment_b").html(kame_score_view);
    
    });
});



