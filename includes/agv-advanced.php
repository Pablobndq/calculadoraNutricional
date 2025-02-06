<?php

class AGVAdvanced extends AGVLauncher{

    public static function init(){

        add_shortcode('advanced-calc', array('AGVAdvanced', 'advanced'));
    }

    public static function advanced(){

        include(parent::getPluginPath() . '/views/advanced_view.php');
    }

}

AGVAdvanced::init();