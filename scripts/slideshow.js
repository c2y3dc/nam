var curIndex = 0;
var images = [];
var timer = null;
var sliderInterval = 70000;
var animationInterval = 1000;
$(document).ready(function () {
    prePopulateSlider();
    $("#sliderBtnNext").click(function () {
        if (timer !== null) {
            if (images.length > 1) {
                window.clearInterval(timer);
                setImage(getNextIndex(curIndex), 0);
                startInterval();
            }
        }
    });
    $("#sliderBtnPrev").click(function () {
        if (timer !== null) {
            if (images.length > 1) {
                window.clearInterval(timer);
                setImage(getPrevIndex(curIndex), 0);
                startInterval();
            }
        }
    });
    $("#slider").mouseover(function () {
        window.clearInterval(timer);
    });
    $("#slider").mouseout(function () {
        startInterval();
    });
});
$(window).load(function () {
    var index = 0;
    $("#sliderList > li").each(function () {
        images.push({
            link: $("a", this).attr("href"),
            url: $("img", this).attr("src"),
            alt: $("img", this).attr("alt")
        });
        var sliderBtn = document.createElement("span");
        $(sliderBtn).attr("id", "sliderBtn" + index);
        $(sliderBtn).data("index", index);
        $(sliderBtn).addClass("sliderIndex");
        if (index === 0) {
            $(sliderBtn).addClass("sliderCurrent");
        }
        $(sliderBtn).html("●");
        $("#sliderPos").append(sliderBtn);
        index++;
    });
    $(".sliderIndex").click(function () {
        if (!$(this).hasClass("sliderCurrent")) {
            window.clearInterval(timer);
            var index = parseInt($(this).attr("id").replace("sliderBtn", ""));
            setImage(index, 0);
            startInterval();
        }
    });
    if (images.length > 1) {
        startInterval();
    }
});

function startInterval() {
    timer = window.setInterval(function () {
        setImage(getNextIndex(curIndex), animationInterval);
    }, sliderInterval);
}

function prePopulateSlider() {
    var imgCount = $("#sliderList > li").size();
    var intervalTime = $("#sliderList").data("interval");
    var link1 = document.createElement("a");
    var img1 = document.createElement("img");
    var link2 = document.createElement("a");
    var img2 = document.createElement("img");
    if (imgCount === 0 || imgCount === undefined) {
        return;
    }
    if (intervalTime !== undefined) {
        sliderInterval = intervalTime;
    }
    $(link1).attr("href", $("#sliderList > li").eq(0).find("a").attr("href"));
    $(link1).attr("id", "sliderLink1");
    $(link1).addClass("sliderImage1");
    $(img1).attr("alt", $("#sliderList > li").eq(0).find("img").attr("alt"));
    $(img1).attr("src", $("#sliderList > li").eq(0).find("img").attr("src"));
    $(img1).attr("id", "imgSrc1");
    $(link1).append(img1);
    if (imgCount > 1) {
        $(link2).attr("href", $("#sliderList > li").eq(1).find("a").attr("href"));
        $(link2).attr("id", "sliderLink2");
        $(link2).addClass("sliderImage2");
        $(img2).attr("alt", $("#sliderList > li").eq(1).find("img").attr("alt"));
        $(img2).attr("src", $("#sliderList > li").eq(1).find("img").attr("src"));
        $(img2).attr("id", "imgSrc2");
        $(link2).append(img2);
    } else {
        $(link2).attr("href", $("#sliderList > li").eq(0).find("a").attr("href"));
        $(link2).attr("id", "sliderLink2");
        $(link2).addClass("sliderImage2");
        $(img2).attr("alt", $("#sliderList > li").eq(0).find("img").attr("alt"));
        $(img2).attr("src", $("#sliderList > li").eq(0).find("img").attr("src"));
        $(img2).attr("id", "imgSrc2");
        $(link2).append(img2);
    }
    $("#slider").append(link1);
    $("#slider").append(link2);
}

function setImage(index, imageInterval) {
    if (images.length === 0) return;
    $("#sliderBtn" + curIndex).removeClass("sliderCurrent");
    $("#sliderBtn" + index).addClass("sliderCurrent");
    if ($("#imgSrc1").is(":visible")) {
        $("#imgSrc1").fadeOut(imageInterval, function () {
            loadImage(getNextIndex(index), "1");
            loadImage(index, "2");
        });
        $("#imgSrc2").fadeIn(imageInterval);
    } else {
        $("#imgSrc2").fadeOut(imageInterval, function () {
            loadImage(getNextIndex(index), "2");
            loadImage(index, "1");
        });
        $("#imgSrc1").fadeIn(imageInterval);
    }
    curIndex = index;
}

function loadImage(index, imgLoc) {
    $("#sliderLink" + imgLoc).attr("href", images[index].link);
    $("#imgSrc" + imgLoc).attr("alt", images[index].alt);
    $("#imgSrc" + imgLoc).attr("src", images[index].url);
}

function getNextIndex(index) {
    var next = index + 1;
    if (next >= images.length) {
        next = 0;
    }
    return next;
}

function getPrevIndex(index) {
    var prev = index - 1;
    if (prev <= -1) {
        prev = images.length + prev;
    }
    return prev;
}