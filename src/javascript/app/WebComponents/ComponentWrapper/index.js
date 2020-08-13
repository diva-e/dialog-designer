// import './index.scss';
// import coralComponents from './coralComponentList';
//
// const initComponentWrapper = (store) => {
//
//   const wrap = (tagName, CoralOriginal) => {
//     class ComponentWrapperWebComponent extends CoralOriginal {
//       constructor() {
//         super();
//
//         this.addEventListener('contextmenu', (ev) => {
//           ev.preventDefault();
//           ev.stopPropagation();
//         });
//       }
//     }
//
//     window.customElements.define(tagName, ComponentWrapperWebComponent);
//   };
//
//   wrap('wrapped-component', HTMLElement);
//
//   let c = 0;
//   coralComponents.forEach(({ tagName, component, extendsElement }) => {
//     try {
//       wrap(`wrapped-${tagName}`, component, extendsElement ? { extends: extendsElement } : undefined);
//     } catch (error) {
//       c += 1;
//       console.log(tagName, error);
//     }
//   });
//
//   console.log(c, coralComponents.length);
//
// };
//
// export default initComponentWrapper;

export default null;
