/* @oracle/oraclejet-preact: 13.1.0 */
import { jsx } from 'preact/jsx-runtime';
import { Icon } from './UNSAFE_Icon.js';
import './tslib.es6-deee4931.js';

import './utils/UNSAFE_classNames.js';
import './hooks/UNSAFE_useUser.js';
import 'preact/hooks';
import './UNSAFE_Environment.js';
import 'preact';
import './UNSAFE_Layer.js';
import 'preact/compat';
import './hooks/UNSAFE_useTheme.js';

const SvgCheckboxOff = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 16 16" }, props, { children: jsx("path", { d: "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 1.33H2c-.37 0-.67.3-.67.67v12c0 .37.3.67.67.67h12c.37 0 .67-.3.67-.67V2c0-.37-.3-.67-.67-.67Z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgCheckboxOn = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 16 16" }, props, { children: jsx("path", { d: "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-2.239 3.894-5.513 5.52-2.01-2.012L3 8.642l3.248 3.252L13 5.134l-1.239-1.24Z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoChevronDown = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M6.35 8 5 9.739 12 16l7-6.261L17.65 8 12 13.054z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoChevronLeft = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M16 17.65 14.261 19 8 12l6.261-7L16 6.35 10.946 12z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoChevronRight = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M8 17.65 9.739 19 16 12 9.739 5 8 6.35 13.054 12z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoErrorS = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM8.707 7.293 7.293 8.707l8 8 1.414-1.414z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoInformationS = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm.025 9h-.05a.978.978 0 0 0-.975.976v6.048c0 .537.439.976.976.976h.049a.979.979 0 0 0 .975-.976v-6.048a.978.978 0 0 0-.975-.976zM13 6h-2v2h2z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoSuccessS = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zM7.707 12.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 1 0-1.414-1.414L10 14.586z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoViewHide = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "m2.707 1.293 7.17 7.17.002.002 1.504 1.504 7.21 7.21-.001-.001 4.115 4.115-1.414 1.414-4.297-4.296C15.485 19.434 13.82 20 12 20c-2.959 0-5.461-1.46-7.51-3.85a16.59 16.59 0 0 1-1.796-2.56 12.546 12.546 0 0 1-.613-1.197L1.91 12l.17-.395c.11-.252.315-.668.618-1.195.5-.872 1.1-1.743 1.803-2.56.3-.349.614-.68.94-.993l-4.15-4.149zM6.856 8.27l-.256.252c-.199.2-.393.411-.581.63a14.7 14.7 0 0 0-1.843 2.718l-.069.13.145.275.179.322c.439.768.966 1.538 1.578 2.252C7.711 16.835 9.71 18 12 18c1.222 0 2.358-.334 3.426-.962l.123-.076-1.517-1.516A4 4 0 0 1 8.553 9.97zM12 4c2.959 0 5.461 1.46 7.51 3.849a16.59 16.59 0 0 1 1.796 2.56l.208.375c.126.234.228.437.306.603l.1.219.169.395-.17.395a12.7 12.7 0 0 1-.548 1.073c-.37.655-.8 1.318-1.292 1.963l-.302.385-1.553-1.26a14.947 14.947 0 0 0 1.404-2.07l.16-.289.104-.201-.144-.273-.178-.322a14.613 14.613 0 0 0-1.58-2.252C16.289 7.165 14.291 6 12.001 6c-.478 0-.942.05-1.395.151l-.337.085-.537-1.927A8.409 8.409 0 0 1 12 4zm-1.933 7.482-.036.166a2 2 0 0 0 2.321 2.321l.164-.038z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoView = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M12 4c4.278 0 7.61 2.667 10 8-2.39 5.333-5.722 8-10 8s-7.61-2.667-10-8c2.39-5.333 5.722-8 10-8zm0 2c-4.41 0-6.707 4.479-7.699 5.999C5.295 13.518 7.604 18 12 18c4.41 0 6.707-4.479 7.699-5.999C18.705 10.482 16.396 6 12 6zm0 2c2.176 0 3.945 1.794 3.945 4s-1.77 4-3.945 4c-2.176 0-3.945-1.794-3.945-4S9.825 8 12 8zm0 2c-1.088 0-1.973.897-1.973 2s.885 2 1.973 2 1.973-.897 1.973-2-.885-2-1.973-2z", fill: "currentcolor", fillRule: "evenodd" }) })));

const SvgIcoWarningS = (props) => (jsx(Icon, Object.assign({ viewBox: "0 0 24 24" }, props, { children: jsx("path", { d: "M12 .853 23.656 23H.344zM13 18h-2v2h2zm0-9h-2v7h2z", fill: "currentcolor", fillRule: "evenodd" }) })));

export { SvgCheckboxOff as CheckboxOff, SvgCheckboxOn as CheckboxOn, SvgIcoChevronDown as IcoChevronDown, SvgIcoChevronLeft as IcoChevronLeft, SvgIcoChevronRight as IcoChevronRight, SvgIcoErrorS as IcoErrorS, SvgIcoInformationS as IcoInformationS, SvgIcoSuccessS as IcoSuccessS, SvgIcoView as IcoView, SvgIcoViewHide as IcoViewHide, SvgIcoWarningS as IcoWarningS };
/*  */
//# sourceMappingURL=UNSAFE_Icons.js.map
