$(document).ready(function () {
    var dv_Res = $(".dv_Res");
    var dv_ResHist = $(".dv_Res_Hist");
    var Result = 0; var ResHist = "";
    $("input").click(function () {
        $this = $(this);
        Result = $this.val();
        var attr = $this.attr("atr");
        if (attr != "eql") {
            ResHist += Result;
            dv_ResHist.html(ResHist);
        }
        else {
            dv_Res.html(eval(ResHist));
            ResHist = "";
            dv_ResHist.html("");
        }
        if (attr == "Clear") {
            ClearAll();
        }
        if (attr == null) {
            dv_Res.html(Result);
        }

    });
    function ClearAll() {
        Result = 0;
        ResHist = "";
        dv_Res.html("0");
        dv_ResHist.html("");
    }
});