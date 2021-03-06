$(function(){
    Pass_level("user_box","pass_inp");
    Pass_level("company_box","pass_inp")
    Pass_level("xg_pass","pass_inp");
});
function Pass_level(class1,class2) {
    $('.'+class1).find('.'+class2).keyup(function () {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        $(this).blur(function () {
            var inp_len=$(this).val().length;
            if(inp_len<6){
                $(this).val("");
                $(this).attr('placeholder',"密码为6-18位之间，区分大小写");
            }else {
                return false;
            }
        });
        if (false == enoughRegex.test($(this).val())) {
            $(this).parents("li").siblings("li").find(".pass_level dl dd").removeClass('on');

            //密码小于六位的时候，密码强度图片都为灰色
        }
        else if (strongRegex.test($(this).val())) {
            $(this).parents("li").siblings("li").find(".pass_level dl dd:first-child").addClass('on');
            $(this).parents("li").siblings("li").find(".pass_level dl dd:nth-child(2)").addClass('on');
            $(this).parents("li").siblings("li").find(".pass_level dl dd:nth-child(3)").addClass('on');

            //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强
        }
        else if (mediumRegex.test($(this).val())) {
            $(this).parents("li").siblings("li").find(".pass_level dl dd:first-child").addClass('on');
            $(this).parents("li").siblings("li").find(".pass_level dl dd:nth-child(2)").addClass('on');
            $(this).parents("li").siblings("li").find(".pass_level dl dd:nth-child(3)").removeClass('on');
            //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等
        }
        else {
            $(this).parents("li").siblings("li").find(".pass_level dl dd:first-child").addClass('on');
            $(this).parents("li").siblings("li").find(".pass_level dl dd:nth-child(2)").removeClass('on');
            $(this).parents("li").siblings("li").find(".pass_level dl dd:nth-child(3)").removeClass('on');
            /*var aaa=$(this).val();
            console.log(aaa)*/
            //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
        }
        return true;
    });
}