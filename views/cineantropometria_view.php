<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
<div class='imc-container'>
    <h1>Cineantropometría</h1>
    <p><?= nl2br(get_option('agvcalc_cineantroText')); ?></p>
    <br>
    <div class='agv-chart'>
        <canvas id='cineChart' width='400' heigth='400'></canvas>
    </div>
</div>
