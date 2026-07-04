const AppLayout = ({ children }) => {
  return (
    <div className="app-layout-wrapper">
      <div className="app-container">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
