var h5vd_detective = function() {
    var h5vd_html5videos = document.getElementsByTagName("video");
    if (h5vd_html5videos.length == 0) {
        return;
    }
    if ((h5vd_html5videos[0].src) {
        location.href = "h5vd://h5vd.com/parse?video_src=" + encodeURIComponent(h5vd_html5videos[0].src);
    } else {
        setTimeout(function(){h5vd_detective();}, 1000);
    }
};
h5vd_detective();
