$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        data.forEach(function(spot) {
            const row =
                `<tr>
                    <td>${spot.name}</td>
                    <td>${spot.description}</td>
                    <td>
                        <a href="https://www.google.com/maps?q=${spot.location[0]},${spot.location[1]}" target="_blank">
                        Open in Google Maps
                        </a>
                    </td>
                </tr>
                `;
            $('#top-spots').append(row);
        });
    });
});