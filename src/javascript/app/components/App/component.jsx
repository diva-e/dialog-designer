import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../Header';
import Sidepanel from '../Sidepanel';
import EditComponent from '../EditComponent';
import ActionPanelContainwer from '../ActionPanelContainer';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';
import Contextmenu from '../Contextmenu';

const App = () => (
  <div className="app-layout">
    <DndProvider backend={HTML5Backend}>
      <Header />
      <main className="app-main-layout">
        <Sidepanel />
        <ErrorBoundary>
          <ActionPanelContainwer />
        </ErrorBoundary>
      </main>
      <Footer />
    </DndProvider>
    <EditComponent />
    <Contextmenu />
  </div>
);

export default App;
