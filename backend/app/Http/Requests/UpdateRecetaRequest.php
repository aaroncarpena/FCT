<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRecetaRequest extends FormRequest
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
            'title'        => ['sometimes', 'string', 'max:255'],
            'slug'         => ['sometimes', 'string', 'unique:recipes,slug,' . $this->recipe->id],
            'excerpt'      => ['nullable', 'string'],
            'body'         => ['sometimes', 'string'],
            'prep_time'    => ['nullable', 'string', 'max:50'],
            'cook_time'    => ['nullable', 'string', 'max:50'],
            'servings'     => ['nullable', 'integer', 'min:1'],
            'difficulty'   => ['nullable', 'in:easy,medium,hard'],
            'ingredients'  => ['nullable', 'array'],
            'status'       => ['sometimes', 'in:draft,published'],
            'published_at' => ['nullable', 'date'],
        ];
    }
}
