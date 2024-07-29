const Loader = () => {
    return (
      <div
        className="inline-block h-8 w-8 animate-spinner-grow rounded-full bg-black align-[-0.125em] opacity-0 motion-reduce:animate-spinner-grow-slow"
        role="status"
      >
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  };
  
  export default Loader;
  