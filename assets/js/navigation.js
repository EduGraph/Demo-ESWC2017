$( document ).ready(function() {


    $.getJSON( "navigation.json", function( data ) {

        $.each(data, function( key, value ) {

            $('#'+key).addClass('architecture-link');

            $('#'+key).on( "click", function() {
                openInfoCard(value);
            });

            console.log(value.title);
        });

    });

    function openInfoCard(element){
        var identificator = element;

        var mappingDetails = element;
        $("#card-detail-title").text(mappingDetails['title']);
        $("#card-detail-text").text(mappingDetails['description']);
        $("#card-detail-badge").text(mappingDetails['usecase']);
        $("#card-detail-image").attr("src", mappingDetails['image']);
        $("#card-detail-links").empty();
        mappingDetails['links'].forEach(function(e,i){
            $("#card-detail-links").append('<a href="'+e['url']+'" target="_blank" class="card-link">'+e['label']+'</a>');
        });
    }



/*
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
*/
});

