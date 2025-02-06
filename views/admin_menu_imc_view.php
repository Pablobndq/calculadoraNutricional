<h2>Configuración de la calculadora IMC</h2>
<p>En este menú puedes configurar las opciones correspondientes a la calculadora de IMC</p>
<p>*Nota: para dar formato al texto, puedes usar HTML</p>
<hr><hr><hr>
<form method='POST'>
    <h3>Texto inicial</h3>
    <label for="texto">Introduce el texto a mostrar en la definicion:</label>
    <br><br>
    <textarea name="texto" id="texto" cols="100" rows="10"><?= get_option('agvcalc_imcText'); ?></textarea>
    <br><br>
    <input type="submit" value="Guardar">
</form>