import React from 'react';
import ReactDOM from 'react-dom/client';

import { ShaderArt } from 'shader-art';
import { UniformPlugin } from '@shader-art/plugin-uniform';

import App from './app/index.tsx';

import './heroui.css';
import './theme.scss';

ShaderArt.register([() => new UniformPlugin()]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
