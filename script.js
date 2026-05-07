$(function () {


    $('.out_btn').click(function () {
        $('.con1').addClass('dpnone')
        $('.con2').removeClass('dpnone')
    })

    function fireConfetti() {
        const duration = 1500;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }
    function updateStar() {
        $('.pw_star li span').each(function (index) {

            if (index < btnVal.length) {
                $(this).removeClass('dpnone');

                // 마지막 입력값만 숫자로 표시
                if (index === btnVal.length - 1) {
                    $(this).text(btnVal[index]);
                } else {
                    $(this).text('*');
                }

            } else {
                $(this).addClass('dpnone');
                $(this).text('');
            }

        });
    }
    let btnVal = "";

    $('.keypad .keypad_num').click(function () {
        if (btnVal.length >= 4) return;
        btnVal += $(this).val();
        $("#in_pwd").val(btnVal);

        updateStar()
    });

    $('.keypad .main_btn').click(function () {
        let inVal = $("#in_pwd").val();

        if (inVal.length === 4) {
            if (inVal === '0508') {
                $('.con2').addClass('dpnone');
                $('.con3').removeClass('dpnone');

                if (!$('con3').hasClass('dpnone')) {
                    setTimeout(function () {
                        $('.con3').addClass('dpnone');
                        $('.con4').removeClass('dpnone');
                    }, 1000)
                    setTimeout(function () {
                        $('.con4').addClass('dpnone');
                        $('.con5').removeClass('dpnone');
                    }, 4000);
                    setTimeout(function () {
                        $('.con5').addClass('dpnone');
                        $('.con6').removeClass('dpnone');
                        fireConfetti()
                    }, 9000);
                    setTimeout(function () {
                        location.reload();
                    }, 15000);
                }
            } else {
                alert('비밀번호를 다시 입력해주세요!');
                $("#in_pwd").val("");
                btnVal = "";
                $('.pw_star li span').addClass('dpnone');
            }
        }

    });

    $('.keypad .del_btn').click(function () {
        btnVal = btnVal.slice(0, -1);
        $("#in_pwd").val(btnVal);

        updateStar();

    })




})