<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function all()
    {
        $questions = Question::withCount('answers')
            ->get();

        return $questions->toJson();
    }

    public function new(Request $request)
    {
        $validated = $request->validate([
            'description' => 'required'
        ]);

        $question = Question::create([
            'description' => $validated['description']
        ]);

        return response()->json('Question ' . $question->id . ' created');
    }

    public function show($id)
    {
        $question = Question::with(['answers'])
            ->find($id);

        return $question->toJson();
    }
}
