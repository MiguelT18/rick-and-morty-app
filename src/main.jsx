import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// NextUIProvider components
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</NextUIProvider>
);
