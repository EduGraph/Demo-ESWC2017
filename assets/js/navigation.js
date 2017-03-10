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

        $("#section-technology").empty();

        $("#card-detail-title").text(mappingDetails['title']);
        $("#card-detail-text").text(mappingDetails['description']);
        $("#card-detail-badge").text(mappingDetails['usecase']);
        $("#card-detail-image").attr("src", mappingDetails['image']);


        $("#card-detail-links").empty();
        if(mappingDetails.hasOwnProperty('links')){
            mappingDetails['links'].forEach(function(e,i){
                $("#card-detail-links").append('<a href="'+e['url']+'" target="_blank" class="card-link">'+e['label']+'</a>');
            });
        }



        if(mappingDetails.hasOwnProperty('screenshots')){
            var screenshots = [];

            $("#card-detail-links").append('<a href="#" class="card-link screenshot-gallery">Screenshots</a>');

            mappingDetails['screenshots'].forEach(function(e,i){
                screenshots.push( { href:e.src, title: e.title })
            });

            $( '.screenshot-gallery' ).click( function( e ) {
                e.preventDefault();
                $.swipebox(
                    screenshots,
                    {
                        hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
                        removeBarsOnMobile : false, // false will show top bar on mobile devices
                        hideBarsDelay : 0, // delay before hiding bars on desktop
                        loopAtEnd: true // true will return to the first image after the last image is reached
                    });
            } );

            console.log(screenshots);

        }

        $("#card-detail-technologies").empty();
        if(mappingDetails.hasOwnProperty('technologies')){
            mappingDetails['technologies'].forEach(function(e,i){
                $("#section-technology").append('<a href="'+e['url']+'" target="_blank" class="card-link">'+e['label']+'</a>');
            });
        }
    }
});

