import classNames from "classnames";

function Skeleton({ times, className }) {
  //   const boxes = [];
  //   for (let i = 0; i < times; i++) {
  //     boxes.push(<div key={i} />);
  //   }

  const outerClassnames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassName = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "via-white",
    "to-gray-200"
  );
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassnames}>
          <div className={innerClassName} />
        </div>
      );
    });
  return boxes;
}

export default Skeleton;
