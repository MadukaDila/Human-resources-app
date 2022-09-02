<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function groupByOwnersService(){


        $array = array(
            "insurance.txt" =>"Company A",
            "letter.docx" =>"Company A",
            "Contract.docx" =>"Company B"
        );


        $original_array=collect($array)
            ->groupBy(fn($value,$key)=>$value)
            ->map(fn($group)=>$group->values())
            ->all();


        return response()->json($original_array);

    }

    public function challenge_02(Request $request){
        $number=5;

        $number--;

        $array = array();

        for ($x = 0; $x < $number; $x++) {
            $array[] = $x;
        }
        $number++;

        for ($x = 0; $x < $number; $x++) {
            $newarray[]=rand($array[0],end($array));
        }

        $val=array_unique( array_diff_assoc( $newarray, array_unique( $newarray ) ) );
        $val = array_values($val);

        return response()->json(array('array'=>$newarray,'occur more than once in the given array'=>$val));

    }
}
