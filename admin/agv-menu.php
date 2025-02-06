<?php

class AGVMenu extends AGVLauncher{

    public static function init(){

        $instance = new self();
        add_action('admin_menu', array($instance, 'adminMenu'));
    }

    public function adminMenu(){

        $instance = new self();
        add_menu_page('Calculadora Ágave', 'Calculadora', 'manage_options', 'calculadora',  array($instance, 'output_menu'));
        add_submenu_page('calculadora', 'Calculadora IMC', 'IMC', 'manage_options', 'calculadoraimc', array($instance, 'output_imc_menu'));
        add_submenu_page('calculadora', 'Calculadora Avanzada', 'Advanced', 'manage_options', 'calculadoraadvanced', array($instance, 'output_advanced_menu'));
        add_submenu_page('calculadora', 'Calculadora Cineantropometria', 'Cineantropometría', 'manage_options', 'calculadoracineantropometria', array($instance, 'output_cineantropometria_menu'));
    }

    public function output_menu(){

        include(parent::getPluginPath() . '/views/admin_menu_view.php');
    }

    public function output_imc_menu(){

        include(parent::getPluginPath() . '/views/admin_menu_imc_view.php');

        if(isset($_POST) && $_POST['texto']){

            $texto = $_POST['texto'];
            if(update_option('agvcalc_imcText', $texto)){
                echo('<script language="javascript">alert("Texto guardado");</script>');
            }else{
                echo('<script language="javascript">alert("No se ha podido guardar el texto");</script>');
            }
            echo '<script type="text/JavaScript"> location.reload(); </script>';
        }
    }

    public function output_advanced_menu(){

        include(parent::getPluginPath() . '/views/admin_menu_advanced_view.php');

        if(isset($_POST) && $_POST['texto']){

            $texto = $_POST['texto'];
            if(update_option('agvcalc_advancedText', $texto)){
                echo('<script language="javascript">alert("Texto guardado");</script>');
            }else{
                echo('<script language="javascript">alert("No se ha podido guardar el texto");</script>');
            }
            echo '<script type="text/JavaScript"> location.reload(); </script>';
        }
    }

    public function output_cineantropometria_menu(){

        include(parent::getPluginPath() . '/views/admin_menu_cineantropometria_view.php');

        if(isset($_POST) && $_POST['texto']){

            $texto = $_POST['texto'];
            if(update_option('agvcalc_cineantroText', $texto)){
                echo('<script language="javascript">alert("Texto guardado");</script>');
            }else{
                echo('<script language="javascript">alert("No se ha podido guardar el texto");</script>');
            }
            echo '<script type="text/JavaScript"> location.reload(); </script>';
        }
    }

    // public function output_cineantropometria_menu(){

    //     include(parent::getPluginPath() . '/views/admin_menu_cineantropometria_view.php');
    // }

}

AGVMenu::init();