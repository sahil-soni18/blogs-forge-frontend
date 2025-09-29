"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IBlog } from "@/features/Blogs/types";
import { useRouter } from "next/navigation";

interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
}

interface IBlogTable {
  blogs: IBlog[];
}

export default function AdminBlogsPage({ blogs }: IBlogTable) {

    const router = useRouter();

  const handleAdd = () => {
    console.log("Add New Blog");
    router.push(`/admin/blogs`);
    return;

  };

  const handleEdit = (slug: string) => {
    console.log("Edit Blog", slug);
    
    router.push(`/admin/blogs/edit/${slug}`);
    return;
  };

  const handleDelete = (id: number) => {
    console.log("Delete Blog", id);
  };

  const handleView = (slug: string) => {
    router.push(`/blogs/${slug}`);
    return;
  };

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Box p={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">All Blogs</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          onClick={handleAdd}
        >
          Add Blog
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "5%" }}>ID</TableCell>
              <TableCell sx={{ width: "20%" }}>Title</TableCell>
              <TableCell sx={{ width: "20%" }}>Slug</TableCell>
              <TableCell sx={{ width: "35%" }}>Description</TableCell>
              <TableCell sx={{ width: "20%", textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.slug}</TableCell>
                <TableCell>
                  <Tooltip title={blog.description} arrow>
                    <span>{truncateDescription(blog.description, 50)}</span>
                  </Tooltip>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleView(blog.slug!)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleEdit(blog.slug!)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(blog.id!)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}