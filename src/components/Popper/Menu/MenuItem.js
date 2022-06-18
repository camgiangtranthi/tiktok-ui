import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

export default function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}
