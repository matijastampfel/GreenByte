const initialState = true;

export default function panelsAreOn(state = initialState, action) {
	return state || action === 'on'
}