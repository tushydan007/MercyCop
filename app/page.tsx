"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
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
  const [searchQuery, setSearchQuery] = useState("");

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

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const paginatedOrNotPaginated = searchQuery
    ? tenders.filter((t) =>
        t.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    : tenders;
  const paginatedData = paginate(
    paginatedOrNotPaginated,
    currentPage,
    pageSize
  );

  return (
    <div className="pt-16 px-10">
      <div className="flex justify-left items-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="outline-none p-2 mb-10 w-10/12 rounded-md bg-slate-100"
        />
      </div>
      <Table>
        <TableCaption>A list of Tenders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="font-bold text-black">Title</TableHead>
            <TableHead className="font-bold text-black">Description</TableHead>
            <TableHead className="font-bold text-black">
              Submission Deadline
            </TableHead>
            <TableHead className="text-left font-bold text-black">
              Delete
            </TableHead>
            <TableHead className="text-left font-bold text-black">
              Download
            </TableHead>
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
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default TenderPage;
