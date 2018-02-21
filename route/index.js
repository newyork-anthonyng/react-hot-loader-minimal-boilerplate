import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/containers/Root";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const html = ReactDOMServer.renderToString(<App />);

    res.render("index", { html });
});

export default router;