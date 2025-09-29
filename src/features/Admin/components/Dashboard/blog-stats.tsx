"use client";

import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Example dummy data
const blogStats = {
  total: 25,
  categories: [
    { name: "Tech", value: 15 },
    { name: "Astronomy", value: 10 },
  ],
  status: { published: 18, draft: 7 },
  recent: [
    { id: 1, title: "Next.js Middleware Explained", category: "Tech" },
    { id: 2, title: "Black Holes & Event Horizons", category: "Astronomy" },
  ],
};

const COLORS = ["#1976d2", "#9c27b0", "#ff9800", "#4caf50"];

export default function BlogStats() {
  return (
    <Grid container spacing={3} sx={{ mt: 8}}>
      {/* Total Blogs */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6">Total Blogs</Typography>
            <Typography variant="h3" fontWeight={600}>
              {blogStats.total}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Category Distribution Chart */}

      <Grid size={{ xs: 12, md: 4 }}>
        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6">By Category</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={blogStats.categories}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={70}
                  label
                >
                  {blogStats.categories.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Published vs Draft */}

      {/* <Grid size={{ xs: 12, md: 4 }}>
        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6">Status</Typography>
            <Typography>✅ Published: {blogStats.status.published}</Typography>
            <Typography>📝 Drafts: {blogStats.status.draft}</Typography>
          </CardContent>
        </Card>
      </Grid> */}

      {/* Recent Blogs */}

      {/* <Grid size={{ xs: 12 }}>
        <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6">Recent Blogs</Typography>
            <Divider sx={{ my: 1 }} />
            {blogStats.recent.map((blog) => (
              <Typography key={blog.id} sx={{ mb: 0.5 }}>
                • {blog.title} <small>({blog.category})</small>
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  );
}
