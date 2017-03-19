$(function() {
    pollBingeBoard();
});

function pollBingeBoard() {
    $.get('https://binge.csh.rit.edu/api/get/10?filter_complete', function(data) {
        console.log(data);
    });
    setTimeout(pollBingeBoard, 5000);
}
