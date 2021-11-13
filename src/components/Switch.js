function Switch({ id, value, setValue }) {
	return (
		<div className="switch">
			<input
				className="switch__input"
				type="checkbox"
				id={id}
				checked={value}
				onChange={($event) => setValue($event.target.checked)}
			/>
			<label className="switch__fake-label shadow-md" htmlFor={id}>Toggle</label>
		</div>
	);
}

export default Switch;
