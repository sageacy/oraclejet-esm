/* @oracle/oraclejet-preact: 13.1.0 */
import { jsx, jsxs } from 'preact/jsx-runtime';
import './UNSAFE_UserAssistance.css';
import { useTranslationBundle } from './hooks/UNSAFE_useTranslationBundle.js';
import { classNames } from './utils/UNSAFE_classNames.js';
import { ComponentMessageContainer } from './UNSAFE_ComponentMessage.js';
import { useFormContext } from './hooks/UNSAFE_useFormContext.js';
import { useFormFieldContext } from './hooks/UNSAFE_useFormFieldContext.js';
import 'preact/hooks';
import './UNSAFE_Environment.js';
import 'preact';
import './UNSAFE_Layer.js';
import 'preact/compat';
import './UNSAFE_HiddenAccessible.js';
import './UNSAFE_Message.js';
import './UNSAFE_Flex.js';
import './tslib.es6-deee4931.js';
import './utils/UNSAFE_interpolations/dimensions.js';
import './utils/UNSAFE_arrayUtils.js';
import './utils/UNSAFE_size.js';
import './utils/UNSAFE_stringUtils.js';
import './_curry1-b6f34fc4.js';
import './utils/UNSAFE_mergeInterpolations.js';
import './_curry2-255e04d1.js';
import './_has-f370c697.js';
import './utils/UNSAFE_interpolations/boxalignment.js';
import './keys-77d2b8e6.js';
import './utils/UNSAFE_interpolations/flexbox.js';
import './utils/UNSAFE_interpolations/flexitem.js';
import './utils/UNSAFE_getLocale.js';
import './UNSAFE_ThemedIcons.js';
import './UNSAFE_Icon.js';
import './hooks/UNSAFE_useUser.js';
import './hooks/UNSAFE_useTheme.js';
import './UNSAFE_Icons.js';
import './utils/UNSAFE_logger.js';
import './utils/UNSAFE_soundUtils.js';
import './UNSAFE_TransitionGroup.js';

const rootStyles = "_k9pwhe";
function InlineHelpSource({
  children,
  source
}) {
  const translations = useTranslationBundle('@oracle/oraclejet-preact');
  const userAssistance_learnMoreStr = translations.userAssistance_learnMore();
  children = children !== null && children !== void 0 ? children : userAssistance_learnMoreStr; // TODO: Implement and use a preact Link component instead of using an anchor tag

  return jsx("a", Object.assign({
    class: rootStyles,
    target: "_blank",
    href: source
  }, {
    children: children
  }));
}

const helpTextStyles = "_igqc22";
function InlineHelp({
  assistiveText,
  sourceLink,
  sourceText
}) {
  return jsxs("div", {
    children: [assistiveText && sourceLink ? jsx("span", Object.assign({
      class: helpTextStyles
    }, {
      children: assistiveText
    })) : assistiveText, sourceLink && jsx(InlineHelpSource, Object.assign({
      source: sourceLink
    }, {
      children: sourceText
    }))]
  });
}

const variantStyles$1 = {
  start: "_0kd52r",
  end: "va9krn"
};
const displayHiddenStyles = "g2l5cm";
function InlineRequired({
  align = 'end',
  hasHelp = false,
  hasMessages = false
}) {
  const classes = classNames([variantStyles$1[align], (hasHelp || hasMessages) && displayHiddenStyles]);
  const translations = useTranslationBundle('@oracle/oraclejet-preact');
  const requiredStr = translations.userAssistance_required();
  return jsx("div", Object.assign({
    class: classes
  }, {
    children: requiredStr
  }));
}

const baseStyles = "_yui29";
const variantStyles = {
  reflow: "_86ld0",
  efficient: "_hk1l7g"
}; // defaults to type='reflow'. If this is within an oj-form-layout, the o-f-l
// will pass down its type which defaults to 'efficient' (TODO).

function InlineUserAssistanceContainer({
  variant = 'reflow',
  children,
  id
}) {
  const classes = classNames([baseStyles, variantStyles[variant]]);
  return jsx("div", Object.assign({
    class: classes,
    id: id
  }, {
    children: children
  }));
}

// This has the precedence rules for the user assistance.
function InlineUserAssistance({ assistiveText, fieldLabel, helpSourceLink, helpSourceText, id, isRequiredShown, messages = [], userAssistanceDensity }) {
    const { isReadonly: isFormReadonly } = useFormContext();
    const needsUserAssistanceIfNoContent = userAssistanceDensity === 'efficient' && isFormReadonly === false;
    const { isFocused } = useFormFieldContext();
    const uaInlineContent = messages.length > 0 ? (jsx(ComponentMessageContainer, { fieldLabel: fieldLabel, messages: messages })) : (assistiveText || helpSourceLink) && isFocused ? (jsx(InlineHelp, { assistiveText: assistiveText, sourceLink: helpSourceLink, sourceText: helpSourceText })) : isRequiredShown ? (jsx(InlineRequired, {})) : null;
    // when reflow we do not render unless it has content.
    // when efficient we render regardless of if it has content.
    // TODO: Get the userAssistanceDensity value from the FormContext
    return uaInlineContent || needsUserAssistanceIfNoContent ? (jsx(InlineUserAssistanceContainer, Object.assign({ id: id, variant: userAssistanceDensity }, { children: uaInlineContent }))) : null;
}

export { InlineHelp, InlineHelpSource, InlineRequired, InlineUserAssistance, InlineUserAssistanceContainer };
/*  */
//# sourceMappingURL=UNSAFE_UserAssistance.js.map
