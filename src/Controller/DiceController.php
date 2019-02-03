<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DiceController extends AbstractController
{
    /**
     * @Route("/roll/{faces}", name="faces")
    */
    public function index($faces)
    {   
        // Get the integer after d to get the type of dice          
        $faces    = substr($faces, strpos($faces, "d") + 1);    
        
        // Validate Dice
        $validate = $this->validateDice($faces);
        

        if($validate){
            // Roll , good lucky ! 
            $roll = $this->roll($faces);
            
            return $this->render('dice/index.html.twig', [
                'result' => $roll,
                'dice' => "D$faces"
            ]);

        }else{
            // In case of errors redirect to error page
            return $this->render('error/index.html.twig', [
                'controller_name' => 'ErrorController',
            ]);
        }
    }

    // Validate if is a valid dice type
    public function validateDice($faces)
    {
        // Standart dice types 
        $diceTypes = [3,4,6,8,10,12,20,100];
        
        if(in_array($faces,$diceTypes)){
            return true;
        }else{
            return false;
        }
    }

    // Roll a dice and get the result randomly
    public function roll($faces)
    {
        $roll = mt_rand(1, $faces);

        return $roll;
    }

    /**
     * @Route("/roll", name="rollpage")
    */
    public function rollPage()
    {
        return $this->render('roll/index.html.twig');
    }
}