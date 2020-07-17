$(document).ready(function(){
                
    //$('#reserveTableModal').on('shown.bs.modal', function () {
    //    $('#exampleRadios1').trigger('focus');
    //});
    $('#mycarousel').carousel({interval : 2000});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else {
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $("#loginModalCloseButton").click(function() {
        $('#loginModal').modal('toggle');
    });

    $("#reserveTableModalCloseButton").click(function() {
        $('#reserveTableModal').modal('toggle');
    });

    $("#reserveTableModalCancelButton").click(function() {
        $('#reserveTableModal').modal('toggle');
    });

    $("#loginModalCancelButton").click(function() {
        $('#loginModal').modal('toggle');
    });

});