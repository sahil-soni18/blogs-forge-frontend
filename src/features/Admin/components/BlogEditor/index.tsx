// "use client";

// import { useState, useEffect, useCallback } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Chip,
//   Stack,
//   InputLabel,
//   MenuItem,
//   Select,
//   FormControl,
// } from "@mui/material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDropzone } from "react-dropzone";
// import MDPreview from "@/components/MDPreview/MDPreview";
// import { useUploadFile } from "../../hooks/useUploadImage";

// interface BlogFormData {
//   title: string;
//   description: string;
//   content: string;
//   category: string;
//   imageUrl: string | File | null;
//   technologies: string[];
//   slug: string;
//   readTime: string;
// }

// export default function BlogEditorPage() {
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [techInput, setTechInput] = useState("");
//   const fileUpload = useUploadFile();

//   const blogSchema = Yup.object({
//     title: Yup.string().required("Title is Required..."),
//     description: Yup.string().required("Description is Required..."),
//     content: Yup.string().required("Content is Required..."),
//     category: Yup.string().required("Category is Required..."),
//     slug: Yup.string().required("Slug is Required..."),
//     readTime: Yup.string().required("Read Time is Required..."),
//     imageUrl: Yup.mixed().nullable(),
//     technologies: Yup.array().of(Yup.string()),
//   });

//   const formik = useFormik<BlogFormData>({
//     initialValues: {
//       title: "",
//       description: "",
//       content: "",
//       category: "",
//       imageUrl: null,
//       technologies: [],
//       slug: "",
//       readTime: "",
//     },
//     validationSchema: blogSchema,
//     onSubmit: async (values) => {
//       if (values.imageUrl && values.imageUrl instanceof File) {
//         const { publicUrl } = await fileUpload.mutateAsync(values.imageUrl);
//         // Create a new object to avoid mutating the original values
//         const submittedValues = {
//           ...values,
//           imageUrl: publicUrl,
//         };
//         console.log("Blog Data:", submittedValues);
//       } else {
//         console.log("Blog Data:", values);
//       }
//     },
//   });

