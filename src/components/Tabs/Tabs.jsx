export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (tab.id === activeTabId) return;
                  onTabSelected(tab.id);
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!activeTabId
          ? tabs[0].content
          : tabs.map(tab => (activeTabId === tab.id ? tab.content : ''))}
      </div>
    </div>
  );
};
