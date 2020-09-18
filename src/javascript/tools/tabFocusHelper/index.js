class TabFocusHelper {
  constructor() {
    this.previewContainer = document.getElementById('preview');
    this.actives = {};
    this.disabled = false;
  }

  init() {
    this.previewContainer.addEventListener('coral-tabview:change', ({ target: tabView }) => {
      if (this.disabled) {
        return;
      }

      const activeTab = tabView.querySelector('coral-tab[selected]');
      if (!activeTab) {
        return;
      }

      this.actives[tabView.dataset.path] = activeTab.dataset.path;
    });
  }

  disable() {
    this.disabled = true;
  }

  restore() {
    this.disabled = false;
    Object.keys(this.actives).forEach((tabViewPath) => {
      const activeTabPath = this.actives[tabViewPath];
      const tabView = document.querySelector(`[data-path="${tabViewPath}"]`);
      const activeTab = tabView.querySelector(`[data-path="${activeTabPath}"]`);
      activeTab.selected = true;
    });
  }
}

export default new TabFocusHelper();
