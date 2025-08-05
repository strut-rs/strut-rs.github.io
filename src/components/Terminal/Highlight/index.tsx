import React, { PropsWithChildren } from 'react';
import styles from './../styles.module.css';

// Generic helper function to create a component from a CSS class
const createHighlightComponent = (className: string) => {
    const Component = ({ children }: PropsWithChildren<{}>) => (
        <span className={className}>{children}</span>
    );

    const capitalizedClassName = className.charAt(0).toUpperCase() + className.slice(1);
    Component.displayName = `Highlight(${capitalizedClassName})`;

    return Component;
};

/* --- Prog (Programming Languages) --- */
export const Prog = {
    Keyword: createHighlightComponent(styles.progKeyword),
    String: createHighlightComponent(styles.progString),
    Literal: createHighlightComponent(styles.progLiteral),
    Function: createHighlightComponent(styles.progFunction),
    Definition: createHighlightComponent(styles.progDefinition),
    Property: createHighlightComponent(styles.progProperty),
    Variable: createHighlightComponent(styles.progVariable),
    Operator: createHighlightComponent(styles.progOperator),
    Special: createHighlightComponent(styles.progSpecial),
    Parameter: createHighlightComponent(styles.progParameter),
    Comment: createHighlightComponent(styles.progComment),
    Punctuation: createHighlightComponent(styles.progPunctuation),
};

/* --- Markup (HTML, XML) --- */
export const Markup = {
    Tag: createHighlightComponent(styles.markupTag),
    Name: createHighlightComponent(styles.markupName),
    Attribute: createHighlightComponent(styles.markupAttribute),
    Value: createHighlightComponent(styles.markupValue),
    Entity: createHighlightComponent(styles.markupEntity),
    Comment: createHighlightComponent(styles.markupComment),
};

/* --- Shell (Bash, Zsh) --- */
export const Shell = {
    Prompt: createHighlightComponent(styles.shellPrompt),
    Command: createHighlightComponent(styles.shellCommand),
    Argument: createHighlightComponent(styles.shellArgument),
    Option: createHighlightComponent(styles.shellOption),
    String: createHighlightComponent(styles.shellString),
    Variable: createHighlightComponent(styles.shellVariable),
    Operator: createHighlightComponent(styles.shellOperator),
    Output: createHighlightComponent(styles.shellOutput),
    Comment: createHighlightComponent(styles.shellComment),
};

/* --- Log (Logging & Diagnostics) --- */
export const Log = {
    Trace: createHighlightComponent(styles.logTrace),
    Debug: createHighlightComponent(styles.logDebug),
    Info: createHighlightComponent(styles.logInfo),
    Notice: createHighlightComponent(styles.logNotice),
    Success: createHighlightComponent(styles.logSuccess),
    Warning: createHighlightComponent(styles.logWarning),
    Error: createHighlightComponent(styles.logError),
    Fatal: createHighlightComponent(styles.logFatal),
    Main: createHighlightComponent(styles.logMain),
    Muted: createHighlightComponent(styles.logMuted),
    Subdued: createHighlightComponent(styles.logSubdued),
};
