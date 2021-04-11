import SusTest from '../db/models/SusTest.mjs';

<<<<<<< HEAD
class SusTestService {
	getAll() {
		return SusTest.findAll({
			attributes: ['user', 'results', 'testingSystem', 'description'],
		});
	}
=======
class SusTestService 
{
    getAll(id)
    {
        return SusTest.findAll({
          attributes: ["user", "results", "testingSystem", "description"],
          where: { id },
        });
    }
>>>>>>> 6b6a1c72e7e1716ce35b9d10eda1af70b4537487

	create(body) {
		return SusTest.create({
			user: body.user,
			answers: body.answers,
			results: body.results,
			testingSystem: body.testingSystem,
			description: body.description,
		});
	}
}

export default new SusTestService();
