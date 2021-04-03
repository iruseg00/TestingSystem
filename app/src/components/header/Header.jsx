import React from 'react';
import style from './style.module.scss';
import barsImage from '../../assets/images/bars-solid_2.svg';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Menu from '../menu/Menu';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuIsOpen: false,
		};
	}

	onHambClick = () => {
		this.setState({ menuIsOpen: !this.state.menuIsOpen });
	};

	render() {
		return (
			<div className={style.main}>
				{this.state.menuIsOpen ? <Menu className={style.menu} /> : undefined}
				<div className={style.container}>
					<div className={style.left}>
						<div className={style.button}>
							<img
								src={barsImage}
								alt='{null}'
								className={style.buttonIcon}
								onClick={this.onHambClick}
							/>
						</div>
						<div className={style.headerName}>Тестирование</div>
					</div>
					<div className={style.profileIcon}>
						<Avatar size={65} icon={<UserOutlined />} />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
