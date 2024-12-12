import React from "react";
import styles from "../../styles/components/input.module.scss";
import { cn } from "@/lib/utils"; // Utility to combine class names

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorText, ...props }, ref) => {
    return (
      <div className={cn(styles["default-input"], className)}>
        <input
          ref={ref}
          className={cn(styles.input, { [styles.error]: errorText })}
          {...props}
        />
        {errorText && (
          <div className={styles["error-input"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles["error-icon"]}
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z" />
            </svg>
            {errorText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";