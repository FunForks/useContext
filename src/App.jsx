/**
 * App.jsx
 * Demo of using a Context Provider to wrap child components
 */

import { CustomProvider } from './contexts/CustomContext'
import { Creator } from './components/Creator'
import { Consumer } from './components/Consumer'
    
const App = () => (
  <CustomProvider>
    <Creator
      custom="custom prop from App"
    >
      <p>a &lt;p&gt; element passed as "children" from App</p>
    </Creator>
    <Consumer/>
  </CustomProvider>
)


export default App