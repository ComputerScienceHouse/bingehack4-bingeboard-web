data_fields = []

$(function() {
    $('#bingeboard').find('thead').find('tr').children('td').each(function (i, element) {
        data_fields.push($(element).data('field'));
    });
    document.querySelector('#allGames').onchange = getBingeData;
    document.querySelector('#numGames').onchange = getBingeData;
    pollBingeBoard();
});

function pollBingeBoard() {
    getBingeData();
    setTimeout(pollBingeBoard, 5000);
}

function getBingeData() {
    var uri = 'https://binge.csh.rit.edu/api/get/';
    uri += document.querySelector('#numGames').value;
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
}
