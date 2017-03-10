$( document ).ready(function() {

    $.getJSON( "navigation.json", function( data ) {
        $.each(data, function( key, value ) {
            $('#'+key).addClass('architecture-link');
            $('#'+key).on( "click", function() {
                openInfoCard(value);
            });
        });

    });

    function openInfoCard(element){
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

});

