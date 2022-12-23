import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '..';

test('It should show the nav bar and a simple text', () => {
  const component = renderer.create(
    <Layout>
      <p> just a text</p>
    </Layout>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
