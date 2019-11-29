window.onload = function() {
    clickAbout();
  };




function clickAbout(){
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

}

