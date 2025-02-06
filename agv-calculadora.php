<?php
/**
 * Plugin Name: Calculadora Ágave
 * Plugin URI: 
 * Description: Calculadora dietética para la web de Herbolario Ágave
 * Version: 1.0
 * Author: Pablo Bueno
 * Author URI: 
 **/

defined('ABSPATH') or die("Bye bye");

class AGVLauncher{

    public static function getPluginPath(){
        return plugin_dir_path(__FILE__);
    }

    public static function getAssetsUrl()
    {
        return plugin_dir_url(__FILE__) . 'assets';
    }

    public static function includeFiles(){

        $pluginPath = static::getPluginPath();
        include_once($pluginPath . '/admin/agv-menu.php');
        include_once($pluginPath . '/includes/agv-main.php');
        include_once($pluginPath . '/includes/agv-imc.php');
        include_once($pluginPath . '/includes/agv-advanced.php');
        include_once($pluginPath . '/includes/agv-cineantropometria.php');
        
    }

    public static function init(){
        static::includeFiles();
    }
}

AGVLauncher::init();