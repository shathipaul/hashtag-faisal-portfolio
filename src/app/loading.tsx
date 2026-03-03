const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
