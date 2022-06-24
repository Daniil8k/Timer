function Switch({ options, onChange, value }) {
	return (
		<div className="select-wrapper">
			<select onChange={onChange} value={value}>
				{options.map((option) => (
					<option key={option.label} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<svg
				className="arrow"
				xmlns="http://www.w3.org/2000/svg"
				height="20px"
				width="20px"
				viewBox="0 0 24 24"
				fill="#000000"
			>
				<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
			</svg>
		</div>
	);
}

export default Switch;
