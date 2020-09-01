/* eslint-disable no-trailing-spaces */
import coralComponents from '../../app/data/coral-components';

const allComponentIds = coralComponents.map(({ id }) => (id));

class ContainerPolicies {
  static hasPolicyConfig(containerName) {
    // eslint-disable-next-line no-undef
    return CONTAINER_POLICY.hasOwnProperty(containerName);
  }

  static getPolicy(containerName) {
    if (this.hasPolicyConfig(containerName)) {
      // eslint-disable-next-line no-undef
      return CONTAINER_POLICY[containerName];
    }

    // all components
    return allComponentIds;
  }
}

export default ContainerPolicies;
