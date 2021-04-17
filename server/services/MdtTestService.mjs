import MdtTest from "../db/models/MdtTest.mjs";

class MdtTestService {
  getAll(id) {
    return MdtTest.findAll({
      attributes: ["results", "testingSystem", "description"],
      where: { user: id },
    });
  }

  create(body) {
    return MdtTest.create({
      user: body.user,
      answers: body.answers,
      results: body.results,
      testingSystem: body.testingSystem,
      description: body.description,
    });
  }
}

export default new MdtTestService();
