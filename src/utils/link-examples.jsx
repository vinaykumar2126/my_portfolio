// This file provides examples of common Link component patterns and fixes.
// Use this as a reference when fixing your components.

import Link from 'next/link';
import React from 'react';

// Common pattern #1: Missing href prop
export const Example1Incorrect = () => (
  <Link>Click me</Link>
);

export const Example1Correct = () => (
  <Link href="/destination">Click me</Link>
);

// Common pattern #2: Conditional href values
export const Example2Incorrect = ({ item }) => (
  <Link href={item?.url}>View Item</Link>
);

export const Example2Correct = ({ item }) => {
  // Option 1: Use a fallback URL
  return <Link href={item?.url || "#"}>View Item</Link>;
  
  // Option 2: Only render if URL exists
  // return item?.url ? <Link href={item.url}>View Item</Link> : <span>No URL</span>;
};

// Common pattern #3: Props without default values
export const Example3Incorrect = (props) => (
  <Link href={props.linkTo}>Go somewhere</Link>
);

export const Example3Correct = (props) => (
  <Link href={props.linkTo || "/"}>Go somewhere</Link>
);

// Common pattern #4: Mapping through items
export const Example4Incorrect = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <Link href={item.link}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

export const Example4Correct = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        {item.link ? (
          <Link href={item.link}>
            {item.name}
          </Link>
        ) : (
          <span>{item.name}</span>
        )}
      </li>
    ))}
  </ul>
);

// Common pattern #5: Delayed data loading
export const Example5Incorrect = ({ data }) => {
  // If data is still loading or undefined, href will be undefined
  return (
    <div>
      <Link href={data?.url}>View details</Link>
    </div>
  );
};

export const Example5Correct = ({ data, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      {data?.url ? (
        <Link href={data.url}>View details</Link>
      ) : (
        <span>No details available</span>
      )}
    </div>
  );
};
