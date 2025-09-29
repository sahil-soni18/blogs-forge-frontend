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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Blog {
  id: number;
  title: string;
  slug: string;
  description: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Replace this with API fetch
    const fetchBlogs = async () => {
      const data = [
        { id: 1, title: "Blog 1", slug: "blog-1", description: "Description 1" },
        { id: 2, title: "Blog 2", slug: "blog-2", description: "Description 2" },
      ];
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleAdd = () => {
    // Navigate to add blog page
    console.log("Add New Blog");
  };

  const handleEdit = (id: number) => {
    console.log("Edit Blog", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete Blog", id);
  };

  const handleView = (id: number) => {
    console.log("View Blog", id);
  };

  return (
    <Box p={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
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
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.slug}</TableCell>
                <TableCell>{blog.description}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleView(blog.id)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleEdit(blog.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(blog.id)}
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