//   const { setFieldValue, values, handleSubmit, errors, touched } = formik;

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     if (acceptedFiles.length > 0) {
//       setFieldValue("imageUrl", acceptedFiles[0]);
//       setImagePreview(URL.createObjectURL(acceptedFiles[0]));
//     }
//   }, [setFieldValue]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: { "image/*": [] },
//   });

//   // Update slug automatically - with proper dependencies
//   useEffect(() => {
//     if (values.title.trim()) {
//       const slug = values.title.trim().toLowerCase().replace(/\s+/g, "-");
//       // Only update if the slug would actually change
//       if (slug !== values.slug) {
//         setFieldValue("slug", slug);
//       }
//     }
//   }, [values.title, values.slug, setFieldValue]);

//   // Update read time automatically - with proper dependencies
//   useEffect(() => {
//     const words = values.content.trim().split(/\s+/).length;
//     const time = Math.ceil(words / 200); // avg 200 words/min
//     const newReadTime = words > 0 ? `${time} min` : "";

//     // Only update if the read time would actually change
//     if (newReadTime !== values.readTime) {
//       setFieldValue("readTime", newReadTime);
//     }
//   }, [values.content, values.readTime, setFieldValue]);

//   const handleAddTech = () => {
//     if (techInput && !values.technologies.includes(techInput)) {
//       setFieldValue("technologies", [...values.technologies, techInput]);
//       setTechInput("");
//     }
//   };

//   const handleRemoveTech = (tech: string) => {
//     setFieldValue(
//       "technologies",
//       values.technologies.filter((t) => t !== tech)
//     );
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleAddTech();
//     }
//   };

//   return (
//     <Box p={4} sx={{ mt: 4 }}>
//       <Typography variant="h5" mb={3}>
//         Blog Editor
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Stack spacing={3}>
//           <TextField
//             label="Title"
//             fullWidth
//             name="title"
//             value={values.title}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={touched.title && Boolean(errors.title)}
//             helperText={touched.title && errors.title}
//           />
//           <TextField
//             label="Description"
//             fullWidth
//             name="description"
//             value={values.description}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={touched.description && Boolean(errors.description)}
//             helperText={touched.description && errors.description}
//           />

//           <FormControl fullWidth error={touched.category && Boolean(errors.category)}>
//             <InputLabel>Category</InputLabel>
//             <Select
//               name="category"
//               value={values.category}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               label="Category"
//             >
//               <MenuItem value="Tech">Tech</MenuItem>
//               <MenuItem value="Astronomy">Astronomy</MenuItem>
//               <MenuItem value="Finance">Finance</MenuItem>
//               <MenuItem value="Horror">Horror</MenuItem>
//             </Select>
//             {touched.category && errors.category && (
//               <Typography color="error" variant="caption">
//                 {errors.category}
//               </Typography>
//             )}
//           </FormControl>

//           {/* Image Upload */}
//           <Box>
//             <Typography variant="subtitle1" mb={1}>
//               Upload Image
//             </Typography>
//             <Box
//               {...getRootProps()}
//               sx={{
//                 border: "2px dashed gray",
//                 borderRadius: 2,
//                 p: 2,
//                 textAlign: "center",
//                 cursor: "pointer",
//                 backgroundColor: isDragActive ? "#f0f0f0" : "transparent",
//               }}
//             >
//               <input {...getInputProps()} />
//               {isDragActive
//                 ? "Drop the file here..."
//                 : "Drag & drop an image here, or click to select file"}
//             </Box>
//             {imagePreview && (
//               <Box mt={2}>
//                 <Typography variant="subtitle2">Preview:</Typography>
//                 <img
//                   src={imagePreview}
//                   alt="Preview"
//                   style={{ maxWidth: "100%", maxHeight: 200, objectFit: "contain" }}
//                 />
//               </Box>
//             )}
//           </Box>

//           {/* Technologies */}
//           <Box>
//             <TextField
//               label="Add Technology"
//               value={techInput}
//               onChange={(e) => setTechInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               helperText="Press Enter to add technology"
//             />
//             <Stack direction="row" spacing={1} mt={1} flexWrap="wrap" gap={1}>
//               {values.technologies.map((tech) => (
//                 <Chip
//                   key={tech}
//                   label={tech}
//                   onDelete={() => handleRemoveTech(tech)}
//                 />
//               ))}
//             </Stack>
//           </Box>

//           <TextField
//             label="Slug"
//             fullWidth
//             name="slug"
//             value={values.slug}
//             onChange={formik.handleChange}
//             helperText="Auto-generated from title"
//           />
//           <TextField
//             label="Read Time"
//             fullWidth
//             name="readTime"
//             value={values.readTime}
//             onChange={formik.handleChange}
//             helperText="Auto-calculated from content"
//           />

//           {/* Markdown Editor with live preview */}
//           <Box
//             display="flex"
//             gap={2}
//             sx={{ width: "100%", flexWrap: "wrap", minHeight: 400 }}
//           >
//             <TextField
//               label="Markdown Content"
//               multiline
//               minRows={15}
//               fullWidth
//               name="content"
//               value={values.content}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={touched.content && Boolean(errors.content)}
//               helperText={touched.content && errors.content}
//               sx={{ flex: "1 1 50%", minWidth: 0 }}
//             />
//             <Box
//               sx={{
//                 flex: "1 1 50%",
//                 minWidth: 300,
//                 minHeight: 400,
//                 bgcolor: "background.paper",
//                 border: "1px solid",
//                 borderColor: "divider",
//                 borderRadius: 1,
//                 p: 2,
//                 overflow: "auto",
//               }}
//             >
//               <MDPreview content={values.content} />
//             </Box>
//           </Box>

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={fileUpload.isPending}
//           >
//             {fileUpload.isPending ? "Uploading..." : "Save Blog"}
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// }
"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Chip,
  Stack,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Divider,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import dynamic from "next/dynamic";

// Lazy-load markdown preview
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

export interface BlogFormData {
  title: string;
  description: string;
  content: string;
  category: string;
  imageUrl: string | File | null;
  technologies: string[];
  slug: string;
  readTime: string;
}

interface BlogEditorProps {
  initialValues?: BlogFormData;
  onSubmit: (data: BlogFormData) => void;
  isEdit?: boolean;
}

const blogSchema = Yup.object({
  title: Yup.string().required("Title is Required..."),
  description: Yup.string().required("Description is Required..."),
  content: Yup.string().required("Content is Required..."),
  category: Yup.string().required("Category is Required..."),
  slug: Yup.string().required("Slug is Required..."),
  readTime: Yup.string().required("Read Time is Required..."),
  imageUrl: Yup.mixed().nullable(),
  technologies: Yup.array().of(Yup.string()),
});

export default function BlogEditor({
  initialValues,
  onSubmit,
  isEdit = false,
}: BlogEditorProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(
    typeof initialValues?.imageUrl === "string" ? initialValues.imageUrl : null
  );
  const [techInput, setTechInput] = useState("");

  const formik = useFormik<BlogFormData>({
    initialValues: initialValues || {
      title: "",
      description: "",
      content: "",
      category: "",
      imageUrl: null,
      technologies: [],
      slug: "",
      readTime: "",
    },
    validationSchema: blogSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const { setFieldValue, values, errors, touched } = formik;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setFieldValue("imageUrl", acceptedFiles[0]);
        setImagePreview(URL.createObjectURL(acceptedFiles[0]));
      }
    },
    [setFieldValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  // Update slug automatically - only for new blogs
  useEffect(() => {
    if (values.title.trim() && !isEdit) {
      const slug = values.title.trim().toLowerCase().replace(/\s+/g, "-");
      if (slug !== values.slug) {
        setFieldValue("slug", slug);
      }
    }
  }, [values.title, values.slug, setFieldValue, isEdit]);

  // Update read time automatically
  useEffect(() => {
    const words = values.content.trim().length === 0 ? 0 : values.content.trim().split(/\s+/).length;
    const time = Math.ceil(words / 200); // avg 200 words/min
    const newReadTime = words > 0 ? `${time} min read` : "";

    if (newReadTime !== values.readTime) {
      setFieldValue("readTime", newReadTime);
    }
  }, [values.content, values.readTime, setFieldValue]);

  const handleAddTech = () => {
    if (techInput && !values.technologies.includes(techInput)) {
      setFieldValue("technologies", [...values.technologies, techInput]);
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech: string) => {
    setFieldValue(
      "technologies",
      values.technologies.filter((t) => t !== tech)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTech();
    }
  };

  return (
    <Box p={4} sx={{ mt: 4, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h5" mb={3}>
        {isEdit ? "Edit Blog" : "Create New Blog"}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        {/* Top-level grid */}
        <Grid container spacing={3}>
          {/* Title */}
          <Grid size={{ xs: 12 }} >
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          </Grid>

          {/* Description */}
          <Grid size={{ xs: 12 }} >
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              name="description"
              value={values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />
          </Grid>

          {/* Category (left) and Image Upload (right) */}
          <Grid size={{ xs: 12 }} sx={{ mb: 6 }}>
            <FormControl
              fullWidth
              error={touched.category && Boolean(errors.category)}
            >
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Category"
              >
                <MenuItem value="Tech">Tech</MenuItem>
                <MenuItem value="Astronomy">Astronomy</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
              </Select>
              {touched.category && errors.category && (
                <Typography color="error" variant="caption">
                  {errors.category}
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: 6 }}>
            <Typography variant="subtitle1" mb={1}>
              Blog Image {isEdit && "(Leave unchanged to keep current image)"}
            </Typography>
            <Box
              {...getRootProps()}
              sx={{
                border: "2px dashed gray",
                borderRadius: 2,
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: isDragActive ? "#f0f0f0" : "transparent",
                transition: "background-color 0.2s ease",
              }}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <Typography>Drop the file here...</Typography>
              ) : (
                <Typography>
                  Drag & drop an image here, or click to select file
                </Typography>
              )}
            </Box>

            {/* Image Previews */}
            {imagePreview && (
              <Box mt={2}>
                <Typography variant="subtitle2">Preview:</Typography>
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: 200,
                    objectFit: "contain",
                    borderRadius: "8px",
                    marginTop: "8px",
                  }}
                />
              </Box>
            )}

            {isEdit &&
              initialValues?.imageUrl &&
              typeof initialValues.imageUrl === "string" &&
              !imagePreview && (
                <Box mt={2}>
                  <Typography variant="subtitle2">Current Image:</Typography>
                  <img
                    src={initialValues.imageUrl}
                    alt="Current"
                    style={{
                      maxWidth: "100%",
                      maxHeight: 200,
                      objectFit: "contain",
                      borderRadius: "8px",
                      marginTop: "8px",
                    }}
                  />
                </Box>
              )}
          </Grid>

          {/* Technologies */}
          <Grid size={{ xs: 12 }} >
            <TextField
              fullWidth
              label="Add Technology"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={handleKeyDown}
              helperText="Press Enter to add technology"
            />
            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap" gap={1}>
              {values.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  onDelete={() => handleRemoveTech(tech)}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Stack>
          </Grid>

          {/* Slug & Read Time */}
          <Grid size={{ xs: 12 }} sx={{ mb: 6 }}>
            <TextField
              fullWidth
              label="Slug"
              name="slug"
              value={values.slug}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.slug && Boolean(errors.slug)}
              helperText={
                (touched.slug && errors.slug) ||
                (isEdit ? "Slug can be edited manually" : "Auto-generated from title")
              }
              disabled={!isEdit}
            />
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: 6 }}>
            <TextField
              fullWidth
              label="Read Time"
              name="readTime"
              value={values.readTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.readTime && Boolean(errors.readTime)}
              helperText={(touched.readTime && errors.readTime) || "Auto-calculated from content"}
              disabled
            />
          </Grid>

          {/* Markdown Editor with Live Preview */}
          
          <Grid size={{ xs: 12 }} >
            <Typography variant="h6" gutterBottom sx={{ mb: 0 }}>
              Content (Markdown)
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              {/* Editor */}
              <Grid size={{ xs: 12 }} sx={{ display: "flex", flexDirection: "column", mb: 6}}>
                <TextField
                  fullWidth
                  multiline
                  rows={20}
                  name="content"
                  value={values.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={touched.content && Boolean(errors.content)}
                  helperText={touched.content && errors.content}
                  placeholder="Write your blog content in Markdown..."
                  sx={{ flex: 1, minHeight: 0 }}
                />
              </Grid>

              {/* Preview */}
              <Grid size={{ xs: 12 }} sx={{ display: "flex", flexDirection: "column", mb: 6}}>
                <Typography variant="subtitle1" gutterBottom sx={{ mb: 0 }}>
                  Preview
                </Typography>
                <Divider />
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1,
                    padding: 2,
                    flex: 1,
                    minHeight: 400,
                    bgcolor: "background.paper",
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {values.content ? (
                    <ReactMarkdown>{values.content}</ReactMarkdown>
                  ) : (
                    <Typography color="text.secondary">Preview will appear here...</Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Grid size={{ xs: 12 }} >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Saving..." : isEdit ? "Update Blog" : "Create Blog"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
