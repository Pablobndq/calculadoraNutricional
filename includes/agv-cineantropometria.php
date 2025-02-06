<?php

class AGVCineantropometria extends AGVLauncher{

    public static function init(){

        add_shortcode('cineantropometria-calc', array('AGVCineantropometria', 'cineantropometria'));
    }

    public static function cineantropometria(){

        include(parent::getPluginPath() . '/views/cineantropometria_view.php');
    }

}

AGVCineantropometria::init();