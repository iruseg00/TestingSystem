import PssuqTest from '../db/models/PssuqTest.mjs';

class SusTestService {
	getAll(id) {
		return SusTest.findAll({
			attributes: ['results', 'testingSystem', 'description'],
			where: { user: id },
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
