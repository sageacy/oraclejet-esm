import { MessageVariant } from './Message.types';
/**
 * Props for the Summary component
 */
declare type Props = {
    /**
     * The summary text
     */
    text?: string;
    /**
     * Style variant
     */
    variant?: MessageVariant;
};
/**
 * Summary Component for rendering the summary text of the Message
 */
declare function MessageSummary({ text, variant }: Props): import("preact").JSX.Element;
export { MessageSummary };