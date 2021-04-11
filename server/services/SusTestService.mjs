import SusTest from "../db/models/SusTest.mjs";

class SusTestService 
{
    getAll(id)
    {
        return SusTest.findAll({
          attributes: ["user", "results", "testingSystem", "description"],
          where: { id },
        });
    }

    create(body) 
    {
        return SusTest.create({
            user: body.user,
            answers: body.answers,
            results: body.results,
            testingSystem: body.testingSystem,
            description: body.description
        });
    }
}

export default new SusTestService();