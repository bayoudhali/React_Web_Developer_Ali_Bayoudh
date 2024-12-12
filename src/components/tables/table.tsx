import React from "react";
import styles from "../../styles/components/table.module.scss";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeadProps {
  children: React.ReactNode;
}

interface TableBodyProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
}

interface TableCellProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <div className={`${styles.tableContainer} ${className}`}>{children}</div>
  );
};

export const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return <div className={styles.tableHead}>{children}</div>;
};

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <div className={styles.tableBody}>{children}</div>;
};

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <div className={styles.tableRow}>{children}</div>;
};

export const TableCell: React.FC<TableCellProps> = ({
  children,
  align = "left",
}) => {
  return (
    <div className={`${styles.tableCell} ${styles[`align-${align}`]}`}>
      {children}
    </div>
  );
};
