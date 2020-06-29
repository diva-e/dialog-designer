import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ComponentList from '../ComponentList';
import FormPreview from '../FormPreview';
import EditComponent from '../EditComponent';

const App = () => (
  <div className="app">
    <DndProvider backend={HTML5Backend}>
      <ComponentList />
      <FormPreview />
    </DndProvider>
    <EditComponent />
  </div>
);

export default App;
