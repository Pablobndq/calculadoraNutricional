jQuery(document).ready(function(){

    const doc = jQuery(document);
    var chart = document.getElementById('cineChart');

    // doc.find('#imc-submit-btn').on('click', function(ev){
    //     ev.preventDefault();

    //     var anchor = document.querySelector("div[id='imc-result']");
    //     anchor.scrollIntoView({ behavior: 'smooth'});
    // });

    const data = {
    labels: [
        'Mesomorfo',
        'Ectomorfo',
        'Endomorfo'
    ],
    datasets: [
    {
        label: 'Forma del cuerpo',
        data: [90, 100, 70],
        fill: true,
        backgroundColor: 'rgba(53, 114, 56, 0.2)',
        borderColor: '#357238',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, 
    ]
    };

    var cineChart =new Chart(chart, {
        type: 'radar',
        data: data,
        options: {
        elements: {
            line: {
            borderWidth: 3
            }
        }
        },
    });  
});