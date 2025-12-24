import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const {
    closeWindow,
    minimizeWindow,
    toggleMaximize,
  } = useWindowStore();

  return (
    <div id="window-controls" className="flex gap-2">
      {/* Close (Red) */}
      <div
        className="close"
        onClick={() => closeWindow(target)}
      />

      {/* Minimize (Yellow) */}
      <div
        className="minimize"
        onClick={() => minimizeWindow(target)}
      />

      {/* Maximize (Green) */}
      <div
        className="maximize"
        onClick={() => toggleMaximize(target)}
      />
    </div>
  );
};

export default WindowControls;