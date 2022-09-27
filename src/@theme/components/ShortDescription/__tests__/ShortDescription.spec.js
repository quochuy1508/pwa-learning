import React from 'react';
import { render, getByText } from '@testing-library/react';
import { useQuery } from '@apollo/client';

import ShortDescription from '../ShortDescription';

jest.mock('@apollo/client');
