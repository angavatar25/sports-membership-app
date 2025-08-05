import { ProfileMenu } from '../../dummies/ProfileMenu';

interface TNavigationTab {
  currentTab: string;
  handleActiveTab: (tab: string) => void;
}

const NavigationTab = (props: TNavigationTab) => {
  return (
    <div className="flex gap-8 p-4 rounded-lg">
      {ProfileMenu.map(({ id, menu, icon: Icon }) => (
        <button
          id={`btn-${id}`}
          onClick={() => props.handleActiveTab(menu)}
          className="flex items-center gap-2"
        >
          <Icon
            size={14}
            className={`${props.currentTab === menu ? 'text-red-primary' : 'text-gray-400'}`}
          />
          <span
            className={`font-medium capitalize ${props.currentTab === menu ? 'text-red-primary' : 'text-gray-400'}`}
          >
            {menu}
          </span>
        </button>
      ))}
    </div>
  );
}

export default NavigationTab