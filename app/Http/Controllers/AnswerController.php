<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function new(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required'
        ]);

        $answer = Answer::create([
            'description' => $validated['description'],
            'question_id' => $request->question_id,
        ]);

        return response()->json('Answer created for Question ' . $request->question_id);
    }
}
