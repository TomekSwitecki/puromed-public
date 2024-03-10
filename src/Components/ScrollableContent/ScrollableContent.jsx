import React from "react";

export const ScrollableContent = ({ children, scrollStart }) => {
    const defaultScrollStart = 3;
    const showScroll = React.Children.count(children) >= (scrollStart || defaultScrollStart);



    return (
        <div className={`scrollable-container${showScroll ? ' scrollable-container--card' : ''}`}>
            {showScroll ? (
                <div className="scrollable-content">{children}</div>
            ) : (
                children
            )}
        </div>
    );
};

export default ScrollableContent;
