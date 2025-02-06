<div class='imc-container'>
    <h1>Calculadora IMC</h1>
    <p><?= nl2br(get_option('agvcalc_imcText')); ?></p>
    <br>
    <div class='calc'>
        <form class='imc-form' id='imc-form'>
            <div class='imc-form-cont'>
                <div class='field'>
                    <label for="peso">Peso (kg)</label>
                    <input type="number" name="peso" id="peso">
                </div>
                <div class='field'>
                    <label for="estatura">Estatura (cm)</label>
                    <input type="number" name="estatura" id="estatura">
                </div>
            </div>
            <br>
            <input type="submit" value="Calcular" class='agv-btn-submit' id='imc-submit-btn'>
        </form>
        <div class='imc-result' id='imc-result'>
            <div id='resultado' class='resultado'></div>
            <div class='imc-chart'>
                <div class='chart-stadio bajopeso' id='bajopeso'>Menos de 18'5</div>
                <div class='chart-stadio normopeso' id='normopeso'>18'5 - 24'9</div>
                <div class='chart-stadio sobrepeso' id='sobrepeso'>25 - 29'9</div>
                <div class='chart-stadio obesidadI' id='obesidadI'>30 - 34'9</div>
                <div class='chart-stadio obesidadII' id='obesidadII'>35 - 39'9</div>
                <div class='chart-stadio obesidadIII' id='obesidadIII'>40 - 49'9</div>
                <div class='chart-stadio obesidadIV' id='obesidadIV'>Más de 50</div>
            </div>
            <div id='resultadoStr' class='resultadoStr'></div>
        </div>
    </div>
</div>
