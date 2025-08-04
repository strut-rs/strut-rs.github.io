import React, {PropsWithChildren} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Define the valid size options
type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

interface TerminalProps extends PropsWithChildren {
    /**
     * The width of the terminal window. Overrides the CSS default.
     * @default null
     */
    width?: string | null;
    /**
     * Optional class name for custom styling.
     */
    className?: string;
    /**
     * Optional inline styles for the root element.
     */
    style?: React.CSSProperties;
    /**
     * The font size for the code block. Overrides the theme's default.
     * @default null
     */
    fontSize?: string | null;
    /**
     * The line height for the code block. Overrides the theme's default.
     * @default null
     */
    lineHeight?: number | null;
    /**
     * Adjusts the overall size of the terminal.
     * @default 'm'
     */
    size?: Size;
    /**
     * Applies standard margins for MDX content.
     * @default true
     */
    mdx?: boolean;
    /**
     * Toggles text wrapping within the code block.
     * If false, content will be horizontally scrollable.
     * @default false
     */
    wrap?: boolean;
}

// Map size prop to CSS module classes
const sizeToClassMap: Record<Size, string> = {
    xs: styles.sizeXs,
    s: styles.sizeS,
    m: '', // 'm' is the default, no modifier class needed
    l: styles.sizeL,
    xl: styles.sizeXl,
};

export default function Terminal(
    {
        children,
        width = null,
        className,
        style,
        fontSize = null,
        lineHeight = null,
        size = 's',
        mdx = true,
        wrap = false,
    }: TerminalProps
) {
    // Conditionally apply inline styles only when props are provided
    const terminalStyle: React.CSSProperties = {
        ...style,
        ...(width && {width}),
    };

    const codeBlockStyle: React.CSSProperties = {
        ...(fontSize && {fontSize}),
        ...(lineHeight && {lineHeight}),
    };

    return (
        <div
            className={clsx(
                styles.terminal,
                sizeToClassMap[size],
                mdx && styles.mdx,
                className,
            )}
            style={terminalStyle}>
            <div className={styles.terminalHeader}>
                <span className={clsx(styles.terminalBtn, styles.terminalButtonRed)}/>
                <span className={clsx(styles.terminalBtn, styles.terminalButtonYellow)}/>
                <span className={clsx(styles.terminalBtn, styles.terminalButtonGreen)}/>
            </div>
            <pre
                className={clsx(
                    styles.terminalCodeBlock,
                    wrap ? styles.wrapContent : styles.noWrapContent,
                )}
                style={codeBlockStyle}
            >
                {children}
            </pre>
        </div>
    );
}
