import Sequelize from 'sequelize';
import sequelizeConnect from '../config/connect.mjs';
const { UUID, UUIDV4, TEXT, JSON } = Sequelize;

const PssuqTest = sequelizeConnect.define(
	'PssuqTest',
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
			type: JSON,
			defaultValue: [],
			allowNull: false,
		},
		results: {
			type: JSON,
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

PssuqTest.sync({ force: false });

export default PssuqTest;
