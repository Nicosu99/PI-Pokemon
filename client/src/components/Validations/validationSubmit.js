export default function validationSubmit(input) {
	let errors = {};

	if (!input.name.trim()) {
		errors.name = 'El nombre es requerido';
	}

	if (!input.hp) {
		errors.hp = 'La vida es requerida';
	}

	if (!input.attack) {
		errors.attack = 'El ataque es requerido';
	}

	if (!input.defense) {
		errors.defense = 'La defensa es requerida';
	}

	if (!input.height) {
		errors.height = 'La altura es requerida';
	}

	if (!input.weight) {
		errors.weight = 'El peso es requerido';
	}

	if (!input.speed) {
		errors.speed = 'La velocidad es requerida';
	}

	if (!input.types.length) {
		errors.types = 'El tipo es requerido';
	}

	return errors;
}