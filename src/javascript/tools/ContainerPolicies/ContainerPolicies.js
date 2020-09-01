/* eslint-disable no-trailing-spaces */
import coralComponents from '../../app/data/coral-components';

const allComponentIds = coralComponents.map(({ id }) => (id));
const GROUP_POLICY_PREFIX = 'group:';

class ContainerPolicies {
  static hasPolicyConfig(policyString) {
    // eslint-disable-next-line no-undef
    return CONTAINER_POLICY.hasOwnProperty(policyString);
  }

  static isGroupPolicy(policyString) {
    return policyString ? policyString.startsWith(GROUP_POLICY_PREFIX) : false;
  }

  static getPolicy(policyString) {
    if (this.hasPolicyConfig(policyString)) {
      // eslint-disable-next-line no-undef
      let policies = CONTAINER_POLICY[policyString];

      const detectedGroupPolicies = policies.filter((pc) => this.isGroupPolicy(pc));
      policies = policies.filter((policy) => !this.isGroupPolicy(policy));
      if (detectedGroupPolicies.length > 0) {
        const compiledGroupPolicy = coralComponents
          .filter((component) => (
            detectedGroupPolicies.find((ps) => {
              const extractedGroupPolicyName = ps.replace(GROUP_POLICY_PREFIX, '').trim();
              return component.category === extractedGroupPolicyName;
            })
          ))
          .map(({ id }) => (id));
        policies = policies.concat(compiledGroupPolicy);
      }

      return policies;
    }

    // all components
    return allComponentIds;
  }
}

export default ContainerPolicies;
