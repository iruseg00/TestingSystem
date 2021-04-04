import MdtTest from "../db/models/MdtTest.mjs";

class MdtTestService 
{
    getAll()
    {
        return MdtTest.findAll({attributes: ['user', 'results', 'testingSystem', 'description']});
    }

    create(body) 
    {
        return MdtTest.create({
            user: body.user,
            answers: body.answers,
            results: body.results,
            testingSystem: body.testingSystem,
            description: body.description
        });
    }
}

export default new MdtTestService();