"use client";

import React, { useEffect, useState } from "react";

import { Edit, Trash } from "lucide-react";

import styles from "../styles/pages/productsList.module.scss";
import { Input } from "@/components/inputs/defaultInput";
import Button from "@/components/buttons/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/tables/table";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isError, setIsError] = useState(false);
  const [isErrorText, setIsErrorText] = useState("");

  //   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //     setSearchQuery(e.target.value);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4>Products List</h4>
        </div>

        <div className={styles.topBar}>
          <Input
            // placeholder={t("search-user")}
            value={searchQuery}
            // onChange={handleSearchChange}
            // icon={<Search className="text-gray-400" />}
          />
          <Button variant="primary">Create Product</Button>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Thumbnail image</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {teamStore.teams?.admins?.length > 0 ? (
              teamStore.teams.admins.map((admin, index) => ( */}
            <TableRow>
              <TableCell align="left">1</TableCell>

              <TableCell align="left">yes</TableCell>
              <TableCell align="left">yes</TableCell>
              <TableCell align="left">yes</TableCell>
              <TableCell align="left">
                <Button variant="secondary" className={styles.actionButton}>
                  <Edit />
                </Button>
                <Button variant="secondary" className={styles.actionButton}>
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>

            {/* <TableRow>
                <TableCell align="center" colSpan={4}>
                  {t("no-data")}
                </TableCell>
              </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
