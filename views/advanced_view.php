<div class='imc-container'>
    <h1>Calculadora Avanzada</h1>
    <p><?= nl2br(get_option('agvcalc_advancedText')); ?></p>    
    <br>
    <div class='calc' id='agv-calc-advanced'>
        <form class='imc-form' id='imc-form'>
            <div class='imc-form-cont' id='form-data'>
                <div class='field'>
                    <label for="sexo">Sexo</label>
                    <select name="sexo" id="sexo">
                        <option value="masc">Masculino</option>
                        <option value="fem">Femenino</option>
                    </select>
                </div>
                <div class='field'>
                    <label for="fecha">Fecha de nacimiento</label>
                    <input type="date" name="fecha" id="fecha">
                </div>
                <div class='field'>
                    <label for="peso">Peso (kg)</label>
                    <input type="number" name="peso" id="peso">
                </div>
                <div class='field'>
                    <label for="estatura">Estatura (cm)</label>
                    <input type="number" name="estatura" id="estatura">
                </div>
                <div class='field'>
                    <label for="actividad">Actividad física</label>
                    <select name="actividad" id="actividad">
                        <option value="1.2">1.2 - Muy ligera</option>
                        <option value="1.3">1.3 - Ligera</option>
                        <option value="1.5">1.5 - Moderada</option>
                        <option value="1.7">1.7 - Activa</option>
                        <option value="1.9">1.9 - Muy activa</option>
                    </select>
                </div>
                <div class='field'>
                    <label for="mlg">Porcentaje de grasa (%)</label>
                    <input type="number" name="mlg" id="mlg">
                </div>
                <div class='field hidden' id='emb'>
                    <label for="estado">Gestación / Lactancia</label>
                    <select name="estado" id="estado">
                        <option value="ninguno">Ninguno</option>
                        <option value="embarazo">Embarazo</option>
                        <option value="lactancia">Lactancia</option>
                    </select>
                </div>
                <div class='field hidden' id='tiempoGest'>
                    <label for="gestacion">Tiempo de gestación</label>
                    <select name="gestacion" id="gestacion">
                        <option value="primeramitad">Primera mitad</option>
                        <option value="segundamitad">Segunda mitad</option>
                    </select>
                </div>
            </div>
            <br>
            <input type="submit" value="Calcular" class='agv-btn-submit' id='advanced-submit-btn'>
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
        <h5 style='text-align: center;'>Cálculo de Tasa de metabolismo basal (TMB) y Consumo calórico recomendado (GET)</h5>
        <div class="resultAdv">
            <div class="resultCard bg-c-blue">
                <div class="result-title">
                    <h4>Harris-Benedict</h4>
                    <span class="tooltip-text">
                        <p>La ecuación de Harris-Benedict es una ecuación empírica para estimar el metabolismo basal de una persona en función de su peso corporal, estatura y edad, y es utilizado en conjunto con factores de actividad física, para calcular la recomendación de consumo diario de calorías para un individuo. La ecuación supone una composición corporal normal, con una relación media entre la masa muscular y la masa grasa, por lo que puede ser inexacta para las personas que son muy musculosas (la fórmula subestima las necesidades reales) o para las personas con sobrepeso (la ecuación sobreestima las necesidades reales).</p>
                    </span>
                </div>
                <div class="resultData" id="harris" style="text-align: center;"></div>
            </div>
            <div class="resultCard bg-c-green">
                <div class="result-title">
                    <h4>Mifflin-St.Jeor</h4>
                    <span class="tooltip-text">
                        <p>Desarrollada en 1990 por los investigadores Mifflin y St Jeor, la ecuación Mifflin-St Jeor es una fórmula que estima la TMB en función del género, la edad, el peso y la altura. La ecuación Mifflin-St Jeor ha demostrado ser más precisa que otras fórmulas, como la ecuación Harris-Benedict, en una amplia variedad de poblaciones y situaciones.</p>
                    </span>
                </div>
                <div class="resultData" id="mifflin" style="text-align: center;"></div>
            </div>
            <div class="resultCard bg-c-yellow">
                <div class="result-title">
                    <h4>WHO/FAO/UNU</h4>
                    <span class="tooltip-text">
                        <p>Publicadas en 1985, por la Organización de las Naciones Unidas para la Alimentación y la Agricultura con la Organización Mundial de la salud (FAO/OMS), permiten estimar el gasto de energía en reposo a partir de sexo, edad y peso, para la realización de esta fórmula, se usaron muestras de distintas áreas geográficas y de diferentes etnias a partir de datos derivados de tres estudios diferentes, siendo la mayoría de datos obtenidos en población europea, reclutas militares o policíacos, con datos de 2 279 hombres y 247 mujeres, 45% de ellos descendientes de italianos, el rango de edad de los individuos estudiados comprende de 19 a 82 años.</p>
                        <p>Estas ecuaciones no toman en cuenta la talla al considerar que no contribuyen a la estimación del GER (Gasto energético en reposo) en individuos sanos, sin embargo se considera que esta variable podría reducir ligeramente errores de predicción.</p>
                    </span>
                </div>
                <div class="resultData" id="fao" style="text-align: center;"></div>
            </div>
            <div class="resultCard bg-c-pink">
                <div class="result-title">
                    <h4>EER</h4>
                    <span class="tooltip-text">
                        <p>Creada en 2005, esta fórmula también utiliza peso, altura, edad y sexo para sus cálculos. Puede utilizarse para niños y adultos. Esta fórmula, diferente de las otras, no mide la tasa metabólica basal del paciente, calcula directamente el gasto energético total, pues el factor actividad está embutido en la fórmula original.</p>
                    </span>
                </div>
                <div class="resultData" id="eer" style="text-align: center;"></div>
            </div>
            <div class="resultCard bg-c-purple">
                <div class="result-title">
                    <h4>Cunningham</h4>
                    <span class="tooltip-text">
                        <p>En 1980, Cunnigham reexaminó, mediante un estudio de 223 adultos sanos, los factores que influyen en la TMB, y llegó a la conclusión de que, aunque la edad, el sexo, el ejercicio físico y la composición corporal influyen, el factor más significativo es la masa libre de grasa (MLG).</p>
                        <p>La ecuación de Cunningham se considera más precisa que otras ecuaciones, ya que tiene en cuenta las diferencias individuales en la composición corporal. Además, es específica para una población determinada, en este caso se diseñó para su uso en adultos sanos normales.</p>
                        <p>Esta ecuación es útil cuando es necesario calcular la TMB en individuos adultos sanos y cuando se tiene acceso a los valores de MLG. No es necesario conocer la edad, la estatura ni el sexo.</p>
                    </span>
                </div>
                <div class="resultData" id="cunningham" style="text-align: center;"></div>
            </div>
            <div class="resultCard bg-c-red">
                <div class="result-title">
                    <h4>McAerdle-Katch</h4>
                    <span class="tooltip-text">
                        <p>Esta es otra de las fórmulas para calcular el metabolismo basal, pero con la diferencia de que esta fórmula no es estimativa, sino que es mucho más exacta. Para lograr la exactitud, esta fórmula se basa en el porcentaje de masa magra y grasa que tenemos en nuestro cuerpo.</p>
                    </span>
                </div>
                <div class="resultData" id="katch" style="text-align: center;"></div>
            </div>
        </div>
    </div>
    <br><br>
    <!-- <div style="display: flex; justify-content: center">
        <button id="adv-print-btn" onclick="document_calc_print()">Imprimir</button>
    </div> -->
    