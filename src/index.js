import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Home from './Home';

const root = createRoot(document.getElementById('app'));

root.render(<Home />);
