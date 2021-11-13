module.exports = {
	mode: 'jit',
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				accent: "var(--color-accent)",
				neutral: "var(--color-neutral)",
				fancy: "var(--color-fancy)",
				success: "var(--color-success)",
				danger: "var(--color-danger)",
				"primary-light": "var(--color-primary-light)",
				"fancy-dark": "var(--color-fancy-dark)",
				"success-dark": "var(--color-success-dark)",
				"danger-dark": "var(--color-danger-dark)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
