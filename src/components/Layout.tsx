import React from 'react';
import './Layout.scss';

type LayoutP = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutP) {
  return (
    <div className="wrapper">
      <section className="z-10 min-h-screen min-w-screen flex flex-col">
        {children}
      </section>
      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export const withLayout = <P extends { [key: string]: any }>(
  E: (props: P) => JSX.Element
) => {
  return (props: P) => (
    <Layout>
      <E {...props} />
    </Layout>
  );
};
