'use client';

export default function PriceFilter({ value, onChange }) {
    return (
        <input 
            type="number" 
            placeholder="Max Price"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}