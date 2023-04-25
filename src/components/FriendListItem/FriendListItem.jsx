export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className="item">
      <span
        className={`status ${isOnlineCheck(isOnline)}`}
        style={{
          display: 'inline-block',
          width: 10,
          height: 10,
          backgroundColor: 'red',
          borderRadius: '50%',
        }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

function isOnlineCheck(triger) {
  return triger ? 'isOnline' : 'offLine';
}
