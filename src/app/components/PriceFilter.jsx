'use client';

export default function PriceFilter({ value, onChange }) {
    return (
        <input 
            type="number" 
            placeholder="Max Price"
            value={value}
            onChange={(e) => {
                const val = e.target.value;
                onChange(val === "" ? 0 : Number(val));
            }}
        />
    )
}