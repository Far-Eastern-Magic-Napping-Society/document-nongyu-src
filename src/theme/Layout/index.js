import React from 'react';
import Layout from '@theme-original/Layout';
import Live2D from '../../components/Live2D';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <Live2D />
    </>
  );
}
