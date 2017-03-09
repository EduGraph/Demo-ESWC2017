$( document ).ready(function() {

    $('#path169').click(function(){

        $("#card-detail-title").text("Integration & Orchestration");
        $("#card-detail-text").text("Short description");

        $("#card-detail-badge").text("Use case demo");

        $("#card-detail-image").attr("src", "")

        $("#card-detail-links").empty();
        $("#card-detail-links").append('<a href="https://edugraph.github.io/EduGraph-Process-Viewer/" target="_blank" class="card-link">Vorschau</a>');
        $("#card-detail-links").append('<a href="#" target="_blank" class="card-link">GitHub</a>');
    });

    $('#path69').click(function(){
        window.open('https://bmake.th-brandenburg.de/demos/edugraph/app/', '_blank');
    });

    $('#path387').click(function(){
        window.open('https://bmake.th-brandenburg.de/demos/edugraph/app/', '_blank');
    });


    $('#path345').click(function(){
        window.open('https://bmake.th-brandenburg.de/demos/edugraph/app/', '_blank');
    });

});

