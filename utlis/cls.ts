export const cls = (...classes: string[]) => {
	return classes.filter(Boolean).join(" ");
};
