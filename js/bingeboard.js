$(function() {
    pollBingeBoard();
});

function pollBingeBoard() {
    $.get('https://binge.csh.rit.edu/api/get/10?filter_complete', function(data) {
        // Clear table rows
        $('#bingeboard > tbody > tr').remove();

        for(var i = 0; i < data.length; i++) {
            var tableRow = $('#bingeboard').find('tbody').append($('<tr>'));
            tableRow.append($('<td>').text(data[i].character_name))
            tableRow.append($('<td>').text(data[i].score))
        }
    });
    setTimeout(pollBingeBoard, 5000);
}
