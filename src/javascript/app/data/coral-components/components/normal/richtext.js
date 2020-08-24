/* eslint-disable no-undef */
import constants from '../../constants';

const richtext = {
  name: 'Richtext',
  tag: 'RT',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
  description: 'RTE Field',
  id: 'richtext',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
  ],
  previewOutput: `<div
  class="cq-RichText richtext-container coral-Form-field coral-DecoratedTextfield">
  <input type="hidden"
    data-cq-richtext-input="true"
    class="coral-Form-field"
    data-usefixedinlinetoolbar="true"
    name="./text" value="">
  <input type="hidden"
    name="./textIsRich" value="true">

  <div class="rte-ui is-desktop">
    <div data-type="inline">
      <coral-buttongroup
        selectionmode="multiple"
        role="group"
        class="rte-toolbar _coral-ButtonGroup is-sticky is-active"
        style="top: 0px; left: 0px; visibility: hidden;">
        <select
          class=" _coral-ButtonGroup-select"
          tabindex="-1"
          handle="nativeSelect"
          multiple="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>

        <button is="coral-button"
          variant="quietaction"
          class="rte-toolbar-item disabled _coral-ActionButton _coral-ActionButton--quiet"
          type="button"
          title="Bold (Ctrl+B)"
          icon="textBold"
          data-action="format#bold"
          tabindex="0" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img" icon="textBold">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextBold">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
          </coral-button-label>
        </button>


        <button is="coral-button"
          variant="quietaction"
          class="rte-toolbar-item disabled _coral-ActionButton _coral-ActionButton--quiet"
          type="button"
          title="Italic (Ctrl+I)"
          icon="textItalic"
          data-action="format#italic"
          tabindex="-1" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img"
            icon="textItalic">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextItalic">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
          </coral-button-label>
        </button>

        <button is="coral-button"
          variant="quietaction"
          class="rte-toolbar-item disabled _coral-ActionButton _coral-ActionButton--quiet"
          type="button"
          title="Underline (Ctrl+U)"
          icon="textUnderline"
          data-action="format#underline"
          tabindex="-1" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img"
            icon="textUnderline">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextUnderline">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
          </coral-button-label>
        </button>

        <button is="coral-button"
          type="button" title="Justify"
          variant="quietaction"
          class="rte-toolbar-item rte--trigger rte--singleSelect _coral-ActionButton _coral-ActionButton--quiet"
          icon="textLeft"
          data-action="#justify"
          tabindex="-1" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img" icon="textLeft">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextAlignLeft">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
            <coral-icon
              icon="chevronDown"
              role="img" size="XXS"
              class="_coral-Icon--sizeXXS rte-openIcon _coral-Icon">
              <svg focusable="false"
                aria-hidden="true"
                class="_coral-Icon--svg _coral-Icon">
                <use
                  xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-ChevronDown">
                </use>
              </svg>
            </coral-icon>
          </coral-button-label>
        </button>

        <button is="coral-button"
          type="button" title="Lists"
          variant="quietaction"
          class="rte-toolbar-item rte--trigger _coral-ActionButton _coral-ActionButton--quiet"
          icon="textBulleted"
          data-action="#lists"
          tabindex="-1" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img"
            icon="textBulleted">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextBulleted">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
            <coral-icon
              icon="chevronDown"
              role="img" size="XXS"
              class="_coral-Icon--sizeXXS rte-openIcon _coral-Icon">
              <svg focusable="false"
                aria-hidden="true"
                class="_coral-Icon--svg _coral-Icon">
                <use
                  xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-ChevronDown">
                </use>
              </svg>
            </coral-icon>
          </coral-button-label>
        </button>

        <button is="coral-button"
          variant="quietaction"
          class="rte-toolbar-item disabled rte--trigger _coral-ActionButton _coral-ActionButton--quiet"
          type="button"
          title="Hyperlink" icon="link"
          data-action="links#modifylink"
          tabindex="-1" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img" icon="link">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-Link">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
            <coral-icon
              icon="chevronDown"
              role="img" size="XXS"
              class="_coral-Icon--sizeXXS rte-openIcon _coral-Icon">
              <svg focusable="false"
                aria-hidden="true"
                class="_coral-Icon--svg _coral-Icon">
                <use
                  xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-ChevronDown">
                </use>
              </svg>
            </coral-icon>
          </coral-button-label>
        </button>

        <button is="coral-button"
          variant="quietaction"
          class="rte-toolbar-item disabled _coral-ActionButton _coral-ActionButton--quiet"
          type="button" title="Unlink"
          icon="linkOff"
          data-action="links#unlink"
          tabindex="-1" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img" icon="linkOff">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-LinkOff">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
          </coral-button-label>
        </button>

        <button is="coral-button"
          type="button"
          title="Paragraph formats"
          variant="quietaction"
          class="rte-toolbar-item rte--trigger _coral-ActionButton _coral-ActionButton--quiet"
          icon="textParagraph"
          data-action="#paraformat"
          tabindex="-1" size="M"
          aria-checked="false"
          role="checkbox">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img"
            icon="textParagraph">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextParagraph">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label
            class="_coral-ActionButton-label">
            <coral-icon
              icon="chevronDown"
              role="img" size="XXS"
              class="_coral-Icon--sizeXXS rte-openIcon _coral-Icon">
              <svg focusable="false"
                aria-hidden="true"
                class="_coral-Icon--svg _coral-Icon">
                <use
                  xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-ChevronDown">
                </use>
              </svg>
            </coral-icon>
          </coral-button-label>
        </button>

      </coral-buttongroup>

      <coral-popover interaction="off"
        data-id="justify"
        class="rte-popover _coral-Overlay _coral-Popover"
        role="dialog"
        aria-live="assertive"
        variant="default" closable="off"
        tabindex="0"
        style="display: none;">
        <div handle="topTabCapture"
          coral-tabcapture="top"
          tabindex="0"
          role="presentation"></div>
        <div
          class=" _coral-Dialog-header"
          handle="headerWrapper"
          role="presentation" hidden="">
          <coral-popover-header
            class="_coral-Dialog-title">
          </coral-popover-header>
        </div><button is="coral-button"
          tracking="off"
          handle="closeButton"
          class="_coral-Dialog-closeButton _coral-ClearButton"
          type="button"
          variant="_custom" icon="close"
          title="Close" tabindex="-1"
          coral-close="" size="M"
          style="display: none;">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img" icon="close">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-Close">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label>
          </coral-button-label>
        </button>
        <div class=" _coral-Popover-tip"
          handle="tip" hidden=""></div>
        <coral-popover-content
          class="_coral-Dialog-content">
          <coral-buttongroup
            class="_coral-ButtonGroup"
            selectionmode="none"
            role="group"><select
              class=" _coral-ButtonGroup-select"
              tabindex="-1"
              handle="nativeSelect"></select>

            <button is="coral-button"
              type="button"
              title="Align Text Left"
              variant="quietaction"
              class="rte-toolbar-item is-disabled _coral-ActionButton _coral-ActionButton--quiet"
              icon="textLeft"
              data-action="justify#justifyleft"
              tabindex="0" size="M">
              <coral-icon size="S"
                class="_coral-Icon--sizeS _coral-Icon"
                role="img"
                icon="textLeft">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextAlignLeft">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-ActionButton-label">
              </coral-button-label>
            </button>


            <button is="coral-button"
              type="button"
              title="Center Text"
              variant="quietaction"
              class="rte-toolbar-item is-disabled _coral-ActionButton _coral-ActionButton--quiet"
              icon="textCenter"
              data-action="justify#justifycenter"
              tabindex="0" size="M">
              <coral-icon size="S"
                class="_coral-Icon--sizeS _coral-Icon"
                role="img"
                icon="textCenter">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextAlignCenter">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-ActionButton-label">
              </coral-button-label>
            </button>


            <button is="coral-button"
              type="button"
              title="Align Text Right"
              variant="quietaction"
              class="rte-toolbar-item is-disabled _coral-ActionButton _coral-ActionButton--quiet"
              icon="textRight"
              data-action="justify#justifyright"
              tabindex="0" size="M">
              <coral-icon size="S"
                class="_coral-Icon--sizeS _coral-Icon"
                role="img"
                icon="textRight">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextAlignRight">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-ActionButton-label">
              </coral-button-label>
            </button>


          </coral-buttongroup>
        </coral-popover-content>
        <coral-popover-footer
          class="_coral-Dialog-footer"
          hidden="">
        </coral-popover-footer>
        <div
          handle="intermediateTabCapture"
          coral-tabcapture="intermediate"
          tabindex="0"
          role="presentation"></div>
        <div handle="bottomTabCapture"
          coral-tabcapture="bottom"
          tabindex="0"
          role="presentation"></div>
      </coral-popover>


      <coral-popover interaction="off"
        data-id="lists"
        class="rte-popover _coral-Overlay _coral-Popover"
        role="dialog"
        aria-live="assertive"
        variant="default" closable="off"
        tabindex="0"
        style="display: none;">
        <div handle="topTabCapture"
          coral-tabcapture="top"
          tabindex="0"
          role="presentation"></div>
        <div
          class=" _coral-Dialog-header"
          handle="headerWrapper"
          role="presentation" hidden="">
          <coral-popover-header
            class="_coral-Dialog-title">
          </coral-popover-header>
        </div><button is="coral-button"
          tracking="off"
          handle="closeButton"
          class="_coral-Dialog-closeButton _coral-ClearButton"
          type="button"
          variant="_custom" icon="close"
          title="Close" tabindex="-1"
          coral-close="" size="M"
          style="display: none;">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img" icon="close">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-Close">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label>
          </coral-button-label>
        </button>
        <div class=" _coral-Popover-tip"
          handle="tip" hidden=""></div>
        <coral-popover-content
          class="_coral-Dialog-content">
          <coral-buttongroup
            class="_coral-ButtonGroup"
            selectionmode="none"
            role="group"><select
              class=" _coral-ButtonGroup-select"
              tabindex="-1"
              handle="nativeSelect"></select>

            <button is="coral-button"
              type="button"
              title="Bullet List"
              variant="quietaction"
              class="rte-toolbar-item is-disabled _coral-ActionButton _coral-ActionButton--quiet"
              icon="textBulleted"
              data-action="lists#unordered"
              tabindex="0" size="M">
              <coral-icon size="S"
                class="_coral-Icon--sizeS _coral-Icon"
                role="img"
                icon="textBulleted">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextBulleted">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-ActionButton-label">
              </coral-button-label>
            </button>


            <button is="coral-button"
              type="button"
              title="Numbered List"
              variant="quietaction"
              class="rte-toolbar-item is-disabled _coral-ActionButton _coral-ActionButton--quiet"
              icon="textNumbered"
              data-action="lists#ordered"
              tabindex="0" size="M">
              <coral-icon size="S"
                class="_coral-Icon--sizeS _coral-Icon"
                role="img"
                icon="textNumbered">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextNumbered">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-ActionButton-label">
              </coral-button-label>
            </button>


            <button is="coral-button"
              type="button"
              title="Outdent"
              variant="quietaction"
              class="rte-toolbar-item is-disabled _coral-ActionButton _coral-ActionButton--quiet"
              icon="textIndentDecrease"
              data-action="lists#outdent"
              tabindex="0" size="M">
              <coral-icon size="S"
                class="_coral-Icon--sizeS _coral-Icon"
                role="img"
                icon="textIndentDecrease">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextIndentDecrease">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-ActionButton-label">
              </coral-button-label>
            </button>


            <button is="coral-button"
              type="button"
              title="Indent"
              variant="quietaction"
              class="rte-toolbar-item is-disabled _coral-ActionButton _coral-ActionButton--quiet"
              icon="textIndentIncrease"
              data-action="lists#indent"
              tabindex="0" size="M">
              <coral-icon size="S"
                class="_coral-Icon--sizeS _coral-Icon"
                role="img"
                icon="textIndentIncrease">
                <svg focusable="false"
                  aria-hidden="true"
                  class="_coral-Icon--svg _coral-Icon">
                  <use
                    xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-TextIndentIncrease">
                  </use>
                </svg>
              </coral-icon>
              <coral-button-label
                class="_coral-ActionButton-label">
              </coral-button-label>
            </button>


          </coral-buttongroup>
        </coral-popover-content>
        <coral-popover-footer
          class="_coral-Dialog-footer"
          hidden="">
        </coral-popover-footer>
        <div
          handle="intermediateTabCapture"
          coral-tabcapture="intermediate"
          tabindex="0"
          role="presentation"></div>
        <div handle="bottomTabCapture"
          coral-tabcapture="bottom"
          tabindex="0"
          role="presentation"></div>
      </coral-popover>


      <coral-popover interaction="off"
        data-id="paraformat"
        class="rte-popover _coral-Overlay _coral-Popover"
        role="dialog"
        aria-live="assertive"
        variant="default" closable="off"
        tabindex="0"
        style="display: none;">
        <div handle="topTabCapture"
          coral-tabcapture="top"
          tabindex="0"
          role="presentation"></div>
        <div
          class=" _coral-Dialog-header"
          handle="headerWrapper"
          role="presentation" hidden="">
          <coral-popover-header
            class="_coral-Dialog-title">
          </coral-popover-header>
        </div><button is="coral-button"
          tracking="off"
          handle="closeButton"
          class="_coral-Dialog-closeButton _coral-ClearButton"
          type="button"
          variant="_custom" icon="close"
          title="Close" tabindex="-1"
          coral-close="" size="M"
          style="display: none;">
          <coral-icon size="S"
            class="_coral-Icon--sizeS _coral-Icon"
            role="img" icon="close">
            <svg focusable="false"
              aria-hidden="true"
              class="_coral-Icon--svg _coral-Icon">
              <use
                xlink:href="/libs/clientlibs/granite/coralui3/resources/spectrum-icons.svg#spectrum-icon-18-Close">
              </use>
            </svg>
          </coral-icon>
          <coral-button-label>
          </coral-button-label>
        </button>
        <div class=" _coral-Popover-tip"
          handle="tip" hidden=""></div>
        <coral-popover-content
          class="_coral-Dialog-content">
          <coral-buttonlist
            class="rte-toolbar-list _coral-Menu _coral-ButtonList"
            interaction="on">

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#p"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Paragraph
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#h1"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Heading 1
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#h2"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Heading 2
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#h3"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Heading 3
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#h4"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Heading 4
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#h5"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Heading 5
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#h6"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Heading 6
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#blockquote"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Quote
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#hr"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Horizontal Rule (visual
                line break)
              </coral-list-item-content>
            </button>

            <button
              is="coral-buttonlist-item"
              type="button"
              data-action="paraformat#pre"
              class="_coral-Menu-item _coral-ButtonList-item"
              coral-list-item="">
              <coral-list-item-content
                class="_coral-Menu-itemLabel">
                Preformatted
              </coral-list-item-content>
            </button>

          </coral-buttonlist>
        </coral-popover-content>
        <coral-popover-footer
          class="_coral-Dialog-footer"
          hidden="">
        </coral-popover-footer>
        <div
          handle="intermediateTabCapture"
          coral-tabcapture="intermediate"
          tabindex="0"
          role="presentation"></div>
        <div handle="bottomTabCapture"
          coral-tabcapture="bottom"
          tabindex="0"
          role="presentation"></div>
      </coral-popover>


    </div>
  </div>
  <div data-cq-richtext-editable="true"
    class="cq-RichText-editable coral-RichText-editable coral-RichText coral-DecoratedTextfield-input is-edited webkit chrome"
    data-config-path="/mnt/override/apps/core/wcm/components/text/v2/text/cq:dialog/content/items/tabs/items/properties/items/columns/items/column/items/text.config.json/content/wknd/language-masters/en/magazine/arctic-surfing/jcr:content/root/container/container/text"
    data-use-fixed-inline-toolbar="true"
    data-custom-start="null"
    data-editor-type="text"
    data-external-style-sheets=""
    data-usefixedinlinetoolbar="true"
    name="./text" value=""
    contenteditable="true"
    style="outline-style: none;">
    <p><br _rte_temp_br="brEOB"></p>
  </div>

</div>`,
  xmlOutput: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="cq/gui/components/authoring/dialog/richtext"
    name="./{id}"
    fieldLabel="{label}"
    fieldDescription="{description}"
  />`,
};

export default richtext;
