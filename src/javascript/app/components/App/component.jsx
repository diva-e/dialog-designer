import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../Header';
import Sidepanel from '../Sidepanel';
import DialogPreview from '../DialogPreview';
import EditComponent from '../EditComponent';
import Structure from '../Structure';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';

const App = () => (
  <div className="app-layout">
    <DndProvider backend={HTML5Backend}>
      <Header />
      <main className="app-main-layout">
        <Sidepanel />
        <ErrorBoundary>
          <DialogPreview />
        </ErrorBoundary>
        <ErrorBoundary>
          <Structure />
        </ErrorBoundary>
      </main>
      <Footer />
    </DndProvider>
    <EditComponent />
  </div>
);

export default App;
