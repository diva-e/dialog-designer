// todo: potentially move to webpack define
const actionNames = {
  COMPONENT: {
    DROP: 'component/drop',
    UPDATE: 'component/update',
    DELETE: 'component/delete',
    COPY: 'component/copy',
    CUT: 'component/cut',
    PASTE_BEFORE: 'component/paste_before',
    PASTE_AFTER: 'component/paste_after',
    MOVE_UP: 'component/move_up',
    MOVE_DOWN: 'component/move_down',
  },
  STRUCTURE: {
    SET: 'structure/set',
    DOWNLOAD: {
      XML: 'structure/download/xml',
      JSON: 'structure/download/json',
      ACG_JSON: 'structure/download/acgjson',
    },
    CLIPBOARD: {
      SET: 'structure/clipboard/set',
    },
    RESET: 'structure/reset',
  },
  UI: {
    CONTEXTMENU: {
      OPEN: 'ui/contextmenu/open',
      CLOSE: 'ui/contextmenu/close',
    },
    ACTION_PANEL: {
      ACTIVATE: 'ui/action_panel/activate',
      CLOSE: 'ui/action_panel/close',
      UPDATE_CONTAINER_WIDTH: 'ui/action_panel/update_container_width',
      UPDATE_XML_ZOOM: 'ui/action_panel/update_xml_zoom',
    },
    EDITCOMPONENT: {
      SAVE: 'ui/editcomponent/save',
      CLOSE: 'ui/editcomponent/close',
      UPDATE_FIELDVALUE: 'ui/editcomponent/update_fieldvalue',
    },
    PREVIEW: {
      UPDATE_THEME: 'ui/preview/update_theme',
    },
  },
  SETTINGS: {
    SET: 'settings/set',
  },
};

export default actionNames;
