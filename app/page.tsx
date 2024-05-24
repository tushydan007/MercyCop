"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { getTenders } from "@/lib/getTenders";
import { Button } from "@/components/ui/button";
import { PaginationDemo } from "@/components/Pagination";
import { paginate } from "@/lib/paginate";

const TenderPage = () => {
  const [tenders, setTenders] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTenders(data);
    };
    fetchData();
  }, []);

  const handlePaginationNumberChange = (num: number) => {
    setCurrentPage(num);
  };

  const paginatedData = paginate(tenders, currentPage, pageSize);

  return (
    <div className="pt-20">
      <Table>
        <TableCaption>A list of Tenders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Submission Deadline</TableHead>
            <TableHead className="text-left">Delete</TableHead>
            <TableHead className="text-left">Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData?.map((tender) => (
            <TableRow key={tender.id}>
              <TableCell className="font-medium">{tender.id}</TableCell>
              <TableCell>{tender.title}</TableCell>
              <TableCell className="text-left">{tender.body}</TableCell>
              <TableCell className="text-left">May 10, 2024</TableCell>
              <TableCell className="text-left">
                <Button variant={"destructive"}>Delete</Button>
              </TableCell>
              <TableCell className="text-left">
                <Button
                  variant={"secondary"}
                  className="bg-blue-400 text-white"
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationDemo
        tenders={tenders}
        currentPage={currentPage}
        pageSize={pageSize}
        handlePagination={handlePaginationNumberChange}
      />
    </div>
  );
};

export default TenderPage;
