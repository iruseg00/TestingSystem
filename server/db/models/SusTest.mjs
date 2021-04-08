import Sequelize from 'sequelize';
import sequelizeConnect from '../config/connect.mjs';
const { UUID, UUIDV4, TEXT, JSON } = Sequelize;

const SusTest = sequelizeConnect.define(
	'SusTest',
	{
		id: {
			type: UUID,
			primaryKey: true,
			defaultValue: UUIDV4,
		},
		user: {
			type: UUID,
			allowNull: false,
		},
		answers: {
			type: Sequelize.JSON,
			defaultValue: [],
			allowNull: false,
		},
		results: {
			type: Sequelize.JSON,
			allowNull: false,
		},
		testingSystem: {
			type: TEXT,
			allowNull: false,
		},
		description: {
			type: TEXT,
			allowNull: false,
		},
	},
	{
		timestamps: true,
	}
);

SusTest.sync({ force: false });

export default SusTest;
