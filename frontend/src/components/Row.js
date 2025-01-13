const Row = ({ user }) => {
  return (
    <div className="flex flex-row items-center justify-between p-3.5 text-2xl">
      {user.name.title} {user.name.first} {user.name.last}
      <div className="border h-9 mx-3"></div>
      {user.login.username}
      <div className="border h-9 mx-3"></div>
      <img src={user.picture.thumbnail} alt="Thumbnail" />
    </div>
  );
};
export default Row;
