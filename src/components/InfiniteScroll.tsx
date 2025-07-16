type Props = {
  orientation: string;
  background: string;
  textColor: string;
  border: string;
  position: string;
};

const InfiniteScroll = ({
  orientation,
  background,
  textColor,
  border,
  position,
}: Props) => {
  return (
    <div
      className={`wrapper ${background} ${orientation} ${border} ${position}`}
    >
      <div className="scrolling-text">
        {Array(5)
          .fill("$SKIPA")
          .map((text, index) => (
            <div key={index} className={`item ${textColor}`}>
              {text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
