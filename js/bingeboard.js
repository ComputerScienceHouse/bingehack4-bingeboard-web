data_fields = []

$(function() {
    $('#bingeboard').find('thead').find('tr').children('td').each(function (i, element) {
        data_fields.push($(element).data('field'));
    });
    pollBingeBoard();
});

function pollBingeBoard() {
    var uri = 'https://binge.csh.rit.edu/api/get/10';
    if (document.querySelector('#allGames').checked) {
        uri += '?filter_complete';
    }
    $.get(uri, function(data) {
        // Clear table rows
        $('#bingeboard').find('tbody').empty();

        for(var i = 0; i < data.length; i++) {
            var tableRow = $('#bingeboard').find('tbody').append($('<tr>'));
            for(var j = 0; j < data_fields.length; j++) {
                tableRow.append($('<td>').text(data[i][data_fields[j]]));
            }
        }
    });
    setTimeout(pollBingeBoard, 5000);
}
