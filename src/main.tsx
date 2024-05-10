import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Store } from '@stores/Stores.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#ffffffac",
              // contentBg:'# #000000',

              algorithm: true,
            },
          },
        }}
      > */}

      <App />
    </Provider>
  </React.StrictMode>,
)
