import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
};
