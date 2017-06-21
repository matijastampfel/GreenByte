import React from 'react';
import { shallow } from 'enzyme';
import SolarPanel from 'components\SolarPanel.js';

describe('<SolarPanel />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SolarPanel />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "solarpanel-component"', function () {
      expect(component.hasClass('solarpanel-component')).to.equal(true);
    });
  });
});
