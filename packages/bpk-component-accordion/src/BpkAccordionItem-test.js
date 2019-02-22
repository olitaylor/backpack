/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 - 2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import BpkAccordionItem from './BpkAccordionItem';

describe('BpkAccordionItem', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BpkAccordionItem id="my-accordion" title="My accordion item">
          My accordion content
        </BpkAccordionItem>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with "expanded" prop', () => {
    const tree = renderer
      .create(
        <BpkAccordionItem id="my-accordion" title="My accordion item" expanded>
          My accordion content
        </BpkAccordionItem>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with "className" prop', () => {
    const tree = renderer
      .create(
        <BpkAccordionItem
          id="my-accordion"
          title="My accordion item"
          className="my-custom-class"
        >
          My accordion content
        </BpkAccordionItem>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render an "initiallyExpanded" attribute on the html node', () => {
    const tree = renderer
      .create(
        <BpkAccordionItem
          id="my-accordion"
          title="My accordion item"
          initiallyExpanded
        >
          My accordion content
        </BpkAccordionItem>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
