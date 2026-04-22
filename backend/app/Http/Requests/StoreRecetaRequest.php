<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRecetaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'        => ['required', 'string', 'max:255'],
            'slug'         => ['required', 'string', 'unique:recipes,slug'],
            'excerpt'      => ['nullable', 'string'],
            'body'         => ['required', 'string'],
            'prep_time'    => ['nullable', 'string', 'max:50'],
            'cook_time'    => ['nullable', 'string', 'max:50'],
            'servings'     => ['nullable', 'integer', 'min:1'],
            'difficulty'   => ['nullable', 'in:easy,medium,hard'],
            'ingredients'  => ['nullable', 'array'],
            'status'       => ['in:draft,published'],
            'published_at' => ['nullable', 'date'],
        ];
    }
}
