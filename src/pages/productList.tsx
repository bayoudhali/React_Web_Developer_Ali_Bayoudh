import { useState } from "react";
import * as ProdcutService from "../services/product.service";
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
import { useQuery } from "@tanstack/react-query";
import TooltipComponent from "@/components/Tooltips/tooltipComponent";
import { displayShortTitle } from "@/utils/functions/format";

const ProductList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: ProdcutService.default.getListProducts,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const totalPages = Math.ceil((data?.products?.length || 0) / itemsPerPage);

  const currentPageData = data?.products
    ? data.products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4>Products List</h4>
        </div>

        <div className={styles.topBar}>
          <Input placeholder="Search a product" />
          <Button variant="primary">Create Product</Button>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price ($)</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Thumbnail image</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData &&
              currentPageData.map((product, index) => (
                <TableRow key={index}>
                  <TableCell align="left">
                    <TooltipComponent
                      tooltipText={product.title}
                      child={<p> {displayShortTitle(product.title)}</p>}
                    ></TooltipComponent>
                  </TableCell>
                  <TableCell align="left">{product.price}</TableCell>
                  <TableCell>
                    <TooltipComponent
                      tooltipText={product.description}
                      child={<p> {displayShortTitle(product.description)}</p>}
                    ></TooltipComponent>
                  </TableCell>
                  <TableCell align="left">
                    <div className={styles.thumbnailContainer}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="thumbnail-image"
                      />
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <Button variant="secondary" className={styles.actionButton}>
                      <Edit />
                    </Button>
                    <Button variant="secondary" className={styles.actionButton}>
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <div className={styles.paginationControls}>
          <Button
            variant="secondary"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="secondary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
