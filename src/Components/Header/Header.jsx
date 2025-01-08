
import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt=""
            src={profile} />
        </div>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;