export default function RadioGroup({ items }) {
	return (
		<div class="form_radio_group">
			{items.map((item) => (
				<div class="form_radio_group-item">
					<input
						id={item.label}
						type="radio"
						name="radio"
						value={item.value}
						checked={item.checked}
					/>
					<label for="radio-1">{item.label}</label>
				</div>
			))}
		</div>
	);
}
