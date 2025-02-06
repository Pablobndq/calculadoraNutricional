<?php

class AGVMain extends AGVLauncher{

    public static function init(){

        add_action('wp_enqueue_scripts', ['AGVMain', 'addCustomStyles']);
        add_action('wp_enqueue_scripts', ['AGVMain', 'addCustomScripts']);

    }

    public static function addCustomStyles(){
        wp_enqueue_style('agv-main-css', parent::getAssetsUrl() . '/css/main.css');
    }

    public static function addCustomScripts(){
        wp_enqueue_script('agv-main-js', parent::getAssetsUrl() . '/js/main.js', array('jquery'));
        wp_enqueue_script('agv-imc-js', parent::getAssetsUrl() . '/js/agv-imc-script.js', array('jquery'));
        wp_enqueue_script('agv-advanced-js', parent::getAssetsUrl() . '/js/agv-advanced-script.js', array('jquery'));
        wp_enqueue_script('agv-cineantropometria-js', parent::getAssetsUrl() . '/js/agv-cineantropometria-script.js', array('jquery'));
    }
}

AGVMain::init();