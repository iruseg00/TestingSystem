import PssuqTest from '../db/models/PssuqTest.mjs';

class PssuqTestService {
	getAll(id) {
		return PssuqTest.findAll({
			attributes: ['user', 'results', 'testingSystem', 'description'],
			where: { id },
		});
	}

	create(body) {
		return PssuqTest.create({
			user: body.user,
			answers: body.answers,
			results: body.results,
			testingSystem: body.testingSystem,
			description: body.description,
		});
	}
}

export default new PssuqTestService();
