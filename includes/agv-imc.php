<?php

class AGVImc extends AGVLauncher{

    public static function init(){

        add_shortcode('imc-calc', array('AGVImc', 'imc'));  
    }

    public static function imc(){

        include(parent::getPluginPath() . '/views/imc_view.php');
    }

}

AGVImc::init();
