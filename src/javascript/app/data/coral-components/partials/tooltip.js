const TOOLTIP_WRAPPER_TEMPLATE = `<div class="tooltip-wrapper">
  <coral-icon icon="info" size="S" id="targetComponent_{id}" data-test="{description}" class="coral-Form-fieldinfo" />
  <coral-tooltip placement="right" target="#targetComponent_{id}"  data-test="{description}">
    {description}
  </coral-tooltip>
</div>`;

export default TOOLTIP_WRAPPER_TEMPLATE;
