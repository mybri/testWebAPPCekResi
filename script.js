
$('#search-button').on('click', function() {
    $.ajax({
        url: 'https://api.binderbyte.com/v1/track?api_key=a493abe1021d175a3b001d83ad504bc82cd477d728f837e2db242c1736a84e7b',
           type: 'get',
           dataType: 'json',
           headers: {
             'Access-Control-Allow-Origin': 'http://The web site allowed to access'
           },
           data:{
            'courier':$('#courier_input').val(),
            'awb':$('#awb_input').val()
           },

           success:function (result) {
            console.log(result)
            if (result.status === 200) {
                let resi = result.data;
                console.log(resi);
                $('#resi-status').html(`
                <div class="col-md-8">
                <div>`+"STATUS PENGIRIMAN"+ `</div>
                <table class="table ">
                <tbody>
                <tr>
                <th scope="row">`+ "Status" + `</th>
                <td>` + resi.summary.status + `</td>
                </tr>
                <th scope="row">`+ "Layanan" + `</th>
                <td>` + resi.summary.courier + `</td>
                </tr>
                <th scope="row">`+ "Pengirim" + `</th>
                <td>` + resi.detail.shipper + `</td>
                </tr>
                <th scope="row">`+ "Asal" + `</th>
                <td>` + resi.detail.origin + `</td>
                </tr>
                <th scope="row">`+ "Penerima" + `</th>
                <td>` + resi.detail.receiver + `</td>
                </tr>
                <th scope="row">`+ "Tanggal Kirim" + `</th>
                <td>` + resi.summary.date + `</td>
                </tr>
                <th scope="row">`+ "Tujuan" + `</th>
                <td>` + resi.summary.destination + `</td>
                </tr>
              
                </tbody>
                </table>
                </div>
        
                `)
            } else {
                $('#resi-result').html(`
                <div class="col">
                <h1 class="text-center">` + result.message `</h1>
                </div>`)
              }
           }

    });
});