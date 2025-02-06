jQuery(document).ready(function(){

    const doc = jQuery(document);

    const stadios = ['bajopeso', 'normopeso', 'sobrepeso', 'obesidadI', 'obesidadII', 'obesidadIII', 'obesidadIV'];

    var weight;
    var height;
    var imc;
    var chartResult;

    doc.find('#imc-submit-btn').on('click', function(ev){
        ev.preventDefault();
        
        calcImc();
        setChart();

        var anchor = document.querySelector("div[id='imc-result']");
        anchor.scrollIntoView({ behavior: 'smooth'});
    });

    function calcImc(){

        chartResult = '';

        weight = document.getElementById('peso').value;
        height = document.getElementById('estatura').value / 100;
      
        imc = (weight / (Math.pow(height, 2))).toFixed(2);
    
        if(imc == 'NaN' || imc == 'Infinity' || imc == 0){
            document.getElementById('resultado').innerHTML = `Introduce los datos correctamente`;
        }else{
            document.getElementById('resultado').innerHTML = `Tu índice de masa corporal es: <h3>${imc}</h3> `;
        }

    }

    function setChart(){

        stadios.forEach(element => {
            document.getElementById(element).classList.remove('grow');
        });

        if(imc < 18.5){
            chartResult = 'Bajopeso';
            document.getElementById('bajopeso').classList.add('grow');
        }else if(imc >= 18.5 && imc< 25){
            chartResult = 'Normopeso';
            document.getElementById('normopeso').classList.add('grow');
        }else if(imc >= 25 && imc < 30){
            chartResult = 'Sobrepeso';
            document.getElementById('sobrepeso').classList.add('grow');
        }else if(imc >= 30 && imc < 35){
            chartResult = 'Obesidad tipo I';
            document.getElementById('obesidadI').classList.add('grow');
        }else if(imc >= 35 && imc < 40){
            chartResult = 'Obesidad tipo II';
            document.getElementById('obesidadII').classList.add('grow');
        }else if(imc >= 40 && imc < 50){
            chartResult = 'Obesidad tipo III';
            document.getElementById('obesidadIII').classList.add('grow');
        }else if(imc >= 50){
            chartResult = 'Obesidad tipo IV';
            document.getElementById('obesidadIV').classList.add('grow');
        }

        document.getElementById('resultadoStr').innerHTML = `<h3>${chartResult}</h3>` ;
        
    }
});