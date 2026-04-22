<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateTallerRequest extends FormRequest
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
            'title'       => ['sometimes', 'string', 'max:255'],
            'slug'        => ['sometimes', 'string', 'unique:workshops,slug,' . $this->workshop->id],
            'description' => ['nullable', 'string'],
            'price'       => ['sometimes', 'numeric', 'min:0'],
            'starts_at'   => ['sometimes', 'date'],
            'ends_at'     => ['nullable', 'date', 'after:starts_at'],
            'seats_total' => ['sometimes', 'integer', 'min:0'],
            'location'    => ['nullable', 'string', 'max:255'],
            'status'      => ['sometimes', 'in:draft,published,full,cancelled'],
        ];
    }
}
