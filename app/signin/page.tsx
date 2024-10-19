"use client";
import React from "react";
import "./style.css";
import Image from "next/image";
import aims from "./aims.png";
import {
  Box,
  Button,
  Card,
  Icon,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const items = [
    {
      icon: <Icon sx={{ color: "black" }} />,
      title: "Adaptable performance",
      description:
        "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
    },
    {
      icon: <Icon sx={{ color: "black" }} />,
      title: "Built to last",
      description:
        "Experience unmatched durability that goes above and beyond with lasting investment.",
    },
    {
      icon: <Icon sx={{ color: "black" }} />,
      title: "Great user experience",
      description:
        "Integrate our product into your routine with an intuitive and easy-to-use interface.",
    },
    {
      icon: <Icon sx={{ color: "black" }} />,
      title: "ALS functionality",
      description:
        "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
    },
  ];
  return (
    <div className="signin-outer-container">
      <div className="signin-inner-container">
        <div className="signin-left-container">
          <Stack
            sx={{
              flexDirection: "column",
              alignSelf: "center",
              gap: 4,
              maxWidth: 450,
            }}
          >
            {items.map((item, index) => (
              <Stack key={index} direction="row" sx={{ gap: 2 }}>
                {item.icon}
                <div>
                  <Typography
                    gutterBottom
                    fontSize={28}
                    sx={{ fontWeight: "medium", color: "black" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            ))}
          </Stack>
        </div>
        <Card className="signin-right-container">
          <div className="signin-header-container">
            <Image
              src={aims}
              alt="aims logo"
              width={100}
              height={100}
              className="signin-aimslogo"
            />
            <Typography fontSize={25}>Sign in</Typography>
          </div>
          <Typography fontSize={30}>Movie Recommender</Typography>
          <div className="signin-form-container">
            <div className="signin-input-container">
              <InputLabel>Email</InputLabel>
              <TextField
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={"primary"}
                sx={{ ariaLabel: "email" }}
                size="small"
              />
            </div>
            <div className="signin-input-container">
              <InputLabel>Password</InputLabel>
              <TextField
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                size="small"
              />
            </div>
            <Button
              type="submit"
              sx={{ width: "90%" }}
              variant="contained"
              onClick={() => {
                router.push("/home");
              }}
            >
              Sign in
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <span>
                <a href="/">Sign up</a>
              </span>
            </Typography>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
