jQuery(document).ready(function(){

    const doc = jQuery(document);
    const sexToggle = document.getElementById('sexo');

    const stadios = ['bajopeso', 'normopeso', 'sobrepeso', 'obesidadI', 'obesidadII', 'obesidadIII', 'obesidadIV'];

    var weight;
    var height;
    var sex;
    var birthDate;
    var age;
    var faf;
    var mlg;

    var imc;
    var chartResult;
    var harrisResult;
    var mifflinResult;
    var faoResult;
    var eerResult;
    var cunninghamResult;
    var mcaerdleResult;

    sexToggle.addEventListener('change', function(){

        sex = document.getElementById('sexo').value;
        
        if(sex == 'fem'){
            document.getElementById('emb').classList.remove('hidden');
            document.getElementById('tiempoGest').classList.remove('hidden');
        }else{
            document.getElementById('emb').classList.add('hidden');
            document.getElementById('tiempoGest').classList.add('hidden');
        }
    });

    doc.find('#advanced-submit-btn').on('click', function(ev){
        ev.preventDefault();

        weight = document.getElementById('peso').value;
        height = document.getElementById('estatura').value;
        sex = document.getElementById('sexo').value;
        age = getAge();
        faf = document.getElementById('actividad').value;
        mlg = document.getElementById('mlg').value;
        
        calcImc();
        setChart();
        harrisBenedict1984();
        mifflin();
        fao();
        eer();
        cunningham();
        mcaerdle();

        var anchor = document.querySelector("div[id='imc-result']");
        anchor.scrollIntoView({ behavior: 'smooth'});

    });

    /**
     * ----------Calc functions
     */

    function calcImc(){

        chartResult = '';

        heightInMetric = height / 100;
        
        imc = (weight / (Math.pow(heightInMetric, 2))).toFixed(2);

        if(isNaN(imc) || !isFinite(imc) || imc == 0){
            document.getElementById('resultado').innerHTML = `Introduce los datos correctamente`;
        }else{
            document.getElementById('resultado').innerHTML = `Tu índice de masa corporal es: <h3>${imc}</h3> `;
        }

    }

    function harrisBenedict1984(){

        let tmbHarris;
        let etaHarris;
        if(sex === 'masc'){
            tmbHarris = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age); 
        }else if(sex === 'fem'){
            tmbHarris = 447.5930 + (9.2470 * weight) + (3.0980 * height) - (4.33 * age);
        }
        etaHarris = tmbHarris * 1.1;
        tmbHarris = tmbHarris.toFixed(2);
        harrisResult = Math.round(faf * etaHarris);

        // Pintar datos

        if(isNaN(weight) || !isFinite(weight) || weight <= 0 || isNaN(height) || !isFinite(height) || height <= 0  || isNaN(harrisResult) || !isFinite(harrisResult) || harrisResult <= 0){
            document.getElementById("harris").innerHTML = `No se han introducido los datos para realizar este cálculo`;
        }else{
            document.getElementById('harris').innerHTML = 
            `
                <h5>TMB: ${Math.round(tmbHarris)} </h5>
                <h5>GET: ${Math.round(harrisResult)} Kcal </h5>
            `;
        }

        document.getElementById('harris').classList.add('show');

    }

    function mifflin(){
      
        let tmbMifflin;
        let etaMifflin;
        if(sex === 'masc'){
            tmbMifflin = (10 * weight) + (6.25 * height) - (5 * age) + 5; 
        }else if(sex === 'fem'){
            tmbMifflin = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
        etaMifflin = tmbMifflin * 1.1;
        mifflinResult = Math.round(faf * etaMifflin);

        // Pintar datos

        if(isNaN(weight) || !isFinite(weight) || weight <= 0 || isNaN(height) || !isFinite(height) || height <= 0 || isNaN(mifflinResult) || !isFinite(mifflinResult) || mifflinResult <= 0 ){
            document.getElementById("mifflin").innerHTML = `No se han introducido los datos para realizar este cálculo`;
        }else{
            document.getElementById('mifflin').innerHTML = 
            `
                <h5>TMB: ${Math.round(tmbMifflin)} </h5>
                <h5>GET: ${Math.round(mifflinResult)} Kcal </h5>
            `;
        }

        document.getElementById('mifflin').classList.add('show');
        
    }

    function fao(){

        let faoResult;

        if(sex === 'masc'){

           switch(true){

                case (age <= 3):
                    faoResult = (59.512 * weight) - 30.5;
                    break;
                case (age > 3 && age <= 10):
                    faoResult = (22.706 * weight) + 504.3;
                    break;
                case (age > 10 && age <= 18):
                    faoResult = (17.686 * weight) + 658.2;
                    break;
                case (age > 18 && age <= 30):
                    faoResult = (15.057 * weight) + 692.2;
                    break;
                case (age > 31 && age <= 60):
                    faoResult = (11.472 * weight) + 873.1;
                    break;
                case (age > 60):
                    faoResult = (11.711 * weight) + 587.7;
                    break;
           } 

        }else if(sex === 'fem'){

            switch(true){

                case (age <= 3):
                    faoResult = (58.317 * weight) - 31.1;
                    break;
                case (age > 3 && age <= 10):
                    faoResult = (20.315 * weight) + 485.9;
                    break;
                case (age > 10 && age <= 18):
                    faoResult = (13.384 * weight) + 692.6;
                    break;
                case (age > 18 && age <= 30):
                    faoResult = (14.818 * weight) + 486.6;
                    break;
                case (age > 31 && age <= 60):
                    faoResult = (8.126 * weight) + 845.6;
                    break;
                case (age > 60):
                    faoResult = (9.082 * weight) + 658.5;
                    break;
               } 
        }

        // Obtención GET

        etaFao = faoResult * 1.1;
        
        faoResult = faoResult;
        getResult = etaFao * faf;
        

        // Pintar datos

        if(isNaN(weight) || !isFinite(weight) || weight <= 0 || isNaN(faoResult) || !isFinite(faoResult) || faoResult <= 0){
            document.getElementById("fao").innerHTML = `No se han introducido los datos para realizar este cálculo`;
        }else{
            document.getElementById('fao').innerHTML = 
            `
                <h5>TMB: ${Math.round(faoResult)} </h5>
                <h5>GET: ${Math.round(getResult)} Kcal </h5>
            `;
        }

        document.getElementById('fao').classList.add('show');
    }

    function eer(){

        let eerResult = 0;

        let eerFaf = getEerFaf();
        
        heightInMetric = height / 100;



        if(age >= 3 && age <= 18){

            if(sex === 'masc'){

                if(imc <= 24.99){

                    eerResult = 88.5 - (61.9 * age) + eerFaf * (26.7 * weight + 903 * heightInMetric) + 25;

                }else if(imc >24.99){

                    eerResult = 114 - (50.9 * age) + eerFaf * (19.5 * weight + 1161.4 * heightInMetric);
    
                }

            }else if(sex === 'fem'){

                if(imc <= 24.99){

                    eerResult = 135.3 - (30.8 * age) + eerFaf * (10 * weight + 934 * heightInMetric) + 25;

                }else if(imc >24.99){

                    eerResult = 389 - (41.2 * age) + eerFaf * (15 * weight + 701.6 * heightInMetric);
    
                }

            }
            
        }else if(age > 18){

            if(sex === 'masc'){

                if(imc <= 24.99){

                    eerResult = 662 - (9.53 * age) + eerFaf * (15.91 * weight + 539.6 * heightInMetric);

                }else if(imc >24.99){

                    eerResult = 1086 - (10.1 * age) + eerFaf * (13.7 * weight + 416 * heightInMetric);
    
                }

            }else if(sex === 'fem'){

                if(imc <= 24.99){

                    eerResult = 354 - (6.91 * age) + eerFaf * (9.36 * weight + 726 * heightInMetric);

                }else if(imc >24.99){

                    eerResult = 448 - (7.95 * age) + eerFaf * (11.4 * weight + 619 * heightInMetric);
    
                }

            }
        }

        let eerFinalResult = eerResult;

        // Pintar datos

        if(isNaN(eerResult) || !isFinite(eerResult) || eerResult == 0){
            document.getElementById("eer").innerHTML = `No se han introducido los datos para realizar este cálculo`;
        }else{
            document.getElementById('eer').innerHTML = 
            `
                <h5>GET: ${Math.round(eerFinalResult)} Kcal </h5>
            `;
        }

        document.getElementById('eer').classList.add('show');
        
    }

    function cunningham(){

        cunninghamR = 500 + 22 * (weight - (weight * (mlg / 100)));
        cunninghamResult = cunninghamR * faf * 1.1;

        if(isNaN(cunninghamResult) || !isFinite(cunninghamResult) || mlg == 0){
            document.getElementById("cunningham").innerHTML = `No se han introducido los datos para realizar este cálculo`;
        }else{
            document.getElementById('cunningham').innerHTML = 
            `
                <h5>TMB: ${Math.round(cunninghamR)} Kcal </h5>
                <h5>GET: ${Math.round(cunninghamResult)} Kcal </h5>
            `;
        }

        document.getElementById('cunningham').classList.add('show');

    }


    function mcaerdle(){

        tmbMcaerdle = 370 + (21.6 * (weight - (weight * (mlg / 100))));
        mcaerdleResult = tmbMcaerdle * faf * 1.1;

        if(isNaN(mcaerdleResult) || !isFinite(mcaerdleResult) || mlg == 0){
            document.getElementById("katch").innerHTML = `No se han introducido los datos para realizar este cálculo`;
        }else{
            document.getElementById('katch').innerHTML = 
            `
                <h5>TMB: ${Math.round(tmbMcaerdle)} Kcal </h5>
                <h5>GET: ${Math.round(mcaerdleResult)} Kcal </h5>
            `;
        }

        document.getElementById('katch').classList.add('show');


    }

    /**
     * -----------------Other Functions-------------------------------------------------------------------------
     */

    function getAge(){
        birthDate = new Date(document.getElementById('fecha').value);
        currentDate = new Date();
        ms = new Date(currentDate - birthDate);
        ageNoFormat = (ms / (1000*60*60*24*365));
        age = Math.floor(ageNoFormat);
        return age;
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

        document.getElementById('resultadoStr').innerHTML = `<h4>${chartResult}</h4>` ;
        
    }


    function getEerFaf(){
    
        errFafLocal = 0;
        
        if(faf >=1 && faf < 1.4){
            errFafLocal = 1;
        }else if(faf >=1.4 && faf < 1.6){
            if(sex == 'masc'){
                if(age >= 3 && age <= 18){
                    errFafLocal = 1.13;
                }else if(age > 18){
                    errFafLocal = 1.11;
                }
            }else if(sex == 'fem'){
                if(age >= 3 && age <= 18){
                    errFafLocal = 1.16;
                }else if(age > 18){
                    errFafLocal = 1.12;
                }
            }
        }else if(faf >=1.6 && faf < 1.9){
            if(sex == 'masc'){
                if(age >= 3 && age <= 18){
                    errFafLocal = 1.26;
                }else if(age > 18){
                    errFafLocal = 1.25;
                }
            }else if(sex == 'fem'){
                if(age >= 3 && age <= 18){
                    errFafLocal = 1.31;
                }else if(age > 18){
                    errFafLocal = 1.27;
                }
            }
        }else if(faf >=1.6 && faf < 1.9){
            if(sex == 'masc'){
                if(age >= 3 && age <= 18){
                    errFafLocal = 1.42;
                }else if(age > 18){
                    errFafLocal = 1.48;
                }
            }else if(sex == 'fem'){
                if(age >= 3 && age <= 18){
                    errFafLocal = 1.56;
                }else if(age > 18){
                    errFafLocal = 1.45;
                }
            }
        }
        
        return errFafLocal;
    }

    doc.find('#adv-print-btn').on('click', function(ev){
        ev.preventDefault();

        let data = document.getElementById('fecha').value;
        let results = document.getElementById('imc-result').innerHTML;

        w = window.open();
        w.document.write(data);
        w.document.write(results);
        w.document.close(); 
        w.focus(); 
		w.print();
		w.close();
        return true;

    });
});