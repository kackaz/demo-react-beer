import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BeerList from './BeerList'

let mockBeers, wrapper
Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  mockBeers = [
    {id: 1, name: 'Mock IPA'},
    {id: 2, name: 'Mock LAGER'},
  ];
  wrapper = Enzyme.shallow(
    <BeerList
      beers={mockBeers}
    />
  );
});

it('should render an <p> element for every beer in `props.beers`', () => {
  expect(wrapper.find('p').length).toEqual(mockBeers.length)
});

it('should display the beer name in each `<p>` element', () => {
  const firstElement = wrapper.find('p').first();
  expect(firstElement.contains(mockBeers[0].name)).toEqual(true);
});
