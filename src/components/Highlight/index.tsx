import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';

// Generic helper function to create a component from a CSS class
const createHlComponent = (className: string) => {
    return ({ children }: PropsWithChildren<{}>) => (
        <span className={className}>{children}</span>
    );
};

/* --- Prog (Programming Languages) --- */
export const ProgKeyword = createHlComponent(styles.ProgKeyword);
export const ProgString = createHlComponent(styles.ProgString);
export const ProgLiteral = createHlComponent(styles.ProgLiteral);
export const ProgFunction = createHlComponent(styles.ProgFunction);
export const ProgDefinition = createHlComponent(styles.ProgDefinition);
export const ProgProperty = createHlComponent(styles.ProgProperty);
export const ProgVariable = createHlComponent(styles.ProgVariable);
export const ProgOperator = createHlComponent(styles.ProgOperator);
export const ProgSpecial = createHlComponent(styles.ProgSpecial);
export const ProgParameter = createHlComponent(styles.ProgParameter);
export const ProgComment = createHlComponent(styles.ProgComment);
export const ProgPunctuation = createHlComponent(styles.ProgPunctuation);

/* --- Markup (HTML, XML) --- */
export const MarkupTag = createHlComponent(styles.MarkupTag);
export const MarkupName = createHlComponent(styles.MarkupName);
export const MarkupAttribute = createHlComponent(styles.MarkupAttribute);
export const MarkupValue = createHlComponent(styles.MarkupValue);
export const MarkupEntity = createHlComponent(styles.MarkupEntity);
export const MarkupComment = createHlComponent(styles.MarkupComment);

/* --- Shell (Bash, Zsh) --- */
export const ShellPrompt = createHlComponent(styles.ShellPrompt);
export const ShellCommand = createHlComponent(styles.ShellCommand);
export const ShellArgument = createHlComponent(styles.ShellArgument);
export const ShellOption = createHlComponent(styles.ShellOption);
export const ShellString = createHlComponent(styles.ShellString);
export const ShellVariable = createHlComponent(styles.ShellVariable);
export const ShellOperator = createHlComponent(styles.ShellOperator);
export const ShellOutput = createHlComponent(styles.ShellOutput);
export const ShellComment = createHlComponent(styles.ShellComment);

/* --- Log (Logging & Diagnostics) --- */
export const LogTrace = createHlComponent(styles.LogTrace);
export const LogDebug = createHlComponent(styles.LogDebug);
export const LogInfo = createHlComponent(styles.LogInfo);
export const LogNotice = createHlComponent(styles.LogNotice);
export const LogSuccess = createHlComponent(styles.LogSuccess);
export const LogWarning = createHlComponent(styles.LogWarning);
export const LogError = createHlComponent(styles.LogError);
export const LogFatal = createHlComponent(styles.LogFatal);
export const LogMain = createHlComponent(styles.LogMain);
export const LogMuted = createHlComponent(styles.LogMuted);
export const LogSubdued = createHlComponent(styles.LogSubdued);
