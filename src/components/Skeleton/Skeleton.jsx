import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={1.5}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#e8e8e8"
    foregroundColor="#f2f2f2"
    {...props}>
    <circle cx="140" cy="120" r="120" />
    <rect x="6" y="262" rx="10" ry="10" width="266" height="20" />
    <rect x="4" y="310" rx="15" ry="15" width="266" height="84" />
    <rect x="11" y="424" rx="15" ry="15" width="95" height="30" />
    <rect x="123" y="417" rx="21" ry="21" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
