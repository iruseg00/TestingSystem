import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Register from './views/register/Register';
import Main from './views/main/Main';
import Login from './views/login/Login';
import MainTests from './views/dashboard/Dashboard';
import PageWrapper from './containers/pageWrapper/PageWrapper';
import { logout } from './redux/actions/auth';
import { whoAmI } from './redux/actions/users';

class App extends React.Component {
	componentDidMount() {
		if (this.props.auth.accessToken)
			this.props.whoAmI().catch(() => {
				this.props.logout();
			});
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={(props) => (
						<PageWrapper
							{...props}
							title='Главная'
							component={Main}
							Auth
						/>
					)}
				/>
				<Route
					path='/login'
					render={(props) => (
						<PageWrapper
							{...props}
							title='Вход'
							component={Login}
							notAuth
						/>
					)}
				/>
				<Route
					path='/register'
					render={(props) => (
						<PageWrapper
							{...props}
							title='Регистрация'
							component={Register}
							notAuth
						/>
					)}
				/>
				<Route
					path='/dashboard'
					render={(props) => (
						<PageWrapper {...props} component={MainTests} />
					)}
				/>
				<Route
					path='*'
					exact
					render={(props) => (
						<PageWrapper {...props} title='Упс!' component={Login} />
					)}
				/>
			</Switch>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = {
	logout,
	whoAmI,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
