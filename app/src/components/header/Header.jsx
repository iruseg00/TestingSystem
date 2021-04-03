import React from 'react';
import style from './style.module.scss';
import barsImage from '../../assets/images/bars-solid_2.svg';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import PC from './../../assets/images/pc.svg';

const Header = (props) => {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className={style.container}>
			<Drawer
				className={style.menu}
				placement='left'
				width='500'
				closable={false}
				onClose={onClose}
				visible={visible}
			>
				<div className={style.links_container}>
					<Link to='/dashboard'>
						<div className={style.side_bar_item}>Выбор теста</div>
					</Link>

					<Link to='/dashboard/profile'>
						<div className={style.side_bar_item}>Личный кабинет</div>
					</Link>

					<Link to='/dashboard/passed_tests'>
						<div className={style.side_bar_item}>Пройденные тесты</div>
					</Link>
					<div className={style.container_to_PC}>
						<img src={PC} alt='PC' />
					</div>
					<Link to='/dashboard/login'>
						<div className={style.side_bar_item}>Выйти из аккаунта</div>
					</Link>
				</div>
			</Drawer>
			<div className={style.left_items}>
				<div className={style.bar_img_container}>
					<img onClick={showDrawer} className={style.barImg} src={barsImage} alt='barsImage' />
				</div>
				<div className={style.title}>Тестирование</div>
			</div>
			<div className={style.right_items}>
				<div className={style.avatar_container}>
					<Avatar size={64} icon={<UserOutlined />} />
				</div>
			</div>
		</div>
	);
};

export default Header;
